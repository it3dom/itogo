﻿// Задача 24: Напишите программу, которая принимает на вход число (А) 
// и выдаёт сумму чисел от 1 до А.
// 7 -> 28
// 4 -> 10
// 8 -> 36
// try{
// Console.WriteLine("Введите натуральное число");
//     int N = Convert.ToInt32(Console.ReadLine());
//     Console.WriteLine($"Сумма чисел от 1 до {N} равна {Summa(N)}");
// }
// catch
// {
//     Console.WriteLine("надо было вводить именно целое число");
// }

// int Summa(int N)
// {
//     int sum = 0;
//     for (int i=1;i<=N;i++)
//         sum+=i;
//     return sum;
// }
//------------------------------------------------------------------
// Задача 26: Напишите программу, которая принимает на вход число и
//  выдаёт количество цифр в числе.
// 456 -> 3
// 78 -> 2
// 89126 -> 5
// Console.WriteLine("Введите целое число");
// int n = Convert.ToInt32(Console.ReadLine());
// int i=0;
// while (n>0)
// {
//     n=n/10;
//     i++;
// }
// Console.WriteLine(i);


// Console.WriteLine("Введите число");
// double N = Convert.ToDouble(Console.ReadLine());
// int x = 0; // введение перемнной, показывающей общее число цифр (разрядов) в числе

// for (int i = 1; ((N * i) % 1) != 0; i = i * 10) // цикл, вычисляющий кол-во знаков после запятой
// {
//     x += 1;
// }
// for (int i = 1; i < N; i = i * 10) // цикл, показывающий разрядность целого числа
// {
//     x += 1;
// }
// Console.WriteLine(x);

//---------------------------------------------------------

// Задача 28: Напишите программу, которая принимает 
// на вход число N и выдаёт произведение чисел от 1 до N.
// 4 -> 24 
// 5 -> 120

// Console.WriteLine ("Ведите число ");
// int n = Convert.ToInt32(Console.ReadLine());
// int p = 1;
// for(int i=1;i<=n-1;i++)
// {
//      p = p*i;
//     //Console.WriteLine(p);
// }

// Console.WriteLine(p);

//-------------------------------------------------------

// Задача 30: Напишите программу, которая выводит массив из 8 элементов,
//  заполненный нулями и единицами в случайном порядке.
// [1,0,1,1,0,1,0,0]


void Ran(int[] col)
{
    for (int index = 0; index < col.Length; index++)
        col[index] = new Random().Next(0, 2);
}

void Print(int[] col2)
{
    foreach (int item in col2)
        Console.Write(item + " ");
}

bool ZZZ(int[] col3)
{
    int a = 0;
    int b = 0;
    for (int index = 0; index < col3.Length; index++)
    {
        if (col3[index] == 1) a = a + 1;
        else b = b + 1;
    }
    if (a > b) return true;
    else return false;
}


int [] array = new int[8];
Ran(array);
Print(array);
Console.WriteLine(ZZZ(array));



