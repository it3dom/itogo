// Текст задания
// Создать новый файл lesson2.html
// Создать переменную и спросить у пользователя “Ваш возраст”
// Вывести на экран текст. Вам “возраст пользователя” лет
// Спросить у пользователя его имя
// Вывести на экран, Добро пожаловать на сайт “Имя пользователя”

// const nam=prompt("Как вас зовут? ")
// alert (`Добро пожаловать на сайт,${ nam}`);

// let a = 13;
// let b = 5;
// let resul = a % b;
// alert(resul);

// let a;
// alert(a);
// alert('abc' *3);
// alert(1/0);
// alert(-1/0);
// alert('2'*'3');
// let a = '2';
// let b = '3';
// console.log(a+3)

// let first = +prompt('первое число');
// let second = +prompt('второе число');
// console.log(`сумма = ${first + second}`);
// console.log(`разность = ${first - second}`);
// console.log(`произведение = ${first * second}`);
// console.log(`частное = ${first / second}`);
// console.log(`остаток от деления = ${first % second}`);

// let firstNumber = +prompt('Введите первое число)');
// let secondNumber = +prompt('Введите второе число))');
// console.log(`Сумма = ${firstNumber + secondNumber}`)

// let a = prompt('введите число');
// if (a>5) {
//     console.log(`число больше 5`);
// }
// else if (a<5) {
//     console.log(`число меньше 5`);
// }
// else {
//     console.log(`число равно 5`);
// }

// const test1 = 1;
// const test2 = '2';
// console.log(test1 == test2);
// console.log(test1 === test2);

// let a = +prompt("первое число");
// let b = +prompt("второе число");
// if (a > b) {
//   console.log(`больше ${a}`);
// } else {
//   console.log(`больше ${b}`);
// }


// let a = +prompt(`введите число`);
// if (a > 0 && a < 15){
//     console.log(`больше 0 и меньше 15`)
// }
// else {
//     console.log(`больше 15 `)
// }


// function User(FirstName, LastName, Age) {
//     console.log(`Привет ${FirstName} ${LastName} с возрастом ${Age}`);
//   }
  
//   let userFirstName = 'Иван';
//   let userLastName = 'Петров';
//   let userAge = 17;
  
//   User(userFirstName, userLastName, userAge);

// function Kvadrat(x) {
//     console.log(`Квадрат = ${x ** 3}`);
//   }
  
//   Kvadrat(5);


// function Proverka(x) {
//     console.log(( x >= 0) ? '+++' : '---');
//   }
  
//   Proverka(0);

// Задание 4

// const sum = (x, y, z) => {
//     let summa = 0;
//     return summa = x + y + z;
//   }
  
//   console.log(sum(1,2,4));
  
  
  
//   // Задание 5
  
//   let param1 = 1;
//   let param2 = 2;
//   let param3 = 3;
  
//   console.log(sum(param1, param2, param3));

// Задание 6

// const kvadratniyKoren = (x) => {
//     return Math.sqrt(x);
//   }
  
//   let first = kvadratniyKoren(3);
//   let second = kvadratniyKoren(4);
  
//   console.log(`Сумма = ${first + second}`);
  
  
//   // Задание 7
  
//   const number = (x, y) => {
//     if (x > y) {
//       return x;
//     } else if (x < y) {
//       return y;
//     } else {
//       return 'Числа равны';
//     }
//   }
  
//   console.log(number(35, 35));

// const dayWeek = (x) => {
//     switch (x) {
//       case 1: 
//         return 'Понедельник';
//       case 2:
//         return 'Вторник';
//       case 3:
//         return 'Среда';
//       case 4:
//         return 'Четверг';
//       case 5:
//         return 'Пятница';
//       case 6:
//         return 'Суббота';
//       case 7:
//         return 'Воскресенье';
//       default:
//         return 'Ошибка'
//     }
//   }
  
//   console.log(dayWeek(6));


//   // Задание 9



// const privet = (name) => {
//     let date = new Date().getHours();
//     if (date >= 6 && date < 12) {
//       return `Доброе утро, ${name}`
//     } else if (date >= 12 && date < 18) {
//       return `Добрый день, ${name}`
//     } else if (date >= 18 && date < 24) {
//       return `Добрый вечер, ${name}`
//     } else {
//       return `Доброй ночи, ${name}`
//     } 
//   }
  
//   console.log(privet('Andrey'));