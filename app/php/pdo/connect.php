<?php



$db = new PDO('mysql:host=localhost;dbname=soundstones', 'root', 'root');

try {
    $db = $db = new PDO('mysql:host=localhost;dbname=soundstones', 'root', 'root');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}



?>




