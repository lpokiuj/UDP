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
});

document.querySelector('body').addEventListener("click", function(e){

    if(e.target == overlay){
        sidebar.style.right = "-100%";
        overlay.style.display = "none";
    }

});