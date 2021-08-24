<?php

if($_REQUEST["action"] == "sendmail")
{
    $mailContact = "Seu nome <email@dominio.com.br>";
    $mailAuthor = $_POST["nome"];
    $mailReply = $_POST["email"];
    $mailCall = $_POST["tel"];
    $mailSubject = "Contato via site";
    $mailMessage = $_POST["mensagem"];

    $headers = "Return-Path: ".$mailContact."\r\n";
    $headers .= "From: ".$mailContact."\r\n";
    $headers .= "Reply-To: ".$mailReply."\r\n";

    $mailBody = "Nome: ".$mailAuthor."\r\n";
    $mailBody .= "E-mail: ".$mailReply."\r\n";
    $mailBody .= "Assunto: ".$mailSubject."\r\n";
    $mailBody .= "Menssagem: ".$mailMessage."\r\n";

    $sucess = mail($mailContact, $mailSubject, $mailBody, $headers)
                or die("Problemas para enviar o e-mail");
    
    if($sucess)
    {
        echo "Email enviado com sucesso!";
    }
    else
    {
        echo "Ação inválida";
    }
}
?>