// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль 
//результат 2^3 степени + 3 ^ 3 степени

// function square(x) {
// return Math.pow(x , 3); 
// }

// console.log(square(2) + square(3));
//---------------------------------------------------------------------------------------------------------


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано
 //неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст
 "Размер заработной платы за вычетом налогов равен значение"

//  let num = Number(prompt('число?'));
//  if (isNaN(num)) {
//     alert('значение задано не верно ')
//  }
 
//  function nalog(num){
//   num = num*0.87;
//   return num;
//  }
 
//  console.log(`Размер заработной платы за вычетом налогов равен значение ${nalog(num)}`);
 
//---------------------------------------------------------------------------------------------------------
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет
 //максимальное значение среди этих чисел

// let a = prompt('чимло 1');
// let b = prompt('чимло 2')
// let c = prompt('чимло 3')
//  function max(a,b,c){
//     if (a > b && a > c) {
//         return a;        
//     } 
//      else if (b > c && b > a) {
//         return b;
//     }
//     else {
//         return c;
//     }
//  }
//  console.log( max(a,b,c));
//----------------------------------------------------------------------------------------------


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и 
//выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
//  должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций 
//     могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите 
//     внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если 
//     числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не
//      нужно.


// let a = 3;
// let b = 3; 

// console.log(sum(a,b));
// console.log(diff(a,b));
// console.log( multi(a,b));
// console.log( div(a,b));


// function sum(a,b) {
//     let sum = a+b;
//     return sum;
// }

// function diff(a,b) {
//     if( a < b){ 
//     let diff = b-a ; 
//     return diff;   
//     }
//     else {
//         diff = a-b ;
//     }
//     return diff;
// }
// function multi(a,b) {
//     let multi = a*b;
//     return multi;
// }

// function div(a,b) {
//     let div = a / b ;
//     return div;
// }