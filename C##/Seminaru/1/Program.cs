// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("введите число"); // введите информацию
// int  x = Convert.ToInt32 ( Console.ReadLine()); // перевели данные от пользователя в целое 

// int  y = x*x;                                   // посчитали число
// Console.WriteLine("квадрат введенного числа " + y); // вывел квадрат на число
// // сделаем проверку на двухзначность числа
// if (x > 9 && x < 100) // если Х больше 9 и меньше 100 то делаем следующее && Ампирсент - логическое *И*
// {
//   Console.WriteLine ("вы ввели двyхзначное число!!! ");

// }



// Задача №1. Напишите программу, которая на вход принимает два числа и проверяет, 
//является ли первое число квадратом второго.

 Console.WriteLine(" Введите число 1  ");

 int x = Convert.ToInt32(Console.ReadLine());

 Console.WriteLine(" Введите число 2  ");

 int y = Convert.ToInt32(Console.ReadLine());

 if (x == y * y)
{
     Console.WriteLine(" Первое число является кватдратом второго ");

 }
 else
 {
     Console.WriteLine(" Первое число не является кватратом второго ");
}


//   Задача №3. Напишите программу, которая будет выдавать название дня недели по заданному номеру.
//3 -> Среда 
//5 -> Пятница

// Console.WriteLine (" Введите число от 1 до 7"); // вывод на экран
// int x = Convert.ToInt32 (Console.ReadLine()); // ввод данных
// if (x == 1) Console.WriteLine ("Понедельник");
// else if (x == 2) Console.WriteLine ("Вторник");
// else if (x == 3) Console.WriteLine ("Среда");
// else if (x == 4) Console.WriteLine ("Четверг");
// else if (x == 5) Console.WriteLine ("Пятница");
// else if (x == 6) Console.WriteLine ("Суббота");
// else if (x == 7) Console.WriteLine ("Воскр");
//  else Console.WriteLine (" Некорректное число");

