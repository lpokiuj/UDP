let dropdownButtonCategories = document.querySelector('.categories-bar');
let dropdownButtonGacha = document.querySelector('.gacha-set-bar');

dropdownButtonCategories.addEventListener("click", function(){

    if(dropdownButtonCategories.classList.contains('active') && flagCategories == 1){
        dropdownButtonCategories.classList.remove('active');
    }
    else if(flagCategories == 0){
        dropdownButtonCategories.classList.add('active');
        dropdownButtonGacha.classList.remove('active');
    }

});

dropdownButtonGacha.addEventListener("click", function(){

    if(dropdownButtonGacha.classList.contains('active') && flagGacha == 1){
        dropdownButtonGacha.classList.remove('active');
    }
    else if(flagGacha == 0){
        dropdownButtonGacha.classList.add('active');
        dropdownButtonCategories.classList.remove('active');
    }

});

document.querySelector('body').addEventListener("click", function(e){

    console.log(e.target);

    if(dropdownButtonCategories.classList.contains('active')){
        if(e.target != dropdownButtonGacha){
            dropdownButtonCategories.classList.remove('active');
            flagCategories = 0;
        }
        else{
            // if gacha do whatever
        }
    }
    else if(dropdownButtonGacha.classList.contains('active')){
        if(e.target != dropdownButtonCategories){
            dropdownButtonGacha.classList.remove('active');
        }
        else{
            // if categories do whatever
        }
    }
    else{
    }

});