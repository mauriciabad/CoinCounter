$(".coin-img").draggable({ revert: true});


$("#wallet").droppable({
    accept: ".coin-img",
    drop: function(event,ui){
        var new_coin = $(ui.helper).clone();
        new_coin.draggable();
        $(this).append(new_coin);
    }
});