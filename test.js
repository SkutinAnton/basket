"use strict";


let buyButton = document.getElementsByClassName("buy"),
    basketAllPrice = document.getElementById('allPrice'),
    basketPrice = 0;


for (let i = 0; i < buyButton.length; i++) {
    let button = buyButton[i];

    button.onclick = function () {
        let getGood = button.parentNode.children[0].innerHTML,
            getPrice = parseInt(button.parentNode.children[1].innerHTML),
            goodInBasket = document.createElement('p'),
            basketPlace = document.getElementById('basket');

            goodInBasket.innerHTML = getGood;
            goodInBasket.className = 'basketGoods';
            basketPlace.appendChild(goodInBasket);

            basketPrice = parseInt(basketPrice) + getPrice + ' руб';
            basketAllPrice.innerHTML = basketPrice;
        console.log(getGood);
        console.log(getPrice);
    };
}


