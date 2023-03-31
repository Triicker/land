const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const teste = document.querySelector('.nav-item');
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const twomenu = document.querySelector('.a');
const otoMenu = document.querySelector('.b');
const twoteste = document.querySelector('.c');
menu.addEventListener('click', () => {
    twomenu.classList.toggle('ativo');
    otoMenu.classList.toggle('ativo');
})

function trucker() {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
}

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openNav2() {
    document.getElementById("mySidebar2").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav2() {
    document.getElementById("mySidebar2").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function whatsApp() {
    window.location.replace('https://wa.me/71988849111');
}

function enviarSenha() {
    alert("Cadastro finalizado!! A Senha de acesso é: etica1234");
}


function anChor() {
    alert("Ancora");
}



document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Interrompe a submissão do formulário

    var senha = document.querySelector('input[name="senha"]').value;

    if (senha === 'etica1234') {
        window.location.replace("livros.html");
    } else {
        alert('Senha incorreta!'); // Mostra um alerta de erro
    }
});



function iniciarCarousel() {
    $('#isso').carousel({
        interval: 1000 // Tempo de duração de cada slide em milissegundos
    });
}

$(document).ready(function () {
    iniciarCarousel(); // Inicia o carrossel quando a página carrega
});
