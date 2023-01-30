const sidenav=()=>{
    const menu= document.querySelector('.menu-icon');
    const nav= document.querySelector('.nav');
    menu.addEventListener('click',()=>{
        menu.classList.toggle('menu-icon-actiive');
        nav.classList.toggle('nav-active');
    });
}
sidenav();