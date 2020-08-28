<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Письмо с сайта: Ремонт квартир";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон заказчика:</b> $phone<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'black_fant0m@mail.ru'; // Логин на почте
    $mail->Password   = 'progress_06b'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('black_fant0m@mail.ru', 'Клиент'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('denwerado@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo "<script>
             alert('Спасибо, ваша заявка принята, нажмите ОК, чтобы вернуться на главную страницу'); 
             window.history.go(-1);
     </script>";
?>