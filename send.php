<?php
$to = "info@virtualelectronics.sg";
$subject = "complete form on gipnetix website";
$message = "Name: " . $_POST['name'] . "\nE-mail: " . $_POST['email'] . "\nMessage: " . $_POST['message'];
$headers = "From: info@gipnetix.com";

mail($to, $subject, $message, $headers);
