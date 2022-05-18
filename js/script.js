// Target some variables
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');

const menuBg=document.getElementById('menu-bg');

function onClickMenu(){
    //Hamburger line change
    menu.classList.toggle('change');

    //Nav change
    nav.classList.toggle('change');

    // circle  bg change
    menuBg.classList.toggle('change-bg')
}