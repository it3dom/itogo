// {/* <div class="block">

// </div> */}
// Дан блок, внутри него необходимо создать элемент div с классом item, 
// разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const firstDiv = document.querySelector('.block');
// const secondDiv = document.createElement('div');
// firstDiv.appendChild(secondDiv);
// secondDiv.setAttribute('class','item_1');
// secondDiv.textContent = 'Элемент внутри';
// secondDiv.style.color = 'blue';
// secondDiv.style.border = '1px solid black ';
// secondDiv.style.backgroundColor = '#f8f8f8';
// secondDiv.style.padding = '16px';
// secondDiv.style.width = '150px';


//Дан код
// {/* <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div> */}

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const first = document.querySelector('.text');
// console.log(first.previousElementSibling); //обращение к эл-му перед
// console.log(first.parentElement);
// console.log(first.parentNode.previousElementSibling);
// console.log(first.parentNode.parentNode);


// Задание 2
// const first = document.querySelector('.text')
// console.log(first.previousElementSibling);
// console.log(first.parentElement);
// console.log(first.parentNode.previousElementSibling);
// console.log(first.parentNode.parentNode);


// {/* <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//     </div>
//   </div>
// </div>
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */}

// const elementH2 = document.querySelector('h2');
// console.log(elementH2.parentNode);
// console.log(elementH2.parentNode.parentNode);
// console.log(elementH2.parentNode.parentNode.parentNode);


// <form action="#">
//   <input type="text">
//   <button class="btn">Отправить</button>
// </form>

// Дано поле ввода и кнопка отправить, необходим реализовать функционал, 
// если пользователь нажимает на кнопку отправить, а поле ввода пустое, 
// то под полем ввода и кнопкой должен появиться заголовок h2 с текстом 'вы не заполнили поле ввода'
// Цвет у рамки сделать красным

const button = document.querySelector('button');
const input = document.querySelector('input');
const textH2 = document.createElement('h2')

button.onclick = function() {
    if (input.value.length ==0) {

textH2.textContent = ' Bы не заполнили поле ввода';
input.style.border = '3px solid red';

// const form = document.querySelector('form');
// form.append(textH2);

button.parentElement.appendChild(textH2);

//input.parentElement.insertAdjacentElement('afterend', h2);

    }
    else {const form = document.querySelector('form');
     form.removeChild(textH2);} 
}
