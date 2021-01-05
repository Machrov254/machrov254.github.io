"use strict";

const dummyShoppingList = [
    { name: ' banana ', price: 1 },
    { name: ' shrimps ', price: 5.5 },
    { name: ' avocado ', price: 6.4 },
    { name: ' tomato ', price: 2 },
    { name: ' pineapple ', price: 3 },
    { name: ' salmon ', price: 8.1 },
]

const shoppingCart = [];




function renderCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = 'fruits';
    console.log(shoppingCart)
    shoppingCart.forEach(function (cartItem, index) {
        const item = document.createElement('div');
        const name = document.createElement('span');


        // Prideti prie teksto prekes kaina
        item.innerText = cartItem.price;
        name.innerText = cartItem.name;

        totalPrice += cartItem.price;
        if (cartItem.vegan) {
            veganOptions += cartItem.price;
        } else {
            restPrice += cartItem.price;
        }


        item.appendChild(name);
        const buttonRemove = document.createElement('button');
        buttonRemove.innerText = 'Remove';
        buttonRemove.onclick = function () {
            removeFromList(index)
        }
        item.appendChild(buttonRemove);
        cart.appendChild(item);
    });
    const total = document.getElementById('total');

    total.innerHTML = `
  Total: ${totalPrice}, vegan options: ${veganOptions},price without vegan options: ${restPrice} 
  `;
    // Naudoti for loop
    total.innerHTML = 'cart'; // Total kaina krepselio
    // Bonus add vegan price and the rest price
}

function addToList(shoppingItem) {
    shoppingCart.push(shoppingItem);
    renderCart();
}

function removeFromList(shoppingItem) {
    let removed = shoppingCart.splice(0, 1)
    console.log(shoppingCart)
    renderCart();
}
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

window.onload = function () {
    const body = document.getElementById('body');
    dummyShoppingList.forEach(function (listItem) {
        const div = document.createElement('div');
        div.className = 'shopping-item';
        div.innerHTML = `
      <span>${listItem.name}</span>
      <span>${listItem.price}</span>
      `;
        const buttonAdd = document.createElement('button');
        buttonAdd.onclick = function () {
            addToList(listItem);
        }
        buttonAdd.textContent = 'Add'
        div.appendChild(buttonAdd);
        body.appendChild(div);
    })
}