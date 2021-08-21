// Sidebar
let burger = document.querySelector('.burger-icon');
let sidebar = document.querySelector('.sidebar');
let closeBurger = document.querySelector('.close-burger');
let overlay = document.querySelector('.overlay-sidebar');

burger.addEventListener("click", function(){
    sidebar.style.right = "0";
    overlay.style.display = "block";
    overlay.style.position = "absolute";    
    overlay.style.width= "100%";
    overlay.style.height = "100%";

});

closeBurger.addEventListener("click", function(){
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
    categories.classList.remove('active');
    gacha.classList.remove('active');
});

document.querySelector('body').addEventListener("click", function(e){

    if(e.target == overlay){
        sidebar.style.right = "-100%";
        overlay.style.display = "none";
        categories.classList.remove('active');
        gacha.classList.remove('active');
    }

});

let categories = document.querySelector('.drop-down-button-sidebar-categories');
let gacha = document.querySelector('.drop-down-button-sidebar-gacha');

categories.addEventListener("click", function(){

    if(categories.classList.contains('active')){
        categories.classList.remove('active');
    }
    else{
        categories.classList.add('active');
        gacha.classList.remove('active');
        flag = 1;
    }

});

gacha.addEventListener("click", function(){

    if(gacha.classList.contains('active')){
        gacha.classList.remove('active');
    }
    else{
        gacha.classList.add('active');
        categories.classList.remove('active');
        flag = 1;
    }

});

document.querySelector('.sidebar').addEventListener("click", function(e){

    if(categories != e.target && categories.classList.contains('active') && flag == 0){
        categories.classList.remove('active');
    }
    if(gacha != e.target && gacha.classList.contains('active') && flag == 0){
        gacha.classList.remove('active');
    }
    flag = 0;

});

// responsive navbar

let navCategories = document.querySelector('.nav-button-categories');

navCategories.addEventListener("click", function(){

    navCategories.classList.add('active');

})
