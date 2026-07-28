const menu = document.querySelector('#menu');
const navLinks = document.querySelector('.nav-links');

menu.onclick = () =>{
    navLinks.classList.toggle('active');
}