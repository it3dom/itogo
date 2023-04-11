"use strict";

let menuActive = document.querySelector(".menu_open"); //находим меню
let headerMenu = document.querySelector(".Hamburg"); // находим кнопку бургера
let menuClose = document.querySelector(".menu_close"); // находим кнопку крестика

function toggleMenu() {
  menuActive.classList.toggle("Ham_menu"); // ф-я удаляет или устанавливает с название Ham_menu
}

headerMenu.addEventListener("click", toggleMenu); // по клику срабатывает ф-я
menuClose.addEventListener("click", toggleMenu); // по клику срабатывает  кнопка крестик

const data = JSON.parse(group);
const blockCards = document.querySelector(".list");

data.slice().reverse().forEach((element) => {
  blockCards.insertAdjacentHTML("afterbegin",`
    <div>
    <div class="PE1 ellery_pic2">
    <img class="pic_PE1" src="${element.img}" alt="Ellery">                
        <div class="ATC" style="background-image: url(/HTML/VerstkaHTML/ДЗ/дз6/img/ADD_to_CARD.png);">                        
            <div class="btn_hover_ATC"><button id = "${element.id}" class="btn_ATC">Add to Cart</button></div>                        
        </div>
    </div>
    <p class="ellery">${element.ellery}</p>
    <p class="text_ellery"> ${element.textEllery}</p>
    <p class="sum">${element.price}</p>
    </div>

    `    
  );
});

const btnClick = document.querySelectorAll(".btn_ATC");
const base = document.querySelector(".cartItems");



let count = 1;
const five = document.querySelector('.five');

btnClick.forEach((element,i) => {
element.addEventListener("click", (e) => { 

  const fiveArea = document.querySelector('.btn_right');
  const five = document.createElement('p');
  fiveArea.appendChild(five);
  five.setAttribute('class', 'five');
  five.textContent = count;

  const CTC = document.querySelector('.cartItem_text');
  const cartItems = document.createElement('div');
  CTC.appendChild(cartItems);
  cartItems.setAttribute('class', 'cartItem' );
  cartItems.textContent = 'Cart Items';  
  // CTC.removeChild(cartItems);

      base.insertAdjacentHTML("afterbegin",`


    <div class="first">
      <img class="first_img" src="${data[i].img}" alt="${data[i].ellery}" />
     <div class="first_text">
      <h2 class="h2">${data[i].h2}</h2>
      <div class="first_p">
        <p>Price: <span class="price">${data[i].sum}</span></p>
        <p>Color: <span class="color">${data[i].color}</span></p>
        <p>Size: <span class="size">${data[i].size}</span></p>
        <p class = "quantity">Quantity: <input type = "number" value = "${data[i].quantity}"/></p>
        
      </div>
    </div>
    <div class="first_close"><img src="./img/closer.png" alt="close" /></div>
  </div>    `
  
   );
   count++;
   
   if (count > 2){
    CTC.removeChild(cartItems);
   }
   
   
    const close = document.querySelector(".first_close");
    const card = document.querySelector(".first");
    close.addEventListener("click", () => {
      card.remove();
      count = count - 1;
      five.textContent = count;
      if (count = 1 )
      five.remove();
      // count++;
          
      console.log(count);
      if (count < 2)
      {
       cartItems.remove();
       
      }
     
      });
    
   }
   );
});


const  BAP = document.querySelector('.BAP');
const bap = document.querySelector('.cartItems');


// BAP.addEventListener("click", () =>{

//   const CTC = document.querySelector('.cartItem_text');
//   const cartItems = document.createElement('div');
//   CTC.appendChild(cartItems);
//   cartItems.setAttribute('class', 'cartItem' );
//   cartItems.textContent = 'Cart Items';

// data.reverse().forEach(element => {
//     base.insertAdjacentHTML('afterbegin' , `
//     <div class="first">
//         <img class="first_img" src="${element.img}" alt="photo1" />
//         <div class="first_text">
//           <h2 class="h2">${element.h2}</h2>
//           <div class="first_p">
//             <p>Price: <span class="price">${element.price}</span></p>
//             <p>Color: <span class="color">${element.color}</span></p>
//             <p>Size: <span class="size">${element.size}</span></p>
//             <p>Quantity: <input type="number" value="${element.quantity}" /></p>
//           </div>
//         </div>
//         <div class="first_close"><img src="./img/closer.png" alt="close" /></div>
//       </div>
//     `)
//     const close = document.querySelector('.first_close');
//     const card = document.querySelector('.first');
//     close.addEventListener('click',() =>{
//         card.remove()
//     })
//   })
// });