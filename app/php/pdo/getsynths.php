<?php require_once 'connect.php'; ?>




<?php

$synth_ids =[


];


$patchIDfromClient= $_POST['mydata'];
$query = $db->prepare("SELECT * FROM synths");
$query->execute();


$synthEntries = $query->fetchAll();


for($i=0; $i < sizeof($synthEntries); $i+=1 ) {

	if($synthEntries[$i]['patch_id'] == $patchIDfromClient){
	$name = $synthEntries[$i]['synth_name'];
	$xpos = $synthEntries[$i]['xpos'];
	$ypos = $synthEntries[$i]['ypos'];
	$pitch = $synthEntries[$i]['pitch'];
	$pitchOctave = $synthEntries[$i]['pitch_octave'];

	
	$temp = array($name,$xpos,$ypos,$pitch,$pitchOctave);
	
    array_push($synth_ids,$temp);
	}


}
$encoded_synth_ids = json_encode($synth_ids,true);

echo $encoded_synth_ids;





?>

