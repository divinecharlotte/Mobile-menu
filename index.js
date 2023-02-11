const burger = document.getElementById('fa-bars');
const hideMenu = document.getElementById('closeIcon');

const navLinks = document.getElementById('desktop-nav');

burger.onclick = function burger() {
  navLinks.style.right = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

navLinks.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};
