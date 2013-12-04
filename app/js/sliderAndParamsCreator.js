		
		function createSliderAndParams(){
		
		//Creates Slider - Octave pitch
		var oscPitchOctave = document.createElement('input');
		oscPitchOctave.type = "number";
		oscPitchOctave.min = '-24';
		oscPitchOctave.max = '-1';
		oscPitchOctave.value = '-11';
		oscPitchOctave.step = '1';
		oscPitchOctave.className = "oscPitchOctave";
		oscPitchOctave.id = "oscPitchOctave_" + synth.id;
		synth.appendChild(oscPitchOctave);
		
/* 		filter = context.createBiquadFilter(); filter.frequency.value = (document.getElementById(filterValue).value)*(2000); filter.type = 0; */
		
	   //Creates Slider - Note pitch
		var oscNoteValueInput = document.createElement('input');
		oscNoteValueInput.type = "range";
		oscNoteValueInput.min='100';
		oscNoteValueInput.max='1200';
		oscNoteValueInput.step='100';
		oscNoteValueInput.className = "oscNoteValueInput";
		oscNoteValueInput.id = "oscNoteValueInput_" + synth.id;
		synth.appendChild(oscNoteValueInput);
		

		};