const menuButton=document.querySelector(".main-header__menu-button"),nav=document.querySelector(".main-nav"),mainHeader=document.querySelector(".main-header"),page=document.querySelector(".page-content");mainHeader.classList.remove("main-header--no-js");const addAnimation=()=>(nav.classList.remove("main-nav--no-js"),new Promise((n=>{setTimeout((()=>{nav.classList.add("main-nav--transition"),n()}),0)})));nav.classList.remove("main-nav--no-js"),new Promise((n=>{setTimeout((()=>{nav.classList.add("main-nav--transition"),n()}),0)}));const closeMenu=()=>{menuButton.classList.remove("main-header__menu-button--active"),nav.classList.remove("main-nav--active"),page.removeEventListener("click",onClickAway),window.removeEventListener("scroll",onScrollDown),document.removeEventListener("keydown",onEsc)},openMenu=()=>{menuButton.classList.add("main-header__menu-button--active"),nav.classList.add("main-nav--active"),page.addEventListener("click",onClickAway),window.addEventListener("scroll",onScrollDown),document.addEventListener("keydown",onEsc)};function onClickAway(){closeMenu()}const toggleMenu=()=>{menuButton.classList.contains("main-header__menu-button--active")?closeMenu():(menuButton.classList.add("main-header__menu-button--active"),nav.classList.add("main-nav--active"),page.addEventListener("click",onClickAway),window.addEventListener("scroll",onScrollDown),document.addEventListener("keydown",onEsc))};function onEsc(n){console.log(n.key),"Escape"===n.key&&(n.preventDefault(),closeMenu(),menuButton.blur())}function onScrollDown(){closeMenu()}menuButton.addEventListener("click",(()=>{menuButton.classList.contains("main-header__menu-button--active")?closeMenu():(menuButton.classList.add("main-header__menu-button--active"),nav.classList.add("main-nav--active"),page.addEventListener("click",onClickAway),window.addEventListener("scroll",onScrollDown),document.addEventListener("keydown",onEsc))}));