const burger = document.getElementById('fa-bars');
const hideMenu = document.getElementById('closeIcon');

const navLinks = document.getElementById('desktop-nav');

const hideMenuFunc = (arg) => { navLinks.style.right = arg; }; 
burger.onclick = () => hideMenuFunc("0");
 hideMenu.onclick = () => hideMenuFunc("-100%");
 navLinks.onclick = () => hideMenuFunc("-100%");