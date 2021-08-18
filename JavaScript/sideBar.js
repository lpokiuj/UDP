// Sidebar
let burger = document.querySelector('.burger-icon');
let sidebar = document.querySelector('.sidebar');
let closeBurger = document.querySelector('.close-burger');

burger.addEventListener("click", function(){
    sidebar.style.display = "block";
});

closeBurger.addEventListener("click", function(){
    sidebar.style.display = "none";
});