<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nomecontato"];
    $email = $_POST["emailcontato"];
    $telefone = $_POST["telefonecontato"];
    $mensagem = $_POST["mensagemcontato"];
    
    $para = "gabrieltriicker@gmail.com";
    $assunto = "Mensagem de contato";
    $corpo = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nMensagem:\n$mensagem";
    $headers = "From: $email";
    
    if (mail($para, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem.";
    }
}
?>
