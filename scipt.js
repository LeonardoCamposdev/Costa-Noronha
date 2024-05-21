//MENU HAMBURGER//
const btnMobile = document.querySelector(".btn-mobile");
const headerMenu = document.querySelector(".header-menu");

function ToggleMenu() {
  const nav = document.querySelector(".nav");
  const headerMenu = document.querySelector(".header-menu");
  nav.classList.toggle("active");
  headerMenu.classList.toggle("active");
}

btnMobile.addEventListener("click", ToggleMenu);
headerMenu.addEventListener("click", ToggleMenu);
//MENU HAMBURGER//

//ANIMAÇÃO SCROLL LEFT//
function initAnimacaoScroll1() {
  const liScroll = document.querySelectorAll(".js-li-scroll1");
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {
    const li = liScroll;
    li.forEach((item) => {
      const liTop = item.getBoundingClientRect().top - windowMetade;
      if (liTop < 0) {
        item.classList.add("ativo");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll1();
//ANIMAÇÃO SCROLL LEFT//

//ANIMAÇÃO SCROLL RIGHT//
function initAnimacaoScroll2() {
  const liScroll = document.querySelectorAll(".js-li-scroll2");
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {
    const li = liScroll;
    li.forEach((item) => {
      const liTop = item.getBoundingClientRect().top - windowMetade;
      if (liTop < 0) {
        item.classList.add("ativo");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll2();
//ANIMAÇÃO SCROLL RIGHT//

//ANIMAÇÃO SCROLL TOP//
function initAnimacaoScroll3(){
  const sectionScroll = document.querySelectorAll(".js-li-scroll3");
  const windowMetade = window.innerHeight * 0.7;
  
  function animaScroll(){
    const section = sectionScroll;
    section.forEach((item) =>{
      const sectionTop = item.getBoundingClientRect().top - windowMetade;
      if( sectionTop < 0) {
        item.classList.add("ativo");
      }
    })
  }
  
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll3();
