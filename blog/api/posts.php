<?php
// blog/api/posts.php - Blog Posts CRUD API

require_once __DIR__ . '/db.php';

blog_setup_cors();
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handle_get();
        break;
    case 'POST':
        blog_require_auth();
        handle_post();
        break;
    case 'PUT':
        blog_require_auth();
        handle_put();
        break;
    case 'DELETE':
        blog_require_auth();
        handle_delete();
        break;
    default:
        header('HTTP/1.1 405 Method Not Allowed');
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function handle_get() {
    $slug = isset($_GET['slug']) ? trim($_GET['slug']) : '';
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    $status = isset($_GET['status']) ? trim($_GET['status']) : '';
    $search = isset($_GET['search']) ? trim($_GET['search']) : '';
    $all = isset($_GET['all']); // admin flag to get all statuses

    try {
        // Single post by slug
        if (!empty($slug)) {
            $stmt = blog_db_query("SELECT * FROM blog_posts WHERE slug = :slug", ['slug' => $slug]);
            $post = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($post) {
                // Increment view count for public detail view
                blog_db_query("UPDATE blog_posts SET views = COALESCE(views, 0) + 1 WHERE id = :id", ['id' => $post['id']]);
                $post['views'] = ((int)($post['views'] ?? 0)) + 1;
                echo json_encode($post);
            } else {
                header('HTTP/1.1 404 Not Found');
                echo json_encode(['error' => 'Post not found']);
            }
            return;
        }

        // Single post by ID (for admin editing)
        if ($id > 0) {
            $stmt = blog_db_query("SELECT * FROM blog_posts WHERE id = :id", ['id' => $id]);
            $post = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($post) {
                echo json_encode($post);
            } else {
                header('HTTP/1.1 404 Not Found');
                echo json_encode(['error' => 'Post not found']);
            }
            return;
        }

        // List posts
        $sql = "SELECT id, title, slug, cover_image, excerpt, author, status, views, created_at, updated_at FROM blog_posts WHERE 1=1";
        $params = [];

        if (!$all) {
            // Public: only published
            $sql .= " AND status = 'published'";
        } elseif (!empty($status)) {
            $sql .= " AND status = :status";
            $params['status'] = $status;
        }

        if (!empty($search)) {
            $sql .= " AND (title LIKE :search OR excerpt LIKE :search)";
            $params['search'] = '%' . $search . '%';
        }

        $sql .= " ORDER BY created_at DESC";

        $stmt = blog_db_query($sql, $params);
        $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($posts);

    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function generate_slug($title) {
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
    $slug = preg_replace('/[\s-]+/', '-', $slug);
    $slug = trim($slug, '-');
    return $slug;
}

function handle_post() {
    $input = json_decode(file_get_contents('php://input'), true);

    $title = isset($input['title']) ? trim($input['title']) : '';
    $content = isset($input['content']) ? $input['content'] : '';
    $excerpt = isset($input['excerpt']) ? trim($input['excerpt']) : '';
    $cover_image = isset($input['cover_image']) ? trim($input['cover_image']) : '';
    $author = isset($input['author']) ? trim($input['author']) : 'Admin';
    $status = isset($input['status']) ? trim($input['status']) : 'published';

    if (empty($title)) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Title is required']);
        exit;
    }

    $slug = generate_slug($title);

    try {
        // Check duplicate slug, append number if needed
        $baseSlug = $slug;
        $counter = 1;
        while (true) {
            $stmt = blog_db_query("SELECT id FROM blog_posts WHERE slug = :slug", ['slug' => $slug]);
            if (!$stmt->fetch()) break;
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }

        blog_db_query(
            "INSERT INTO blog_posts (title, slug, cover_image, excerpt, content, author, status) 
             VALUES (:title, :slug, :cover_image, :excerpt, :content, :author, :status)",
            [
                'title' => $title,
                'slug' => $slug,
                'cover_image' => $cover_image,
                'excerpt' => $excerpt,
                'content' => $content,
                'author' => $author,
                'status' => $status
            ]
        );

        global $db;
        echo json_encode([
            'success' => true,
            'message' => 'Blog post created',
            'id' => $db->lastInsertId(),
            'slug' => $slug
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handle_put() {
    $input = json_decode(file_get_contents('php://input'), true);

    $id = isset($input['id']) ? (int)$input['id'] : 0;
    $title = isset($input['title']) ? trim($input['title']) : '';
    $content = isset($input['content']) ? $input['content'] : '';
    $excerpt = isset($input['excerpt']) ? trim($input['excerpt']) : '';
    $cover_image = isset($input['cover_image']) ? trim($input['cover_image']) : '';
    $author = isset($input['author']) ? trim($input['author']) : 'Admin';
    $status = isset($input['status']) ? trim($input['status']) : 'published';

    if ($id <= 0 || empty($title)) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Valid ID and title are required']);
        exit;
    }

    try {
        // Check post exists
        $stmt = blog_db_query("SELECT slug FROM blog_posts WHERE id = :id", ['id' => $id]);
        $existing = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$existing) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Post not found']);
            exit;
        }

        $slug = generate_slug($title);

        // Check duplicate slug for other posts
        $baseSlug = $slug;
        $counter = 1;
        while (true) {
            $stmt = blog_db_query("SELECT id FROM blog_posts WHERE slug = :slug AND id != :id", ['slug' => $slug, 'id' => $id]);
            if (!$stmt->fetch()) break;
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }

        blog_db_query(
            "UPDATE blog_posts SET title = :title, slug = :slug, cover_image = :cover_image, 
             excerpt = :excerpt, content = :content, author = :author, status = :status,
             updated_at = CURRENT_TIMESTAMP WHERE id = :id",
            [
                'title' => $title,
                'slug' => $slug,
                'cover_image' => $cover_image,
                'excerpt' => $excerpt,
                'content' => $content,
                'author' => $author,
                'status' => $status,
                'id' => $id
            ]
        );

        echo json_encode(['success' => true, 'message' => 'Blog post updated', 'slug' => $slug]);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handle_delete() {
    $input = json_decode(file_get_contents('php://input'), true);
    $id = isset($input['id']) ? (int)$input['id'] : 0;

    if ($id <= 0) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Valid post ID required']);
        exit;
    }

    try {
        $stmt = blog_db_query("SELECT id FROM blog_posts WHERE id = :id", ['id' => $id]);
        if (!$stmt->fetch()) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Post not found']);
            exit;
        }

        blog_db_query("DELETE FROM blog_posts WHERE id = :id", ['id' => $id]);
        echo json_encode(['success' => true, 'message' => 'Blog post deleted']);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}
