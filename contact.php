<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['msg'];

$email_from = 'gcchetri734@gmail.com';
$email_subject = 'New form submission';
$email_body = "user name: $name.\n".
"user Email: $visitor_email.\n".
"user messae: $message";

$to = "thapagaurav721@gmail.com";

$headers = "From: $email_from \r\n";

$headers = "Reply-to: $visitor_email\r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html")
 



?>