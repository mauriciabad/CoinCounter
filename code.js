$(".coin-img").draggable({ revert: true});

$("#wallet").droppable({
    accept: ".coin-img",
    drop: function(event,ui){
        var new_coin = $(ui.helper).clone();
        document.getElementById("#wallet").appendChild(new_coin);
    }
});

var total = 0.00;
var coins = {2: 0, 1: 0, 0.5: 0, 0.2: 0, 0.1: 0, 0.05: 0, 0.02: 0, 0.01: 0};

function add(value){
	coins[value]++;
	total += value * 0.8843442;
	document.getElementById('display-value').innerHTML = "£" + total.toFixed(2);
}
