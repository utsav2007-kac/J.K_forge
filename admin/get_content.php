<?php
// admin/get_content.php - Serves categories/products from SQLite database as dynamic JS scripts

require_once __DIR__ . '/db.php';

setup_cors();

// Set appropriate content type
header('Content-Type: application/javascript; charset=utf-8');

$type = isset($_GET['type']) ? trim($_GET['type']) : 'products';

// Map request slugs to JavaScript variable names
$var_map = [
    'products' => 'dbProductsData',
    'mobility' => 'mobilityData',
    'industries-other' => 'industriesOtherData',
    'components' => 'componentsData',
    'other' => 'otherData'
];

$var_name = isset($var_map[$type]) ? $var_map[$type] : 'dbProductsData';
$data = [];

try {
    // Query products from database
    if ($type === 'products' || empty($type)) {
        $sql = "SELECT p.slug, p.title, p.subtitle, p.image, p.description1, p.description2, p.faqs, c.slug as category_slug 
                FROM products p 
                LEFT JOIN categories c ON p.category_id = c.id";
        $prod_stmt = db_query($sql, []);
    } else {
        $slug_map = [
            'mobility' => ['automotive'],
            'industries-other' => ['oil-gas-industry', 'tractor-farm-equipment', 'mining'],
            'components' => ['hydraulic-fitting', 'industrial'],
            'other' => []
        ];
        $target_slugs = isset($slug_map[$type]) ? $slug_map[$type] : [];
        if (!empty($target_slugs)) {
            $placeholders = implode(',', array_fill(0, count($target_slugs), '?'));
            $sql = "SELECT p.slug, p.title, p.subtitle, p.image, p.description1, p.description2, p.faqs, c.slug as category_slug 
                    FROM products p 
                    LEFT JOIN categories c ON p.category_id = c.id 
                    WHERE c.slug IN ($placeholders)";
            $prod_stmt = db_query($sql, $target_slugs);
        } else {
            $sql = "SELECT p.slug, p.title, p.subtitle, p.image, p.description1, p.description2, p.faqs, c.slug as category_slug 
                    FROM products p 
                    LEFT JOIN categories c ON p.category_id = c.id";
            $prod_stmt = db_query($sql, []);
        }
    }
    
    if (isset($prod_stmt)) {
        while ($row = $prod_stmt->fetch(PDO::FETCH_ASSOC)) {
            $item = [
                'title' => $row['title'],
                'subtitle' => $row['subtitle'],
                'image' => $row['image'],
                'description1' => $row['description1'],
                'description2' => $row['description2'],
                'category_slug' => $row['category_slug'],
                'faqs' => !empty($row['faqs']) ? json_decode($row['faqs'], true) : []
            ];
            $clean_slug = ltrim($row['slug'], '/');
            $data['/' . $clean_slug] = $item;
            $data[$clean_slug] = $item;
        }
    }
    
    // Format response as dynamic Javascript block
    $json_content = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    
    echo "window.pageContent = window.pageContent || {};\n\n";
    echo "window.pageContent['{$var_name}'] = {$json_content};\n\n";
    echo "Object.assign(window.pageContent, window.pageContent['{$var_name}']);\n";

} catch (Exception $e) {
    echo "// Error rendering content: " . $e->getMessage();
}
