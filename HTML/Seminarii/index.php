<?php 
require("data.php"); // подключение внешнего файла
//$newArray = $arryaTest;

// $let = "Привет PHP";
// //1 многомерный массив
// $arryaTest = array(
//     'ключ'=>'занчение',
//     'ключ2'=>'значение 2'

// );
// // массив 2

// $arryaTest2 = [
//     'ключ3'=>'занчение3',
//     'ключ4'=>'значение 4'
// ];

//     // обычный массив
// $arryaTest3 = ["сторока 5" , "строка 6"]
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Первая страница</title>
    <link rel = "shortcut icon" href="./img/klipartz.com.png">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
</head>
<body>
    <script type="text/javascript" src="./js/test_script.js"></script>
       
    </script>
    <header>
        
        <h1>Заголовок страницы</h1>
        <img src="./img/logo.png" alt="это логотип">
        <nav>
           <li> <a href="./index.html"> Главная</a></li>
           <li> <a href="#aboutme"> Обо мне</a></li>
           <li> <a href="#https://yandex.ru"> Контакты</a></li>
           <li> <a href="./test.php"> тестовый блок</a></li>
           li> <a href="./api.php"> Погода JSON</a></li>

        </nav>

        <ul></ul>

    </header>
    <div class="container">
        <div class="sidebar">
            <h2 id="aboutme">Обо мне</h2>

         <p><?= $let ?> dolor sit amet consectetur, adipisicing elit. Esse, commodi, expedita quo ratione illo laborum id voluptates numquam velit nostrum adipisci eveniet. A quasi molestiae quo accusamus minima? Ducimus, nesciunt.
         Enim voluptatum sapiente laudantium ab? Exercitationem omnis, quasi, labore, odio eos quibusdam excepturi natus alias fugiat neque laudantium qui ipsum eligendi tenetur esse. Perspiciatis, obcaecati accusantium recusandae fugiat itaque totam?
         Possimus illum reiciendis enim quos pariatur quasi voluptatem ex totam et, aliquam dolorem, facere vitae nostrum molestiae, praesentium odit eveniet quae eaque non officiis doloremque. Ea amet voluptas optio reprehenderit.
         Ipsam magni ad fuga optio quaerat doloremque. Alias officiis ad molestias nesciunt porro at blanditiis autem libero accusantium, tempore deserunt ipsa voluptas quod voluptate. Quam ab repellendus perferendis possimus rem!
         Possimus vitae ut harum similique quidem reprehenderit voluptate corporis saepe, perspiciatis consequatur. Tempora accusantium veniam explicabo aspernatur libero quaerat ullam ipsam laborum ea! Optio modi asperiores ullam aliquam est incidunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, commodi, expedita quo ratione illo laborum id voluptates numquam velit nostrum adipisci eveniet. A quasi molestiae quo accusamus minima? Ducimus, nesciunt.
         Enim voluptatum sapiente laudantium ab? Exercitationem omnis, quasi, labore, odio eos quibusdam excepturi natus alias fugiat neque laudantium qui ipsum eligendi tenetur esse. Perspiciatis, obcaecati accusantium recusandae fugiat itaque totam?
         Possimus illum reiciendis enim quos pariatur quasi voluptatem ex totam et, aliquam dolorem, facere vitae nostrum molestiae, praesentium odit eveniet quae eaque non officiis doloremque. Ea amet voluptas optio reprehenderit.
         Ipsam magni ad fuga optio quaerat doloremque. Alias officiis ad molestias nesciunt porro at blanditiis autem libero accusantium, tempore deserunt ipsa voluptas quod voluptate. Quam ab repellendus perferendis possimus rem!
         Possimus vitae ut harum similique quidem reprehenderit voluptate corporis saepe, perspiciatis consequatur. Tempora accusantium veniam explicabo aspernatur libero quaerat ullam ipsam laborum ea! Optio modi asperiores ullam aliquam est incidunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, commodi, expedita quo ratione illo laborum id voluptates numquam velit nostrum adipisci eveniet. A quasi molestiae quo accusamus minima? Ducimus, nesciunt.
         Enim voluptatum sapiente laudantium ab? Exercitationem omnis, quasi, labore, odio eos quibusdam excepturi natus alias fugiat neque laudantium qui ipsum eligendi tenetur esse. Perspiciatis, obcaecati accusantium recusandae fugiat itaque totam?
         Possimus illum reiciendis enim quos pariatur quasi voluptatem ex totam et, aliquam dolorem, facere vitae nostrum molestiae, praesentium odit eveniet quae eaque non officiis doloremque. Ea amet voluptas optio reprehenderit.
         Ipsam magni ad fuga optio quaerat doloremque. Alias officiis ad molestias nesciunt porro at blanditiis autem libero accusantium, tempore deserunt ipsa voluptas quod voluptate. Quam ab repellendus perferendis possimus rem!
         Possimus vitae ut harum similique quidem reprehenderit voluptate corporis saepe, perspiciatis consequatur. Tempora accusantium veniam explicabo aspernatur libero quaerat ullam ipsam laborum ea! Optio modi asperiores ullam aliquam est incidunt.</p> 
        </div>
        <div class="main">  
         <p><?= $arryaTest['ключ']?> dolor sit amet consectetur, adipisicing elit. Esse, commodi, expedita quo ratione illo laborum id voluptates numquam velit nostrum adipisci eveniet. A quasi molestiae quo accusamus minima? Ducimus, nesciunt.
         Enim voluptatum sapiente laudantium ab? Exercitationem omnis, quasi, labore, odio eos quibusdam excepturi natus alias fugiat neque laudantium qui ipsum eligendi tenetur esse. Perspiciatis, obcaecati accusantium recusandae fugiat itaque totam?
         Possimus illum reiciendis enim quos pariatur quasi voluptatem ex totam et, aliquam dolorem, facere vitae nostrum molestiae, praesentium odit eveniet quae eaque non officiis doloremque. Ea amet voluptas optio reprehenderit.
         Ipsam magni ad fuga optio quaerat doloremque. Alias officiis ad molestias nesciunt porro at blanditiis autem libero accusantium, tempore deserunt ipsa voluptas quod voluptate. Quam ab repellendus perferendis possimus rem!
         Possimus vitae ut harum similique quidem reprehenderit voluptate corporis saepe, perspiciatis consequatur. Tempora accusantium veniam explicabo aspernatur libero quaerat ullam ipsam laborum ea! Optio modi asperiores ullam aliquam est incidunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, commodi, expedita quo ratione illo laborum id voluptates numquam velit nostrum adipisci eveniet. A quasi molestiae quo accusamus minima? Ducimus, nesciunt.
         Enim voluptatum sapiente laudantium ab? Exercitationem omnis, quasi, labore, odio eos quibusdam excepturi natus alias fugiat neque laudantium qui ipsum eligendi tenetur esse. Perspiciatis, obcaecati accusantium recusandae fugiat itaque totam?
         Possimus illum reiciendis enim quos pariatur quasi voluptatem ex totam et, aliquam dolorem, facere vitae nostrum molestiae, praesentium odit eveniet quae eaque non officiis doloremque. Ea amet voluptas optio reprehenderit.
         Ipsam magni ad fuga optio quaerat doloremque. Alias officiis ad molestias nesciunt porro at blanditiis autem libero accusantium, tempore deserunt ipsa voluptas quod voluptate. Quam ab repellendus perferendis possimus rem!
         Possimus vitae ut harum similique quidem reprehenderit voluptate corporis saepe, perspiciatis consequatur. Tempora accusantium veniam explicabo aspernatur libero quaerat ullam ipsam laborum ea! Optio modi asperiores ullam aliquam est incidunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, commodi, expedita quo ratione illo laborum id voluptates numquam velit nostrum adipisci eveniet. A quasi molestiae quo accusamus minima? Ducimus, nesciunt.
         Enim voluptatum sapiente laudantium ab? Exercitationem omnis, quasi, labore, odio eos quibusdam excepturi natus alias fugiat neque laudantium qui ipsum eligendi tenetur esse. Perspiciatis, obcaecati accusantium recusandae fugiat itaque totam?
         Possimus illum reiciendis enim quos pariatur quasi voluptatem ex totam et, aliquam dolorem, facere vitae nostrum molestiae, praesentium odit eveniet quae eaque non officiis doloremque. Ea amet voluptas optio reprehenderit.
         Ipsam magni ad fuga optio quaerat doloremque. Alias officiis ad molestias nesciunt porro at blanditiis autem libero accusantium, tempore deserunt ipsa voluptas quod voluptate. Quam ab repellendus perferendis possimus rem!
         Possimus vitae ut harum similique quidem reprehenderit voluptate corporis saepe, perspiciatis consequatur. Tempora accusantium veniam explicabo aspernatur libero quaerat ullam ipsam laborum ea! Optio modi asperiores ullam aliquam est incidunt.</p>
        <li><?= $arryaTest3[0]; ?>

        </li>
        </div>  
    </div>
    <footer>
        <p>&#169; Все права защищены</p>
        <p><a href="#top"> Вверх</a> </p>
    </footer>
   

    <!-- <span> 12164165456</span>
    <span> 12164165456</span>
   <div >dsadsdddd</div> 
   <div >dsadsdddd</div> -->
</body>
</html>