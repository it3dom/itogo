// # 1 <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

// const first = document.querySelectorAll('p');
// console.log(first);

// const second = document.querySelectorAll('.www')[1];
// console.log( second);


//  #2 Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>



// #3 Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”

// const Third = document.querySelector('.link');
// Third.textContent = 'link text js';

// #4 Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// Third.href = 'https://developer.mozilla.org/ru/';



// const img = document.querySelector('.photo');
// img.src = 'https://fikiwiki.com/uploads/posts/2022-02/1644855597_24-fikiwiki-com-p-kartinki-khd-kachestva-25.jpg'


// #5 Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const five = document.querySelector('.content');
// const p = document.createElement('p');
// p.textContent = 'Новый текстовый элемент';
// five.appendChild(p);


//  const first = document.querySelector(".content");
//  const p = document.createElement("p");
//  p.textContent = "Новый текстовый элемент";
//  first.appendChild(p);
// first.removeChild(p);


// #6 Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const six = document.querySelector('.content');
// const button = document.createElement('button');
// button.textContent = "кнопка";
// six.appendChild(button);
// let click = 0;
// button.onclick = function() {
//      click += 1;
//     console.log(click);
// } 

// #7  Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const seven = document.querySelector('.content');
// const button = document.createElement('button');
// button.textContent = "Отправить";
// seven.appendChild(button);
// button.onclick = function() {
//     button.textContent = "Текст отправлен";
// }
