let dropdownButtonCategories = document.querySelector('.categories-bar');
let dropdownButtonGacha = document.querySelector('.gacha-set-bar');

let flag = 0;
dropdownButtonCategories.addEventListener("click", function(){

    if(dropdownButtonCategories.classList.contains('active')){
        dropdownButtonCategories.classList.remove('active');
    }
    else{
        dropdownButtonCategories.classList.add('active');
        dropdownButtonGacha.classList.remove('active');
        flag = 1;
    }

});

dropdownButtonGacha.addEventListener("click", function(){

    if(dropdownButtonGacha.classList.contains('active')){
        dropdownButtonGacha.classList.remove('active');
    }
    else{
        dropdownButtonGacha.classList.add('active');
        dropdownButtonCategories.classList.remove('active');
        flag = 1;
    }

});

document.querySelector('body').addEventListener("click", function(e){

    if(dropdownButtonCategories != e.target && dropdownButtonCategories.classList.contains('active') && flag == 0){
        dropdownButtonCategories.classList.remove('active');
    }
    if(dropdownButtonGacha != e.target && dropdownButtonGacha.classList.contains('active') && flag == 0){
        dropdownButtonGacha.classList.remove('active');
    }
    flag = 0;

});