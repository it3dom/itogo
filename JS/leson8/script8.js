// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// window.onload = ( ) => {
//     console.log('страница загружена полностью');
// }
// const butt = document.querySelector('button')
// butt.onclick = () =>{
//     console.log('событие onclick');
// }

// butt.addEventListener('click',()=>{
//     console.log('событие addEventListener');
// })



// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество
//  нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на 
// “Вы нажали на эту кнопку”

// const butt = document.querySelectorAll('.btn')
// let butt4 = document.querySelector('.btn4')
// let butt5 = document.querySelector('.btn5')


// butt.forEach(element => {
//     element.addEventListener('click', (event) =>
//     {console.log(event.target)})  
// });
// let count = 0;
// butt4.addEventListener('click', () =>{
   
//     count++;
//     console.log(count);
// })
// butt5.addEventListener('click', () =>{
//     butt5.textContent = "вы нажали на эту кнопку";
// })


// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, 
// данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст
//  “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, 
//  в консоли должен появиться текст “Наведения на кнопку больше нет”

// const butt1 = document.querySelector('.btn1')
// const butt2 = document.querySelector('.btn2')
// const butt3 = document.querySelector('.btn3')

// butt1.addEventListener('click', () =>{
//     butt1.insertAdjacentHTML('afterend', `<h1> Новый заголовок </h1>`)
// })
// butt2.addEventListener('click', () => {
//     document.querySelector('h1').remove();
// })

// butt3.addEventListener('mouseover', ()=>{
//     console.log("вы на кнопке");
// })
// butt3.addEventListener('mouseout', () => {
//     console.log('больше нет наведения');})


// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом 
// “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”


const butt1 = document.querySelector('.btn1')
const butt2 = document.querySelector('.btn2')
const butt3 = document.querySelector('.btn3')
const u = document.querySelector('ul')

function name() { 
u.insertAdjacentHTML('beforeend' , `<li>новый элемент списка</li>`)}

// function name2() {
//     u.firstChild.remove()
// }



 butt1.addEventListener('click',name)


 butt2.addEventListener('click',() => {u.firstChild.remove()})

 butt3.addEventListener('click' , () => {butt3.classList.add('click')})
 console.info(butt1)


//  <ul>
//       <li>элемент 1</li>
//       <li>элемент 2</li>
//       <li>элемент 3</li>
//     </ul>

//     <button class="b1">будет добавлять элементы списка</button>
//     <button class="b2">
//       будет удалять первый элемент из созданного списка
//     </button>
//     <button class="b3">при клике на которую добавляется класс “click”</button>
//   </body>

//   <script>
//     const b1 = document.querySelector(".b1");
//     const b2 = document.querySelector(".b2");
//     const b3 = document.querySelector(".b3");
//     const u = document.querySelector("ul");

//     function name() {
//       u.insertAdjacentHTML("beforeend", `<li>новый элемент списка</li>`);
//     }

//     function name2() {
//       u.firstChild.remove();
//     }

//     function name3() {
//       b3.classList.add("click");
//     }

//     b1.addEventListener("click", name);

//     b2.addEventListener("click", name2);

//     b3.addEventListener("click", name3);

//     console.info(b1);

//     const btn = document.querySelector("button");
//     console.info(btn);

//     console.dir(b1)