<?php
// blog/api/upload.php - Blog image upload (cover + inline editor images)

require_once __DIR__ . '/db.php';

blog_setup_cors();

// Authenticate
$token = blog_get_bearer_token();
if (empty($token) || !jwt_decode($token)) {
    header('HTTP/1.1 401 Unauthorized');
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

if (!isset($_FILES['image'])) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'No image file uploaded']);
    exit;
}

$file = $_FILES['image'];

if ($file['error'] !== UPLOAD_ERR_OK) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'File upload failed with error code: ' . $file['error']]);
    exit;
}

// Validate MIME type
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime_type = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

$allowed_types = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/gif'  => 'gif',
    'image/webp' => 'webp'
];

if (!array_key_exists($mime_type, $allowed_types)) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'Invalid file format. Only JPG, PNG, GIF, and WEBP allowed.']);
    exit;
}

// Ensure uploads directory exists
$uploads_dir = dirname(__DIR__) . '/uploads';
if (!is_dir($uploads_dir)) {
    mkdir($uploads_dir, 0755, true);
}

$ext = $allowed_types[$mime_type];
$filename = 'blog_' . bin2hex(random_bytes(8)) . '.' . $ext;
$target_path = $uploads_dir . '/' . $filename;

if (move_uploaded_file($file['tmp_name'], $target_path)) {
    echo json_encode([
        'success' => true,
        'message' => 'Image uploaded successfully',
        'url' => 'uploads/' . $filename
    ]);
} else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => 'Failed to save file']);
}
