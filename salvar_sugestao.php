<?php
// Defina as credenciais do banco de dados
$servername = "localhost";
$username = "editorae_reforco_usermobile";
$password = "U=YwPBdo+17d";
$dbname = "editorae_reforco_gamificado_mobile";

// Crie uma conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifique se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("A conexão com o banco de dados falhou: " . $conn->connect_error);
}

// Se o formulário foi submetido, insira os valores na tabela de sugestão
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $colecao = $_POST["opcao1"];
    $aprovacao = $_POST["opcao2"];
    $visita = $_POST["opcao3"];
    $comentario = $_POST["campo1"];

    // Prepare e execute a consulta SQL para inserir os valores na tabela de sugestão
    $sql = "INSERT INTO sugestao (colecao, aprovacao, visita, comentario) VALUES ('$colecao', '$aprovacao', '$visita', '$comentario')";
    if ($conn->query($sql) === TRUE) {
        echo "Os dados foram inseridos com sucesso na tabela de sugestão.";
    } else {
        echo "Erro ao inserir os dados na tabela de sugestão: " . $conn->error;
    }
}

// Feche a conexão com o banco de dados
$conn->close();
?>
