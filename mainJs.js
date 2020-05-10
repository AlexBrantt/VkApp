var button = document.getElementById("button");
var coinText = document.getElementById("coins");

var balance = coinText.textContent;
function coin(){
    balance++;
    coinText.innerHTML = balance;
}

button.onclick = coin;