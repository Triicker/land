<?php
// Estabelece uma conexão com o banco de dados
$servername = "localhost";
$username = "editorae_reforco_usermobile";
$password = "U=YwPBdo+17d";
$dbname = "editorae_reforco_gamificado_mobile";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Falha ao conectar ao banco de dados: " . $conn->connect_error);
}

// Obtém os valores do formulário
$nome = $_POST["nomecadastro"];
$funcao = $_POST["funcaocadastro"];
$instituicao = $_POST["instituicaocadastro"];
$telefone = $_POST["telefonecadastro"];

// Insere os valores na tabela "cadastro"
$sql = "INSERT INTO cadastro (nome, funcao, instituicao, telefone) VALUES ('$nome', '$funcao', '$instituicao', '$telefone')";

if ($conn->query($sql) === TRUE) {
  echo "Cadastro realizado com sucesso!";
} else {
  echo "Erro ao cadastrar: " . $conn->error;
}

$conn->close();
