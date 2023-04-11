
<?php

$url = "https://api.openweathermap.org/data/2.5/weather";

$options = array(
    "q" => "Moscow", 
    "appid" => 'b13b8ea9264b0bf87145d0efdc6ca92f',
    "units" => 'metric',
    "lang" => "ru"
);

$special = curl_init();
curl_setopt($special, CURLOPT_RETURNTRANSFER, true);
curl_setopt($special, CURLOPT_URL, $url."?".http_build_query($options));


$responce = curl_exec($special);
$datainfo = json_decode($responce, true);
curl_close($special);

echo  `<pre>`;

print_r($datainfo);
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Виджет погоды JSON</title>
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
           <li> <a href="./test.php"> Тестовый блок</a></li>
           <li> <a href="./api.php"> Погода JSON</a></li>

        </nav>

        <ul></ul>

    </header>
    <div>
        <h2><?=$datainfo[name]; ?></h2>
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