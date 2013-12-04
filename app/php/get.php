

<?php require_once 'connect.php'; ?>



<?php
$result = mysqli_query($con,"SELECT * FROM patches");
echo "<ul id='patch-names' border='0'> <b>User Patches</b> <br> <b><a id='595' class='patch-name'>Example Patch</a></b>";

while($row = mysqli_fetch_array($result))    {
	echo "<li class='new-patch'> <a id='{$row['patch_id' ] }' class='patch-name'>{$row['patch_name']}</a> 
</li>";
}

echo "</ul>";
mysqli_close($con);
?>