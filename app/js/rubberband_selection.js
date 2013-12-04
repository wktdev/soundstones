

















function initRubberBandScript(){


// this creates the selected variable
// we are going to store the selected objects in here
var selected = $([]), offset = {top:0, left:0}; 

$( "#application-area > div" ).draggable({
    start: function(ev, ui) {
        if ($(this).hasClass("ui-selected")){
            selected = $(".ui-selected").each(function() {
               var el = $(this);
               el.data("offset", el.offset());
            });
        }
        else {
            selected = $([]);
            $("#application-area > div").removeClass("ui-selected");
        }
        offset = $(this).offset();
    },
    drag: function(ev, ui) {
        var dt = ui.position.top - offset.top, dl = ui.position.left - offset.left;
        // take all the elements that are selected expect $("this"), which is the element being dragged and loop through each.
        selected.not(this).each(function() {
             // create the variable for we don't need to keep calling $("this")
             // el = current element we are on
             // off = what position was this element at when it was selected, before drag
             var el = $(this), off = el.data("offset");
            el.css({top: off.top + dt, left: off.left + dl});
        });
    }
});

$( "#application-area" ).selectable();

// manually trigger the "select" of clicked elements
$( "#application-area > div" ).click( function(e){
    if (e.metaKey == false) {
        // if command key is pressed don't deselect existing elements
        $( "#application-area > div" ).removeClass("ui-selected");
        $(this).addClass("ui-selecting");
    }
    else {
        if ($(this).hasClass("ui-selected")) {
            // remove selected class from element if already selected
            $(this).removeClass("ui-selected");
        }
        else {
            // add selecting class if not
            $(this).addClass("ui-selecting");
        }
    }
    
    $( "#application-area" ).data("selectable")._mouseStop(null);
});

// starting position of the divs
var i = 0;
$("#application-area > div").each( function() {
    $(this).css({
     
    });
    i++;
});
};