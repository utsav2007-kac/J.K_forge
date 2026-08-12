<?php
// admin/upload.php - Authenticated image upload handler for products

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/jwt.php';

setup_cors();

// Authenticate session via JWT token
$token = get_bearer_token();

if (empty($token) || !jwt_decode($token)) {
    header('HTTP/1.1 401 Unauthorized');
    echo json_encode(['error' => 'Unauthorized access token']);
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
$error = $file['error'];

if ($error !== UPLOAD_ERR_OK) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'File upload failed with error code: ' . $error]);
    exit;
}

// Validate file content type using finfo
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
    echo json_encode(['error' => 'Invalid file format. Only JPG, PNG, GIF, and WEBP images are allowed.']);
    exit;
}

// Ensure the uploads directory exists under site root
$uploads_dir = dirname(__DIR__) . '/uploads';
if (!is_dir($uploads_dir)) {
    if (!mkdir($uploads_dir, 0755, true)) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(['error' => 'Failed to create uploads directory']);
        exit;
    }
}

// Build unique name
$ext = $allowed_types[$mime_type];
$filename = 'img_' . bin2hex(random_bytes(8)) . '.' . $ext;
$target_path = $uploads_dir . '/' . $filename;

if (move_uploaded_file($file['tmp_name'], $target_path)) {
    echo json_encode([
        'success' => true,
        'message' => 'Image uploaded successfully',
        'url' => './uploads/' . $filename
    ]);
} else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['error' => 'Failed to write file to storage']);
}
