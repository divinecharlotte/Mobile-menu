const burger =document.getElementById('fa-bars')
const hideMenu =document.getElementById('closeIcon')
const navLink =document.querySelector('.nav-link')
const navLinks =document.getElementById('desktop-nav')

burger.onclick = function burger() {
    navLinks.style.right = '0';

  };
  hideMenu.onclick = function hideMenu() {
    navLinks.style.right = '-100%';
  };
  
 navLink.onclick = function hideMenu() {
    navLinks.style.right = '-100%';
  };
  