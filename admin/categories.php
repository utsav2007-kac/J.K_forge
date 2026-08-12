<?php
// admin/categories.php - Product Categories API

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/jwt.php';

setup_cors();

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handle_get();
        break;
    case 'POST':
        jwt_require_auth();
        handle_post();
        break;
    case 'PUT':
        jwt_require_auth();
        handle_put();
        break;
    case 'DELETE':
        jwt_require_auth();
        handle_delete();
        break;
    default:
        header('HTTP/1.1 405 Method Not Allowed');
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function handle_get() {
    try {
        // Return categories along with product counts
        $stmt = db_query("
            SELECT c.id, c.slug, c.title, COUNT(p.id) as product_count 
            FROM categories c 
            LEFT JOIN products p ON c.id = p.category_id 
            GROUP BY c.id 
            ORDER BY c.title ASC
        ");
        $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($categories);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handle_post() {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = isset($input['title']) ? trim($input['title']) : '';
    
    if (empty($title)) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Category title is required']);
        exit;
    }
    
    // Auto-generate slug from title
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
    $slug = preg_replace('/[\s-]+/', '-', $slug);
    $slug = trim($slug, '-');
    
    try {
        // Check duplicate
        $stmt = db_query("SELECT id FROM categories WHERE slug = :slug", ['slug' => $slug]);
        if ($stmt->fetch()) {
            header('HTTP/1.1 409 Conflict');
            echo json_encode(['error' => 'Category slug already exists']);
            exit;
        }
        
        db_query(
            "INSERT INTO categories (slug, title) VALUES (:slug, :title)",
            ['slug' => $slug, 'title' => $title]
        );
        
        echo json_encode([
            'success' => true,
            'message' => 'Category created successfully',
            'category' => [
                'id' => $GLOBALS['db']->lastInsertId(),
                'slug' => $slug,
                'title' => $title
            ]
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
    
    if ($id <= 0 || empty($title)) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Valid category ID and title are required']);
        exit;
    }
    
    // Auto-generate slug from title
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
    $slug = preg_replace('/[\s-]+/', '-', $slug);
    $slug = trim($slug, '-');
    
    try {
        // Check category exists
        $stmt = db_query("SELECT slug FROM categories WHERE id = :id", ['id' => $id]);
        $existing = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$existing) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Category not found']);
            exit;
        }
        
        // Check duplicate slug for other records
        $stmt = db_query("SELECT id FROM categories WHERE slug = :slug AND id != :id", ['slug' => $slug, 'id' => $id]);
        if ($stmt->fetch()) {
            header('HTTP/1.1 409 Conflict');
            echo json_encode(['error' => 'Category slug already exists']);
            exit;
        }
        
        db_query(
            "UPDATE categories SET slug = :slug, title = :title WHERE id = :id",
            ['slug' => $slug, 'title' => $title, 'id' => $id]
        );
        
        echo json_encode([
            'success' => true,
            'message' => 'Category updated successfully'
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handle_delete() {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    
    if ($id <= 0) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Valid category ID is required']);
        exit;
    }
    
    try {
        // Check category exists
        $stmt = db_query("SELECT id FROM categories WHERE id = :id", ['id' => $id]);
        if (!$stmt->fetch()) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Category not found']);
            exit;
        }
        
        // Delete category (cascade deletes products)
        db_query("DELETE FROM categories WHERE id = :id", ['id' => $id]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Category deleted successfully'
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}
