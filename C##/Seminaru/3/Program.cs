// Задача №17. Напишите программу, которая принимает на вход координаты точки (X и Y), 
// причем X ≠ 0 и Y ≠ 0 и выдаёт номер четверти плоскости, в которой находится эта точка
//}
//---------------------------------------------

// Console.WriteLine("Введите координату X");
// int x = Convert.ToInt32(Console.ReadLine());
// Console.WriteLine("Введите координату Y");
// int y = Convert.ToInt32(Console.ReadLine());
// CheckKoord(x,y);
// Console.WriteLine( CheckKoord2(x,y));

// // if (x > 0 && y > 0) Console.WriteLine("Это четверть № 1");
// // else if (x > 0 && y < 0) Console.WriteLine("Это четверть № 4");
// // else if (x < 0 && y < 0) Console.WriteLine("Это четверть № 3");
// // else if (x < 0 && y > 0) Console.WriteLine("Это четверть № 2");
// // else Console.WriteLine("Точка лежит на оси");

// //делаем метод который ничего не возвращает, но что-то делает
// void CheckKoord(int x, int y)
// {
//     if (x > 0 && y > 0) Console.WriteLine("Это четверть № 1");
//     else if (x > 0 && y < 0) Console.WriteLine("Это четверть № 4");
//     else if (x < 0 && y < 0) Console.WriteLine("Это четверть № 3");
//     else if (x < 0 && y > 0) Console.WriteLine("Это четверть № 2");
//     else Console.WriteLine("Точка лежит на оси");
// }

// //делаем метод который что-то возвращает
// string CheckKoord2(int x, int y)
// {
//     string res="";
//     if (x > 0 && y > 0) res = "Это четверть № 1";
//     else if (x > 0 && y < 0) res = "Это четверть № 4";
//     else if (x < 0 && y < 0) res = "Это четверть № 3";
//     else if (x < 0 && y > 0) res = "Это четверть № 2";
//     else res = "Точка лежит на оси";
//     return res;
// }
//-------------------------------------------------------------
// Напишите программу, которая по заданному номеру четверти, 
// показывает диапазон возможных координат точек в этой четверти (x и y).

// try 
// { 
//     Console.WriteLine("введите четверть "); 
//     int q = Convert.ToInt32(Console.ReadLine()); 
//     if (q==1) Console.WriteLine("x>0, y>0"); 
//     else if (q==4) Console.WriteLine("x>0, y<0"); 
//     else if (q==3) Console.WriteLine("x<0, y<0"); 
//     else if (q==2) Console.WriteLine("x<0, y>0"); 
//     else Console.WriteLine("ошибка"); 
//     CheckKoord(q); 
//     Console.WriteLine(CheckKoord2(q)); 
// } 
// catch 
// { 
//     Console.WriteLine("вы ввели некоретные данные"); 
// } 


// void CheckKoord(int q) 
// { 
//     if (q==1) Console.WriteLine("x>0, y>0"); 
//     else if (q==4) Console.WriteLine("x>0, y<0"); 
//     else if (q==3) Console.WriteLine("x<0, y<0"); 
//     else if (q==2) Console.WriteLine("x<0, y>0"); 
//     else Console.WriteLine("ошибка"); 
// } 


// string CheckKoord2(int q) 
// { 
//     string res = ""; 
//     if (q==1) res = "x>0, y>0"; 
//     else if (q==4) res = "x>0, y<0"; 
//     else if (q==3) res = "x<0, y<0"; 
//     else if (q==2) res = "x<0, y>0"; 
//     else res = "ошибка"; 
//     return res; 
// }
//-------------------------------------------------------------------

// Напишите программу, которая принимает на вход координаты двух точек и находит расстояние 
// между ними 
// в 2D пространстве.

// A (3,6); B (2,1) -> 5,09 
// A (7,-5); B (1,-1) -> 7,21

Console.WriteLine("Введите координаты точек:");
Console.WriteLine("Введите х1:");
int x1 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Введите y1:");
int y1 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Введите х2:");
int x2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Введите y2:");
int y2 = Convert.ToInt32(Console.ReadLine());
int d = ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
double s = Math.Sqrt(d);
Console.WriteLine("Расстояние между точками равно " + Math.Round(s,3)); // кол-во знаков после запятой , три 

//-------------------------------------------------
// Напишите программу, которая принимает на вход число (N) и выдаёт таблицу квадратов чисел 
// от 1 до N.
 
//  Console.WriteLine("Введите N:");
//  int N=Convert.ToInt32(Console.ReadLine());
//  for(int i=1;i<=N;i++)
//  {
//         Console.Write(i*i);
//         Console.Write(" ");
//  }
