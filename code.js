$(".coin-img").draggable();

$( "#droppable" ).droppable({
	drop: function( event, ui ) {
		$( this )
			.addClass( "ui-state-highlight" )
			.find( "p" )
			.html( "Dropped!" );
	}
});




var total = 0.00;

function add(var value){
	total += value;
}
