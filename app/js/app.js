
// START: NOTES


/*   The comments are made by using START: and STOP: delimiters for each function.
//   Non function code is usually commented to the right and not the top.
*/

//   The 'create synth' and 'injectSYnthIntoClient' code could be abstracted but as a matter of keeping things clear for future dev I refrained.

//END: NOTES




if ('webkitAudioContext' in window || 'AudioContext' in window) {
	audioContext = new webkitAudioContext() || AudioContext();
} else {
	alert('Your browser does not support Web Audio API and therefore this application will not display correctly or make sound. Please upgrade your browser to Chrome 21+ or Safari 6+');
}






'use strict';


$(function() {
// START: batch of all abstracted functions and setup -- 
	
	
	    // START: JSON data structure for each patch. This is what gets sent to the server on each save.
	var patch = {
	
		"patch_name": "",
		"synths": [ 

		],
			"synth_octave_pitch_sliders": [ 
		
		],
		
			"synth_note_pitch_sliders": [ 
		
		],
		

	}
	     // END JSON data structure.
	
	
	
    $(".application-area").selectable({            // Rubberband selection function
		filter: "div"
	});





	
	
	
	$('#delete-all').click(function() {            // Delete all button logic
	$('.synth').remove();
	});


	var locked = function() {                      // Lock button toggle logic
			$('.synth').draggable('disable');
			$('.synth').addClass( "synthLocked" );
			lockOnOff = 'on'
		};
		
	var unlocked = function() {
			$('.synth').draggable('enable');
			$('.synth').removeClass( "synthLocked" );
			lockOnOff = 'off'
		};
		
		
		
		
		
		
		
	$('#lock').click(function() {
		if (lockOnOff === 'off') {
		locked();
		} else if (lockOnOff === 'on') 
		unlocked();
	});


  
   	var mute = 'off';                             // Mute button toggle logic.
	$('#mute-all').click(function() {
		if (mute == 'off') {
			mute = 'on';
				$('.mute-image').addClass( "mute-on-image" );
	
		} else if (mute == 'on') {
			mute = 'off';
	        $('.mute-image').removeClass( "mute-on-image" );
		}
	});

	



   // START playback function. Each div gets an oscillator via a play function when you hover over it. This is it!
          
	function play(synthInit, oscPitchOctaveInit,oscNoteValueInputInit) {
	
		   
		    synthInit.onmouseover = function() {    
			oscillator = audioContext.createOscillator();
			oscillator.type = "sawtooth";
			gain = audioContext.createGain();
			if (mute == 'off') {                     // If mute button is clicked all oscillators mute
				gain.gain.value = 1;
			} else if (mute == 'on') {
				gain.gain.value = 0;
			};
			oscillator.frequency.value = 440/oscPitchOctaveInit.value;
			oscillator.detune.value = oscNoteValueInputInit.value;  
			oscillator.connect(gain);
			gain.connect(audioContext.destination);
			oscillator.start(0);
		};
	};
	
	// END playback function
	



     // START: sendDOMItemToJSONObj.Every slider that controls a synth parameter needs logic to get it to JSON. This abstracts it.
	function sendDOMItemToJSONObj(nameOrCriteria, obj, IDName, itemValName) {
	     obj.length = 0;
		$(nameOrCriteria).map(function() {
			var itemId = this.id;
			var itemVal = $(this).val();
			obj.push({
				IDName: itemId,
				itemValName: itemVal
			});
			console.log(patch);
		});
	};
	//END: sendDOMItemToJSONObj.
	

	
    // START: setPatchNameOrder. This function reverses the patch name list so that the most recently created patch appears at top of <ul> list

	function setPatchNameOrder() {
		var list = $('#patch-names');
		var listItems = list.children('.new-patch');
		list.append(listItems.get().reverse());
		$(".new-patch").hide();
		$("#patch-names .new-patch").slice(0, 15).show();
	}
	// END: setPatchNameOrder.
	
	
	
	
	
	// START: Save function
	
	
	function save() {
		instrumentName = $('#instrument-name-form').val();
			patch.synths.length = 0;
		
		sendDOMItemToJSONObj('input[id^="oscPitchOctave_"]', patch.synth_octave_pitch_sliders, 'synth_slider_name', 'synth_slider_val');	
		sendDOMItemToJSONObj('input[id^="oscNoteValueInput_"]', patch.synth_note_pitch_sliders, 'synth_slider_name', 'synth_slider_val');	
	
		
		

		
		$(".synth").each(function() {           // finds all divs with class .synth and gets their individual ID and Left/Top CSS positional values
			var temp = $("#" + this.id);
			var pos = $(temp).position();
			patch.synths.push({
				'synth_name': this.id,
				'xpos': pos.left,
				'ypos': pos.top
			});
		});
		
		$('.patch-list').html(patch.name);
		
		patch.patch_name = instrumentName; 
		
		$.ajax({
			type: 'POST',
			url: 'php/pdo/add.php',
			data: { mydata: patch},
			success: function() {
				$(".patch-list").empty();
				$.ajax({
					url: "php/pdo/get.php"
				}).done(function(html) {
					$(".patch-list").append(html)
					getSynthsFromDatabase();
					setPatchNameOrder();
				});
			}
		});
		initRubberBandScript();
	};
	

	
	//END save function



// Inject synths into client via php/AJAX
	
	var synthQueForLoad = [];
	

	function injectSynthsIntoClient() {
	
		$('.synth').remove();
		
		for (i = 0; i < synthQueForLoad.length; i += 1) {
			var synth = document.createElement('div');
			synth.className = "synth";
			synth.id = synthQueForLoad[i][0];
			console.log(synth.id);
			var x = synthQueForLoad[i][1];
			var y = synthQueForLoad[i][2];
			$(".application-area").append(synth);
			
			$("#" + synth.id).css({
				"position": "absolute",
				"left": x + "px",
				"top": y + "px"
			});
			
			$("#" + synth.id).show("explode", {
				pieces: 16
			}, 700);
			
			$(synth).draggable({
				grid: [3, 3],
				containment: ".application-area"
			});
			
			
			
			
			console.log(synthQueForLoad[i][3]);




		
	    var instrumentParameters = document.getElementById("instrumentParameters");	
	    var oscParameters  = document.createElement("div"); 
		oscParameters.className  = "oscParameters ";                         
		oscParameters.id = "oscParameters_" + (synth.id);
	    instrumentParameters.appendChild(oscParameters);
	    $('.'+ oscParameters.className).hide();
		

		
	   //Creates Slider - Note pitch
		var oscNoteValueInput = document.createElement('input');
		oscNoteValueInput.type = "range";
		oscNoteValueInput.min='100';
		oscNoteValueInput.max='1200';
		oscNoteValueInput.step='100';
		oscNoteValueInput.value = synthQueForLoad[i][3];
		oscNoteValueInput.className = "oscNoteValueInput";
		oscNoteValueInput.id = "oscNoteValueInput_" + synth.id;
		synth.appendChild(oscNoteValueInput);
		

	    
		var oscPitchOctave = document.createElement('input');
		oscPitchOctave.type = "range";
		oscPitchOctave.min = '-24';
		oscPitchOctave.max = '-1';
		oscPitchOctave.value = synthQueForLoad[i][4];
		oscPitchOctave.step = '1';
		oscPitchOctave.className = "oscPitchOctave";
		oscPitchOctave.id = "oscPitchOctave_" + synth.id;
		synth.appendChild(oscPitchOctave);
		   

 
 
           
 


        
/*    // For future parameter implementation !
	   
	   
	  $('.synth').dblclick(function(){

	
		   $('.' + oscParameters.className ).hide();
			  $('.'+ oscPitchOctave.className ).hide();

			  
			  var tempID = (this.id );


			  $('#'+ "oscParameters_" + tempID ).show();
			  $('#'+ "oscPitchOctave_" + tempID ).show();


          });
          
*/
			
$(synth).draggable({ grid: [3, 3], containment: ".application-area" });
			
			
			
play(synth, oscPitchOctave,oscNoteValueInput);

			synth.onmouseout = function() {
				oscillator.stop(0);
			};
		}
		initRubberBandScript();
	};
	
	
	
	
	//END Inject synths into client via php/AJAX
	
	

	function getSynthsFromDatabase() {
		$('.patch-name').click(function() {
			var patch_id = $(this).attr('id');
			$.ajax({
				type: 'POST',
				url: 'php/pdo/getsynths.php',
				data: {
					mydata: patch_id
				},
				success: function(returnedData) {
					synthQueForLoad = JSON.parse(returnedData);
					console.log(synthQueForLoad);
					injectSynthsIntoClient()
				}
			});
		});
	};
	
	
	
	
	
	$.ajax({
		url: "php/get.php" }).done(function(html) {
		$(".patch-list").append(html);
		setPatchNameOrder();
		getSynthsFromDatabase();
	});
	

	var synthCounter = 0;
	var lockOnOff = 'off';
	

	
	
	$('#create-synth').mousedown(function() {
		var synth = document.createElement('div');
		synth.className = "synth";
		synth.id = "synth" + (synthCounter += 1);
		$(".application-area").append(synth);
		$(synth).show("explode", { pieces: 16}, 700);
		


		
	    var instrumentParameters = document.getElementById("instrumentParameters");	
	    var oscParameters  = document.createElement("div"); 
		oscParameters.className  = "oscParameters ";                         
		oscParameters.id = "oscParameters_" + (synth.id);
	    instrumentParameters.appendChild(oscParameters);
	    $('.'+ oscParameters.className).hide();
		

		
	   //Creates Slider - Note pitch
		var oscNoteValueInput = document.createElement('input');
		oscNoteValueInput.type = "range";
		oscNoteValueInput.min='100';
		oscNoteValueInput.max='1200';
		oscNoteValueInput.step='100';
		oscNoteValueInput.className = "oscNoteValueInput";
		oscNoteValueInput.id = "oscNoteValueInput_" + synth.id;
		synth.appendChild(oscNoteValueInput);
		

	    
	    	//Creates Slider - Octave pitch
		var oscPitchOctave = document.createElement('input');
		oscPitchOctave.type = "range";
		oscPitchOctave.min = '-24';
		oscPitchOctave.max = '-1';
		oscPitchOctave.value = '-11';
		oscPitchOctave.step = '1';
		oscPitchOctave.className = "oscPitchOctave";
		oscPitchOctave.id = "oscPitchOctave_" + synth.id;
		synth.appendChild(oscPitchOctave);

		   


		       
/*    // For future parameter implementation !
	   
	   
	  $('.synth').dblclick(function(){

	
		   $('.' + oscParameters.className ).hide();
			  $('.'+ oscPitchOctave.className ).hide();

			  
			  var tempID = (this.id );


			  $('#'+ "oscParameters_" + tempID ).show();
			  $('#'+ "oscPitchOctave_" + tempID ).show();


          });
          
*/
 
	          
		$(synth).draggable({ grid: [3, 3], containment: ".application-area" });
		
		play(synth, oscPitchOctave,oscNoteValueInput);
		synth.onmouseout = function() {
			oscillator.stop(0);
		};
		initRubberBandScript();
	});

	// START Save DOM nodes


	$('#save-synths').click(function() {
		save();
	});
	

});