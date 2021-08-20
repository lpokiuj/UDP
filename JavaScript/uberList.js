const createTemplate = (catName, catScore) => `
    <div data-scores="${encodeURIComponent(JSON.stringify(catScore))}" class="char-img flex">
        <a href="uber-desc.html?name=${catName}"><img src="../images/character-img.svg" alt=""></a>
        <p>${catName}</p>
    </div>
`

const list = document.querySelector('.list-img');
let catList = [];
let filteredCat = [];

fetchData().then((cats) => {
    // console.log(cats);
    const catsTemplate = cats.map((cat) => createTemplate(cat.Name, cat.Scores)).join('');
    document.querySelector('.list-img').innerHTML = catsTemplate;
    catList = Array.from(list.children);
    filteredCat = catList;
    getfromSidebar();
});

function changeList(attr){

    list.innerHTML = ``;

    // console.log(catList);

    filteredCat = []; 

    catList.forEach(cat=>{
        let scores = JSON.parse(decodeURIComponent(cat.dataset.scores));
        if(scores.hasOwnProperty(attr)){
            filteredCat.push(cat);
        }
    });

    // console.log(filteredCat);

    for(let i = 0 ; i < filteredCat.length ; i++){
        list.appendChild(filteredCat[i]);
    }

    let changeText = document.querySelector('.categories-bar p');
    changeText.innerHTML = `${attr}`;
}

Array.from(document.querySelector('.drop-down-main-content').children).forEach(element=>{

    // console.log(element.tagName);

    if(element.tagName == "P"){
        element.addEventListener("click", (e)=>{
            // console.log(e.dataset.attribute);
            let attr = e.target.dataset.attribute;
            if(attr === undefined){
                console.log("nyaho");
            }

            changeList(attr);
        
        });

        
    }
});

let alphabetical = document.querySelector('.alphabet');
let uberID = document.querySelector('.uberID');

alphabetical.addEventListener("click", () => {

    list.innerHTML = '';

    
    const filteredMap = [...filteredCat].sort((el1, el2) => {
        const a = el1.querySelector("p").innerText;
        const b = el2.querySelector("p").innerText;
      
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    for(let i = 0 ; i < filteredMap.length ; i++){
        list.appendChild(filteredMap[i]);
    }
    
    let changeText = document.querySelector('.sort-by-bar');
    changeText.innerHTML = `Alphabetical`;

});

function getfromSidebar(){
    const getCategories = new URL(window.location.href).searchParams.get("categories");
    if(getCategories != null){
        Array.from(document.querySelector('.drop-down-main-content').children).forEach(element=>{

            // console.log(element.tagName);
            if(element.innerHTML == getCategories){
                let attr = element.dataset.attribute;
                    if(attr === undefined){
                        console.log("nyaho");
                    }
        
                changeList(attr);
        
                
            }
        });
    }    
}