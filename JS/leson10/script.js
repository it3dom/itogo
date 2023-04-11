// 1. Создать файл index.html
// Подключить data.js
// Добавить блок <div class="content"></div>
// Создать переменную data и добавить в нее JSON parse данные из файла data.js
// Вывести в консоль объект data
// С помощью foreach обойти массив data
// Вывести все изображения из данных


// const data = JSON.parse(dataInfo);
// console.log(data);
// data.forEach(element => {
//     console.log(element.url);
    
// });



//  2. Создать все необходимые заголовки, параграфы изображения (из данных json)
// Добавить все содержимое в блок контент
// Добавить стили при необходимости

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('div');

data.reverse().forEach(element => {
    content.insertAdjacentHTML('afterbegin',`
    <p>id - ${element.id}</p>
    <img src="${element.url}" 
    width="${element.width}" height="${element.height}">
    
    `)
    
});


// const data = JSON.parse(dataInfo);
// console.log(data);

// const content = document.querySelector('div');

// data.reverse().forEach(obj => {
//     content.insertAdjacentHTML('afterend', `
//     <p>id - ${obj.id}</p>
//     <img src="${obj.url}" width="${obj.width}" height="${obj.height}">
//     `)
// });
