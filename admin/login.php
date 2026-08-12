<?php
// admin/login.php - Admin Authentication Handler
ob_start();

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/jwt.php';

setup_cors();

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    ob_clean();
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

$username = isset($input['username']) ? trim($input['username']) : '';
$password = isset($input['password']) ? trim($input['password']) : '';

if (empty($username) || empty($password)) {
    header('HTTP/1.1 400 Bad Request');
    ob_clean();
    echo json_encode(['error' => 'Username and password are required']);
    exit;
}

try {
    // Find user
    $stmt = db_query("SELECT id, username, password FROM users WHERE username = :username", ['username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user || !password_verify($password, $user['password'])) {
        header('HTTP/1.1 401 Unauthorized');
        ob_clean();
        echo json_encode(['error' => 'Invalid username or password']);
        exit;
    }
    
    // Generate JWT token
    $payload = [
        'user_id' => $user['id'],
        'username' => $user['username']
    ];
    $token = jwt_encode($payload);
    
    ob_clean();
    echo json_encode([
        'success' => true,
        'token' => $token,
        'user' => [
            'username' => $user['username']
        ]
    ]);

} catch (Exception $e) {
    header('HTTP/1.1 500 Internal Server Error');
    ob_clean();
    echo json_encode(['error' => 'Login processing failed: ' . $e->getMessage()]);
}
