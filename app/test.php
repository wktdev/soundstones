<?php
require_once 'php/pdo/connect.php';
?>



<?php


$stmt = $db->query('SELECT * FROM patches');
$row_count = $stmt->rowCount();
echo $row_count.' rows selected';
?>