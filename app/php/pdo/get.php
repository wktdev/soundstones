

<?php require_once 'connect.php'; ?>



<?php


$query = $db->prepare("SELECT * FROM patches");
$query->execute();

echo "<ul id='patch-names' border='0'> <b>Patch Name</b>";


$items = $query->fetchAll();
$lastItem = end($items);


for( $i=0; $i < sizeof($items); $i+=1 ){

	echo "<li class='new-patch'> 
	<a id='{$items[$i]['patch_id']}' class='patch-name'>{$items[$i]['patch_name']}</a> </li>";


};




?>