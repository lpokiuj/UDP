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

let navButtonCategories = document.querySelector('.nav-button-categories');
let navButtonGacha = document.querySelector('.nav-button-gacha');

let dropdownListCategories = document.querySelector('.categories-drop-down-nav');
let dropdownListGacha = document.querySelector('.gacha-drop-down-nav');
let dropdownListCredit = document.querySelector('.credit-nav');

navButtonCategories.addEventListener("click", function(e){

    let navCategories = e.target.closest('.nav-categories');
    // console.log(navCategories);

    if(navCategories.classList.contains('active')){
        navCategories.classList.remove('active');
        dropdownListGacha.style.marginLeft = "0rem";
    }
    else{
        navCategories.classList.add('active');
        dropdownListGacha.classList.remove('active');
        dropdownListCredit.style.marginLeft = "0rem";
        dropdownListGacha.style.marginLeft = "3rem";
        flag = 1;
    }

})

navButtonGacha.addEventListener("click", function(e){

    // let navCategories = e.target.closest('.categories-drop-down-nav');
    let navGacha = e.target.closest('.gacha-drop-down-nav');
    // console.log(navCategories);

    let allnavGacha = Array.from(document.querySelector('.responsive').children).filter(el => {
        return el != navGacha && !el.classList.contains('categories-drop-down-nav');
    });

    // console.log(allnavCategories);

    if(navGacha.classList.contains('active')){
        navGacha.classList.remove('active');
        dropdownListCredit.style.marginLeft = "0rem";
        
    }
    else{
        navGacha.classList.add('active');
        dropdownListCategories.classList.remove('active');
        dropdownListGacha.style.marginLeft = "0rem";
        dropdownListCredit.style.marginLeft = "3rem";
        flag = 1;
    }

})


document.querySelector('body').addEventListener("click", function(e){

    if(dropdownListCategories != e.target && dropdownListCategories.classList.contains('active') && flag == 0){
        dropdownListCategories.classList.remove('active');
        dropdownListGacha.style.marginLeft = "0rem";
        dropdownListCredit.style.marginLeft = "0rem";
    }
    if(dropdownListGacha != e.target && dropdownListGacha.classList.contains('active') && flag == 0){
        dropdownListGacha.classList.remove('active');
        dropdownListGacha.style.marginLeft = "0rem";
        dropdownListCredit.style.marginLeft = "0rem";
    }
    flag = 0;

});