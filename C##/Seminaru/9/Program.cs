// посчитать сумму всех чисел от 1 до введенного N

// Console.WriteLine("Введите натуральное  число");
// int N = Convert.ToInt32(Console.ReadLine());
// Console.WriteLine(Summa(N));
// Console.WriteLine(SummaRec(N));

// int Summa(int N)
// {
//     int sum=0;
//     while (true)
//     {
//         if (N==0) break;
//         sum=sum+N;
//         N--;
//     }
//     return sum;
// }

// int SummaRec(int N)
// {
//     if (N==0) return 0;
//     return N + SummaRec(N-1);
// }

//-----------------------------------------------------------------------------------
// Задача 63: Задайте значение N. 
// Напишите программу, которая выведет все натуральные числа в промежутке от 1 до N.
// N = 5 -> "1, 2, 3, 4, 5"
// N = 6 -> "1, 2, 3, 4, 5, 6"

// M = 1; N = 5 -> "1, 2, 3, 4, 5" 
// M = 4; N = 8 -> "4, 6, 7, 8" 
 
 
// Console.WriteLine("Введите натуральное  число"); 
// int N = Convert.ToInt32(Console.ReadLine()); 
// Console.WriteLine(AllNumber(N)); 
 
 
// string AllNumber(int N) 
// { 
//     if (N==1) return $"1"; 
//     return AllNumber(N-1) + $" {N}" ; 
// }
//-------------------------------------------------------------------


// Задача 65: Задайте значения M и N. 
//Напишите программу, которая выведет все натуральные числа в промежутке от M до N. 
// M = 1; N = 5 -> "1, 2, 3, 4, 5" 
// M = 4; N = 8 -> "4, 6, 7, 8" 

// Console.WriteLine("Введите натуральное число min"); 
// int min = Convert.ToInt32(Console.ReadLine()); 
// Console.WriteLine("Введите натуральное число max"); 
// int max = Convert.ToInt32(Console.ReadLine()); 
// Console.WriteLine(AllNumber(min, max)); 
 
// string AllNumber(int min, int max) 
// { 
//     if (min==max) return $"{min}"; 
//     return  AllNumber(min, max-1) + $" {max}"; 
// }

// Задача 67: Напишите программу, 
//которая будет принимать на вход число и возвращать сумму его цифр.
// 453 -> 12
// 45 -> 9
// Console.WriteLine("Введите натуральное  число");
// int N = Convert.ToInt32(Console.ReadLine());
// Console.WriteLine(AllNumber(N));


// int AllNumber(int N)
// {
//     if (N==0) return 0;
//     return AllNumber(N/10) + (N %10);
// }
//--------------------------------------------------------------------------------
// Задача 69: Напишите программу, которая на вход принимает два числа A и B, 
//и возводит число А в целую степень B с помощью рекурсии.
// A = 3; B = 5 -> 243 (3⁵)
// A = 2; B = 3 -> 8

// Console.WriteLine("Введите натуральное число A");
// int A = Convert.ToInt32(Console.ReadLine());
// Console.WriteLine("Введите степень");
// int B = Convert.ToInt32(Console.ReadLine());
// Console.WriteLine(Pow(A, B));

// int Pow(int A, int B)
// {
//     if (B==0) return 1;
//     return  A * Pow(A, B-1);
//}


//--------------------------------------------------

// Задача 68: Напишите программу вычисления функции Аккермана с помощью рекурсии. 
// Даны два неотрицательных числа m и n.
// m = 2, n = 3 -> A(m,n) = 9
// m = 3, n = 2 -> A(m,n) = 29

// def Foo(number, argument):
//     if number == 0:
//         return argument + 1

//     result = argument
//     for i in range(argument + 2):
//         result = Foo(number - 1, result);

//     return result