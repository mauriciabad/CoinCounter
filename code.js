$(".coin-img").draggable({ revert: true});

<<<<<<< HEAD

$("#wallet").droppable({
    accept: ".coin-img";
    drop: function(event,ui){
        var new_coin = $(ui.helper).clone();
        $("#wallet").append(new_coin);
    }
});
=======
$( "#droppable" ).droppable({
	drop: function( event, ui ) {
		$( this )
			.addClass( "ui-state-highlight" )
			.find( "p" )
			.html( "Dropped!" );
	}
});




var total = 0.00;

function add(value){
	total += value * 0.8843442;
	document.getElementById('display-value').innerHTML = "£" + total.toFixed(2);
}
>>>>>>> 557cd1d41f94e75306be0d267aed1d0100af20ba
