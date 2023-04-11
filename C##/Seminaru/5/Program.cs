﻿// Задача 31: Задайте массив из 12 элементов, заполненный случайными числами из промежутка [-9, 9]. 
// Найдите сумму отрицательных и положительных элементов массива.
// Например, в массиве [3,9,-8,1,0,-7,2,-1,8,-3,-1,6] сумма положительных чисел равна 29,
//  сумма отрицательных равна -20.


// void FillArray(int [] array)
// {
//     for (int i=0;i<array.Length; i++)
//         array[i] = new Random().Next(-9,10);
// }

// void PrintArray(int [] array)
// {
//     for (int i=0;i<array.Length; i++)
//         Console.Write($"{array[i]} ");
//     Console.WriteLine();
// }

// void FindSums(int [] array)  //int [] FindSums
// {
//     int sump=0; //сумма положительных
//     int sumn=0; //сумма отрицательных
//     for (int i=0;i<array.Length; i++)
//     {
//         if (array[i]>0) sump+=array[i];
//         else sumn+=array[i];
//     }
//     Console.WriteLine($"сумма положительных элементов равна {sump}");
//     Console.WriteLine($"сумма отрицательных элементов равна {sumn}");
// }

// int[] FindSums2(int [] array)  
// {
//     int sump=0; //сумма положительных
//     int sumn=0; //сумма отрицательных
//     for (int i=0;i<array.Length; i++)
//     {
//         if (array[i]>0) sump+=array[i];
//         else sumn+=array[i];
//     }
//     int[] results = {sump, sumn};
//     return results;
// }

// int [] array = new int[12];
// FillArray(array);
// PrintArray(array);
//  FindSums(array);
// int[] results = FindSums2(array);
// Console.WriteLine($"сумма положительных элементов равна {results[0]}");
// Console.WriteLine($"сумма отрицательных элементов равна {results[1]}");


//--------------------------------------------------

// Задача 32: Напишите программу замена элементов массива: 
// положительные элементы замените на соответствующие отрицательные, и наоборот.
// [-4, -8, 8, 2] -> [4, 8, -8, -2] 

// Console.WriteLine("Введите длину массива");
// int N = Convert.ToInt32(Console.ReadLine());

// int[] newarray = new int [N];
// Randomize(newarray);
// Console.WriteLine("Сгенерированный массив:");
// Printarray(newarray);
// Changearray(newarray);
// Console.WriteLine("Массив после замены:");
// Printarray(newarray);


// void Changearray(int [] array2)
// {
//     for (int i = 0; i < array2.Length; i++)
//     {
//         array2[i] = array2[i]*-1;
//     }
// }
// void Randomize(int[] array)
// {
//     for (int i = 0; i < array.Length; i++)
//     {
//         array[i] = new Random().Next(-9, 9);
//     }
// }
// void Printarray(int[] array1)

// Задача 33: Задайте массив. Напишите программу, которая определяет,
//  присутствует ли заданное число в массиве.
// 4; массив [6, 7, 19, 345, 3] -> нет
// -3; массив [6, 7, 19, 345, 3] -> да

// void FillArray(int[] array)
// {
//     for (int i = 0; i < array.Length; i++)
//         array[i] = new Random().Next(-9, 10);
// }

// void PrintArray(int[] array)
// {
//     for (int i = 0; i < array.Length; i++)
//         Console.Write($"{array[i]} ");
//     Console.WriteLine();
// }

// void Searching(int[] array, int N)
// {
//     bool find = false; // Флажок - индикатор поиска переменной в нашем массиве
//     for (int i = 0; i < array.Length; i++)
//     {
//         if (N == array[i]) 
//         {
//             find = true;
//             break;
//         }
//     }
//     Console.WriteLine(find);
// }

// Console.WriteLine("Введите число");
// int N = Convert.ToInt32(Console.ReadLine());
// int[] array = new int[8];

// FillArray(array);
// PrintArray(array);
// Searching(array, N);

//-------------------------------------------------------------

// Задача 35: Задайте одномерный массив из 12 случайных чисел из промежутка (-100,100). 
// Найдите количество элементов массива, значения которых лежат в отрезке [10,99]. 
// Пример для массива из 5, а не 12 элементов. В своём решении сделайте для 12
// [5, 18, 123, 6, 2] -> 1
// [1, 2, 3, 6, 2] -> 0
// [10, 11, 12, 13, 14] -> 5

// Console.WriteLine("Введите число");
// int N = Convert.ToInt32(Console.ReadLine());
// int[] array = new int[12];
// FillArray(array);
// PrintArray(array);
// FindArray(array);


// void FindArray (int [] array)
// {
//     int count = 0;
//      for (int i = 0; i < array.Length; i++)
//      {
//      if (array[i] >= 10 && array[i] < 100) count = count + 1;

//      }
//      Console.WriteLine($"Колво элементов в диапозоне от 10 до 99 : {count}");
// }

// void FillArray(int[] array)
// {
//     for (int i = 0; i < array.Length; i++)
//         array[i] = new Random().Next(-100, 101);
// }

// void PrintArray(int[] array)

// {
//     for (int i = 0; i < array.Length; i++)
//         Console.Write($"{array[i]} ");
//     Console.WriteLine();
// }

// -------------------------------------------------------------------

// Задача 37: Найдите произведение пар чисел в одномерном массиве.
//  Парой считаем первый и последний элемент, второй и предпоследний и т.д. 
//  Результат запишите в новом массиве.
// [1 2 3 4 5] -> 5 8 3
// [6 7 3 6] -> 36 21


void FillArray(int[] array)
{
    for (int i = 0; i < array.Length; i++)
        array[i] = new Random().Next(-10,11);
}

void PrintArray(int[] array)
{
    for (int i = 0; i < array.Length; i++)
        Console.Write(array[i]+" ");
    Console.WriteLine();
}

int[] FundProdPair(int[] array)

{
    int count = array.Length;
    if (count % 2 == 0)
    {
        int [] arrProd = new int [count/2];
        for (int i = 0; i < count/2; i++)
            arrProd[i] = array[i]*array[count-i-1];
        return arrProd;
    }
    else
    {
        int [] arrProd = new int [(count+1)/2];
        for (int i = 0; i < count/2; i++) 
            arrProd[i] = array[i]*array[count-i-1];
        arrProd[(count+1)/2-1] = array[(count+1)/2-1];
        return arrProd;
    }
}

// int [] array = new int[11];
// FillArray(array);
// PrintArray(array);
// PrintArray(FundProdPair(array));