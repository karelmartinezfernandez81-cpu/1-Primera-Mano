// MENU LATERAL + OVERLAY
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

function openMenu(){
  navMenu.classList.add('open');
  overlay.classList.add('show');
  document.body.classList.add('menu-open');
  menuBtn.setAttribute('aria-expanded','true');
  navMenu.setAttribute('aria-hidden','false');
}

function closeMenu(){
  navMenu.classList.remove('open');
  overlay.classList.remove('show');
  document.body.classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded','false');
  navMenu.setAttribute('aria-hidden','true');
}

menuBtn.addEventListener('click', () => {
  if(navMenu.classList.contains('open')) closeMenu();
  else openMenu();
});

overlay.addEventListener('click', closeMenu);

// close menu on Escape
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMenu();
});
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

