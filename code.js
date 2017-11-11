$(".coin-img").draggable({ revert: true});

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
