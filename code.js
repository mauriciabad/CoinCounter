$(".coin-img").draggable({ revert: true});


$("#wallet").droppable({
    accept: ".coin-img";
    drop: function(event,ui){
        var new_coin = $(ui.helper).clone();
        $("#wallet").append(new_coin);
    }
});