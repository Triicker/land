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

function salve() {
    alert("Hello World");
}



