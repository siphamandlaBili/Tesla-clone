'use strict'
// select elements
const side = document.querySelector('.sideBar');
const blur = document.querySelector('.backdrop');
const close = document.querySelector('.sideCloseBtn')
const open = document.querySelector('#menu');

// show side bar and backdrop
menu.addEventListener('click', function(){
    side.classList.add('show');
    blur.classList.add('reveal')
})

//  close menu and backdrop on click button "x" on side menu
close.addEventListener('click', function(){
    side.classList.remove('show');
    blur.classList.remove('reveal');
})

// close menu by clicking on screen
blur.addEventListener('click', function(){
    side.classList.remove('show');
    blur.classList.remove('reveal');
})