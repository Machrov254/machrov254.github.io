"use strict";

// idName elementas kuriame bus ideti elementai su tagName 
function populateCart(idName, tagName, limit) {
    fetch(`https://simutis.dev/api/generate-shopping-cart?${limit ? `limit=${limit}` : ''}`)
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById(idName);
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                const sablonas = {
                    "name": "Dexter Jettster",
                    "price": 91.58376969420108,
                    "vegan": true
                };
            }

            //______________________
            const element = document.createElement(tagName);
            const tableCellName = document.createElement('td');
            const tableCellPrice = document.createElement('td');
            const tableCellVegan = document.createElement('td');
            tableCellName.innerText = item.name;
            tableCellPrice.innerText = item.price;
            tableCellVegan.innerText = item.vegan;

            element.appendChild(tableCellName);
            element.appendChild(tableCellPrice);
            element.appendChild(tableCellVegan);

            container.appendChild(element);
            //______________________
        });
}

/**
 * Sukurti lentele  [name price vegan]
 *                  [asdasd, 10.15, taip]
 * Naudojant func populateCart ir joje pakeisti koda tarp komentaru bloku
 */


function onLoad() {
    const container = document.getElementById('container');
    const buttonClear = document.getElementById('button-clear');

    buttonClear.onclick = function () {
        const childrenList = document.getElementsByClassName('list-item');
        for (let i = 0; i < childrenList.length; i += 1) {
            console.log(childrenList[i]);
            childrenList[i].style.backgroundColor = '';
        }

    }
    window.onload = function () {

        populateCart('table-body', 'tr');

    }
    // for (let i = 0; i < 10; i += 1) {
    //   const listItem = document.createElement('span');
    //   listItem.innerText = 'Alio';
    //   listItem.className = 'list-item';

    //   listItem.onclick = function () {
    //     let prevElm = listItem.previousElementSibling;
    //     let nextElm = listItem.nextElementSibling;

    //     listItem.style.backgroundColor = 'green';

    //     while (prevElm) {
    //       prevElm.style.backgroundColor = 'red';
    //       prevElm = prevElm.previousElementSibling;
    //     }

    //     while (nextElm) {
    //       nextElm.style.backgroundColor = 'blue';
    //       nextElm = nextElm.nextElementSibling;
    //     }
    //   }
    //   container.appendChild(listItem);
    // }
    console.log(container);
}

window.onload = onLoad;