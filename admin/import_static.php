<?php
// admin/import_static.php - Core data import script to populate SQLite from static files

require_once __DIR__ . '/db.php';

header('Content-Type: application/json');

$content_dir = dirname(__DIR__) . '/content';

if (!is_dir($content_dir)) {
    echo json_encode(['error' => 'Content directory not found at ' . $content_dir]);
    exit;
}

// User defined product categories only
$categories_map = [
    'automotive' => 'Automotive',
    'oil-gas-industry' => 'Oil & Gas Industry',
    'tractor-farm-equipment' => 'Tractor & Farm Equipment',
    'mining' => 'Mining',
    'industrial' => 'Industrial',
    'hydraulic-fitting' => 'Hydraulic Fitting'
];

$files = [
    'mobility.js',
    'industries-other.js',
    'components.js',
    'other.js'
];

$imported_categories = 0;
$imported_products = 0;

try {
    // Clear existing data to prevent duplicates on re-run
    $db->exec("DELETE FROM products");
    $db->exec("DELETE FROM categories");
    
    // Create categories
    $cat_ids = [];
    $insert_cat = $db->prepare("INSERT INTO categories (slug, title) VALUES (:slug, :title)");
    foreach ($categories_map as $slug => $title) {
        $insert_cat->execute([
            'slug' => $slug,
            'title' => $title
        ]);
        $cat_ids[$slug] = $db->lastInsertId();
        $imported_categories++;
    }
    
    // Insert products/pages
    $insert_prod = $db->prepare("INSERT INTO products (
        category_id, slug, title, subtitle, image, description1, description2
    ) VALUES (
        :category_id, :slug, :title, :subtitle, :image, :description1, :description2
    )");
    
    foreach ($files as $filename) {
        $filepath = $content_dir . '/' . $filename;
        if (!file_exists($filepath)) {
            continue;
        }
        
        $content = file_get_contents($filepath);
        if (empty($content)) {
            continue;
        }
        
        // Find category data start
        $start_pos = strpos($content, "Data'] =");
        if ($start_pos === false) {
            $start_pos = strpos($content, 'Data"] =');
        }
        
        if ($start_pos === false) {
            continue;
        }
        
        // Find start and end of JSON payload
        $json_start = strpos($content, '{', $start_pos);
        $json_end = strrpos($content, '}');
        
        if ($json_start === false || $json_end === false || $json_end <= $json_start) {
            continue;
        }
        
        $json_str = substr($content, $json_start, $json_end - $json_start + 1);
        $data = json_decode($json_str, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            continue;
        }
        
        foreach ($data as $product_slug => $prod_data) {

            
            // Determine category classification
            $target_cat_slug = 'industrial'; // default fallback for product pages
            
            // Classify products into user categories based on slug keywords
            $s = strtolower($product_slug);
            if (strpos($s, 'tractor') !== false || strpos($s, 'agricultural') !== false || strpos($s, 'farm') !== false || strpos($s, 'crop') !== false) {
                $target_cat_slug = 'tractor-farm-equipment';
            } elseif (strpos($s, 'mining') !== false || strpos($s, 'excavat') !== false || strpos($s, 'earthmoving') !== false || strpos($s, 'crane') !== false) {
                $target_cat_slug = 'mining';
            } elseif (strpos($s, 'oil') !== false || strpos($s, 'gas') !== false || strpos($s, 'petrochemical') !== false || strpos($s, 'offshore') !== false || strpos($s, 'refinery') !== false) {
                $target_cat_slug = 'oil-gas-industry';
            } elseif (strpos($s, 'hydraulic') !== false || strpos($s, 'fitting') !== false || strpos($s, 'cylinder') !== false || strpos($s, 'flange') !== false || strpos($s, 'coupling') !== false || strpos($s, 'valve') !== false) {
                $target_cat_slug = 'hydraulic-fitting';
            } elseif (strpos($s, 'auto') !== false || strpos($s, 'vehicle') !== false || strpos($s, 'truck') !== false || strpos($s, 'car') !== false || strpos($s, 'axle') !== false || strpos($s, 'knuckle') !== false || strpos($s, 'gear') !== false || strpos($s, 'spindle') !== false || strpos($s, 'shaft') !== false || strpos($s, 'steering') !== false || strpos($s, 'drivetrain') !== false || strpos($s, 'wheel') !== false || strpos($s, 'bearing') !== false) {
                $target_cat_slug = 'automotive';
            } else {
                $target_cat_slug = 'industrial';
            }
            
            $cat_id = $cat_ids[$target_cat_slug];
            
            $insert_prod->execute([
                'category_id' => $cat_id,
                'slug' => $product_slug,
                'title' => isset($prod_data['title']) ? $prod_data['title'] : '',
                'subtitle' => isset($prod_data['subtitle']) ? $prod_data['subtitle'] : 'Precision Component',
                'image' => isset($prod_data['image']) ? $prod_data['image'] : './images/facility.jpg',
                'description1' => isset($prod_data['description1']) ? $prod_data['description1'] : '',
                'description2' => isset($prod_data['description2']) ? $prod_data['description2'] : ''
            ]);
            $imported_products++;
        }
    }
    
    echo json_encode([
        'success' => true,
        'message' => 'Import completed successfully with user product categories only',
        'categories_imported' => $imported_categories,
        'products_imported' => $imported_products
    ]);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
