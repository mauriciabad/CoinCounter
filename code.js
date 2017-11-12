$(".coin-img").draggable({ revert: true});

$("#wallet").droppable({
    accept: ".coin-img";
    drop: function(event,ui){
        var new_coin = $(ui.helper).clone();
        $("#wallet").append(new_coin);
    }
});




var total = 0.00;

function add(value){
	total += value * 0.8843442;
	document.getElementById('display-value').innerHTML = "£" + total.toFixed(2);
}
