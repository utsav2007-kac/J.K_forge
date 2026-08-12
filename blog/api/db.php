<?php
// blog/api/db.php - Blog database connection (reuses main admin DB)

$db_file = dirname(dirname(__DIR__)) . '/admin/db.sqlite';
$db = null;

try {
    $db = new PDO("sqlite:" . $db_file);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("PRAGMA foreign_keys = ON;");

    // Create blog_posts table if not exists
    $db->exec("CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        cover_image TEXT,
        excerpt TEXT,
        content TEXT,
        author TEXT DEFAULT 'Admin',
        status TEXT DEFAULT 'published',
        views INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // Migration: add views column if missing
    try {
        $db->exec("ALTER TABLE blog_posts ADD COLUMN views INTEGER DEFAULT 0");
    } catch (Exception $ex) {
        // Column already exists
    }

} catch (PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

function blog_db_query($query, $params = []) {
    global $db;
    $stmt = $db->prepare($query);
    $stmt->execute($params);
    return $stmt;
}

function blog_setup_cors() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }
}

// Reuse JWT from main admin
require_once dirname(dirname(__DIR__)) . '/admin/jwt.php';

function blog_get_bearer_token() {
    $auth_header = '';
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['HTTP_AUTHORIZATION'];
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    } elseif (function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        if (isset($headers['Authorization'])) {
            $auth_header = $headers['Authorization'];
        } elseif (isset($headers['authorization'])) {
            $auth_header = $headers['authorization'];
        }
    }
    if (!empty($auth_header) && preg_match('/Bearer\s(\S+)/', $auth_header, $matches)) {
        return $matches[1];
    }
    return null;
}

function blog_require_auth() {
    $token = blog_get_bearer_token();
    if (empty($token) || !jwt_decode($token)) {
        header('HTTP/1.1 401 Unauthorized');
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
    return jwt_decode($token);
}
