const data = JSON.parse(first);

const base = document.querySelector('.container');
data.reverse().forEach(element => {
    base.insertAdjacentHTML('afterbegin' , `
    <div class="first">
        <img class="first_img" src="${element.img}" alt="photo1" />
        <div class="first_text">
          <h2 class="h2">${element.h2}</h2>
          <div class="first_p">
            <p>Price: <span class="price">${element.price}</span></p>
            <p>Color: <span class="color">${element.color}</span></p>
            <p>Size: <span class="size">${element.size}</span></p>
            <p>Quantity: <input type="number" value="${element.quantity}" /></p>
          </div>
        </div>
        <div class="first_close"><img src="./img/Vector.png" alt="close" /></div>
      </div>
    `)
    const close = document.querySelector('.first_close');
    const card = document.querySelector('.first');
    close.addEventListener('click',() =>{
        card.remove()
    })
});