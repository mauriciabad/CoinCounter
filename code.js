
/*$(".coin-img").draggable({ revert: true});
$(".coin-img-wallet").draggable({ revert: true});

$("#wallet").droppable({
    accept: ".coin-img",
    drop: function(event,ui){
        add(ui.draggable);
    }
});

$("#coins-div").droppable({
    accept: ".coin-img-wallet",
    drop: function(event,ui){
        reset(ui.draggable);
    }
});*/

var total = 0.00;
var coins = {2: 0, 1: 0, 0.5: 0, 0.2: 0, 0.1: 0, 0.05: 0, 0.02: 0, 0.01: 0};

function add(coin){
	var value = coin.getAttribute("data-value");
	coins[value]++;
	total += value * 0.8843442;
	document.getElementById('display-value').innerHTML = "£" + total.toFixed(2);
  showCoins();
}

function sub(coin){
	var value = coin.getAttribute("data-value");
	coins[value]--;
	total -= value * 0.8843442;
  if(total<0) total=0;
	document.getElementById('display-value').innerHTML = "£" + total.toFixed(2);
  showCoins();
}

function reset(coin){
	var value = coin.getAttribute("data-value");
	total -= coins[value] * value * 0.8843442;
	coins[value] = 0;
}

function showCoins() {
  for(var i in coins) {
    var currentCoin = document.getElementById('coin-' + i);
    if(coins[i] > 0){
      currentCoin.style.display = "inline-block";
    } else{
      currentCoin.style.display = "none";
    }
    currentCoin.childNodes[3].innerHTML = coins[i];
}
}
