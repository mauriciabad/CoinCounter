$(".coin-img").draggable({ revert: true});

$( "#droppable" ).droppable({
	drop: function( event, ui ) {
		$( this )
			.addClass( "ui-state-highlight" )
			.find( "p" )
			.html( "Dropped!" );
	}
});
