<?php
// admin/jwt.php - Functional JWT Authentication Utilities

// Set a secure secret key for JWT signatures
define('JWT_SECRET', 'jk_forge_secret_key_892347981237984');
define('JWT_EXPIRY', 86400); // Token valid for 24 hours (86400 seconds)

function base64url_encode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function base64url_decode($data) {
    return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
}

// Generate JWT token from payload
function jwt_encode($payload) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    
    // Add issued-at and expiration
    $payload['iat'] = time();
    $payload['exp'] = time() + JWT_EXPIRY;
    
    $base64UrlHeader = base64url_encode($header);
    $base64UrlPayload = base64url_encode(json_encode($payload));
    
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, JWT_SECRET, true);
    $base64UrlSignature = base64url_encode($signature);
    
    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
}

// Decode and verify JWT token
function jwt_decode($jwt) {
    $tokenParts = explode('.', $jwt);
    if (count($tokenParts) !== 3) {
        return false;
    }
    
    $header = base64url_decode($tokenParts[0]);
    $payload = base64url_decode($tokenParts[1]);
    $signatureProvided = $tokenParts[2];
    
    // Verify signature
    $signatureToCheck = base64url_encode(hash_hmac('sha256', $tokenParts[0] . "." . $tokenParts[1], JWT_SECRET, true));
    if ($signatureProvided !== $signatureToCheck) {
        return false;
    }
    
    $payloadData = json_decode($payload, true);
    
    // Check if expired
    if (isset($payloadData['exp']) && $payloadData['exp'] < time()) {
        return false;
    }
    
    return $payloadData;
}

// Extract JWT token from Authorization header or Query param
function jwt_get_token() {
    $headers = apache_request_headers();
    $authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';
    
    // Fallback if apache_request_headers() doesn't find it (common on some setups)
    if (empty($authHeader) && isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
    }
    
    if (!empty($authHeader) && preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        return $matches[1];
    }
    
    // Fallback to URL parameter
    if (isset($_GET['token'])) {
        return $_GET['token'];
    }
    
    return null;
}

// Enforce authentication check, outputs 401 on failure
function jwt_require_auth() {
    $token = jwt_get_token();
    if (!$token) {
        header('HTTP/1.1 401 Unauthorized');
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Missing authorization token']);
        exit;
    }
    
    $decoded = jwt_decode($token);
    if (!$decoded) {
        header('HTTP/1.1 401 Unauthorized');
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Invalid or expired authorization token']);
        exit;
    }
    
    return $decoded;
}
