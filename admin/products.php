<?php
// admin/products.php - Products / Detail API

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
    $category_id = isset($_GET['category_id']) ? (int)$_GET['category_id'] : 0;
    $search = isset($_GET['search']) ? trim($_GET['search']) : '';
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    $slug = isset($_GET['slug']) ? trim($_GET['slug']) : '';
    
    try {
        if ($id > 0) {
            // Fetch single product by ID
            $stmt = db_query("
                SELECT p.*, c.title as category_title, c.slug as category_slug 
                FROM products p 
                LEFT JOIN categories c ON p.category_id = c.id 
                WHERE p.id = :id
            ", ['id' => $id]);
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($product) {
                echo json_encode($product);
            } else {
                header('HTTP/1.1 404 Not Found');
                echo json_encode(['error' => 'Product not found']);
            }
            exit;
        }
        
        if (!empty($slug)) {
            // Fetch single product by slug
            $clean_slug = ltrim($slug, '/');
            $stmt = db_query("
                SELECT p.*, c.title as category_title, c.slug as category_slug 
                FROM products p 
                LEFT JOIN categories c ON p.category_id = c.id 
                WHERE p.slug = :slug OR p.slug = :slash_slug
            ", ['slug' => $clean_slug, 'slash_slug' => '/' . $clean_slug]);
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($product) {
                echo json_encode($product);
            } else {
                header('HTTP/1.1 404 Not Found');
                echo json_encode(['error' => 'Product not found']);
            }
            exit;
        }
        
        // Build search filters
        $sql = "SELECT p.*, c.title as category_title, c.slug as category_slug 
                FROM products p 
                JOIN categories c ON p.category_id = c.id 
                WHERE 1=1";
        $params = [];
        
        if ($category_id > 0) {
            $sql .= " AND p.category_id = :category_id";
            $params['category_id'] = $category_id;
        }
        
        if (!empty($search)) {
            $sql .= " AND (p.title LIKE :search OR p.description1 LIKE :search OR p.description2 LIKE :search)";
            $params['search'] = '%' . $search . '%';
        }
        
        $sql .= " ORDER BY p.title ASC";
        
        $stmt = db_query($sql, $params);
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($products);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handle_post() {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $category_id = isset($input['category_id']) ? (int)$input['category_id'] : 0;
    $slug = isset($input['slug']) ? trim($input['slug']) : '';
    $title = isset($input['title']) ? trim($input['title']) : '';
    $subtitle = isset($input['subtitle']) ? trim($input['subtitle']) : '';
    $image = isset($input['image']) ? trim($input['image']) : '';
    $description1 = isset($input['description1']) ? trim($input['description1']) : '';
    $description2 = isset($input['description2']) ? trim($input['description2']) : '';
    
    try {
        // Verify category exists
        $stmt = db_query("SELECT id FROM categories WHERE id = :id", ['id' => $category_id]);
        if (!$stmt->fetch()) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Selected category does not exist']);
            exit;
        }
        
        // Check duplicate product slug
        $stmt = db_query("SELECT id FROM products WHERE slug = :slug", ['slug' => $slug]);
        if ($stmt->fetch()) {
            header('HTTP/1.1 409 Conflict');
            echo json_encode(['error' => 'Product slug already exists']);
            exit;
        }
        
        // Normalize slug to start with a leading slash
        if (substr($slug, 0, 1) !== '/') {
            $slug = '/' . $slug;
        }

        db_query("
            INSERT INTO products (category_id, slug, title, subtitle, image, description1, description2) 
            VALUES (:category_id, :slug, :title, :subtitle, :image, :description1, :description2)
        ", [
            'category_id' => $category_id,
            'slug' => $slug,
            'title' => $title,
            'subtitle' => $subtitle,
            'image' => $image ?: './images/facility.jpg',
            'description1' => $description1,
            'description2' => $description2
        ]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Product created successfully',
            'product_id' => $GLOBALS['db']->lastInsertId()
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handle_put() {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $id = isset($input['id']) ? (int)$input['id'] : 0;
    $category_id = isset($input['category_id']) ? (int)$input['category_id'] : 0;
    $slug = isset($input['slug']) ? trim($input['slug']) : '';
    $title = isset($input['title']) ? trim($input['title']) : '';
    $subtitle = isset($input['subtitle']) ? trim($input['subtitle']) : '';
    $image = isset($input['image']) ? trim($input['image']) : '';
    $description1 = isset($input['description1']) ? trim($input['description1']) : '';
    $description2 = isset($input['description2']) ? trim($input['description2']) : '';
    
    try {
        // Check product exists
        $stmt = db_query("SELECT id FROM products WHERE id = :id", ['id' => $id]);
        if (!$stmt->fetch()) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Product not found']);
            exit;
        }
        
        // Verify category exists
        $stmt = db_query("SELECT id FROM categories WHERE id = :id", ['id' => $category_id]);
        if (!$stmt->fetch()) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Selected category does not exist']);
            exit;
        }
        
        // Check duplicate slug for other records
        $stmt = db_query("SELECT id FROM products WHERE slug = :slug AND id != :id", ['slug' => $slug, 'id' => $id]);
        if ($stmt->fetch()) {
            header('HTTP/1.1 409 Conflict');
            echo json_encode(['error' => 'Product slug already exists']);
            exit;
        }
        
        if (substr($slug, 0, 1) !== '/') {
            $slug = '/' . $slug;
        }

        db_query("
            UPDATE products 
            SET category_id = :category_id, slug = :slug, title = :title, subtitle = :subtitle, 
                image = :image, description1 = :description1, description2 = :description2 
            WHERE id = :id
        ", [
            'category_id' => $category_id,
            'slug' => $slug,
            'title' => $title,
            'subtitle' => $subtitle,
            'image' => $image ?: './images/facility.jpg',
            'description1' => $description1,
            'description2' => $description2,
            'id' => $id
        ]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Product updated successfully'
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
        echo json_encode(['error' => 'Valid product ID is required']);
        exit;
    }
    
    try {
        // Check product exists
        $stmt = db_query("SELECT id FROM products WHERE id = :id", ['id' => $id]);
        if (!$stmt->fetch()) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(['error' => 'Product not found']);
            exit;
        }
        
        db_query("DELETE FROM products WHERE id = :id", ['id' => $id]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Product deleted successfully'
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => $e->getMessage()]);
    }
}
