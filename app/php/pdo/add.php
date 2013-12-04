<?php
require_once 'connect.php';
?>



<?php


$patchData = $_POST['mydata'];
$encoded = json_encode($patchData,true);
$decoded = json_decode($encoded, true);

$synthObj = $decoded['synths']; 








$numberOfSynths = count($synthObj);

$patchName = $decoded['patch_name'];
$db->query("INSERT INTO patches (patch_name) VALUES ('$patchName')");

$insertID = $db->lastInsertId();

for( $i=0; $i < $numberOfSynths; $i+=1 ){
$synthName = $decoded['synths'][$i]["synth_name"];
$synthXPos = $decoded['synths'][$i]["xpos"];
$synthYPos = $decoded['synths'][$i]["ypos"];
$synthNotePitchObj = $decoded['synth_note_pitch_sliders'][$i]["itemValName"]; 
$synthOctavePitchObj = $decoded['synth_octave_pitch_sliders'][$i]["itemValName"]; 


$db->query("INSERT INTO synths (patch_id,synth_name,xpos,ypos,pitch,pitch_octave) 
VALUES ($insertID,'$synthName','$synthXPos','$synthYPos','$synthNotePitchObj', '$synthOctavePitchObj' )");









};




?>