// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

//const arr =[0,1,2,3,4,5,6,7,8,9,10];

// const arr= [];
// for (let i = 0; i < 11; i++)
// {
//     arr.push(i)
//     if (i == 0)     {
//         console.log(`${i} это ноль`);
//      } else if (i % 2){
//         console.log(`${i}  не чет`);
//      } else {
//         console.log(`${i} чет`);
//      }
// const element = arr[i];
// }
//----------------------------------------------------------------------

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(3,2);

// console.log(arr);

//------------------------------------------------------------------

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и
//создать массив
// состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const arr = [];
// let sum = 0;
// let min = 0;

// for (let i = 0; i < 5; i++) {
//   arr.push(Math.round(Math.random() * 9));
// }
// // for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// // } 
// // ИЛИ --------------------
// arr.forEach(element => {
//     sum += element;
// });
// arr.forEach(element => {
//     min = Math.min.apply(null,arr);
// });
// arr.forEach(element => {
//     if (element == 3){
//     console.log('число 3 есть в массиве')};
// });

// console.log(arr);
// console.log(sum);
// console.log(min);
//-----------------------------------------------------------
// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке,
//  только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// const arr= [];
//  for (let i = 0; i < 21; i++)
//  { arr.push('x')
//     console.log(arr);
//      }
 

// const arr= [];
// for (let i = 0; i < 21; i++)
// { arr.push('x')
//     console.log(arr.join(''));
// }