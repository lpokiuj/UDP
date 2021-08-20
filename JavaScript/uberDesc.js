// console.log(new URL(window.location.href).searchParams.get("name"));

function createdescTemplate(desc){

    let descrip = "";
    for(let i = 0 ; i < desc.length ; i++){
        descrip+=`<p>${desc[i]}</p><br>`
    }

    return `

    <img src="../images/charCardPlaceHolder.svg" alt="">
    <h1>Description</h1>
        ${descrip}
    <h1>Appears in Banner:</h1>
    <ul>
        <li>Sengoku Wargods Vajiras Event</li>
        <li>UBERFEST Rare Cat Capsule Event</li>
        <li>Platinum Capsules</li>
        <li>EPICFEST Rare Cat Capsule Event</li>
        <li>Welcome 2020!</li>
        <li>SUPERFEST Rare Cat Capsule Event</li>
        <li>Ultra Selection</li>
    </ul>
    `
} 

fetchData().then((cats) => {
    // console.log(cats);

    const getName = new URL(window.location.href).searchParams.get("name");

    let returnValue;
    for(let i = 0 ; i < cats.length ; i++){
        if(cats[i].Name == getName){
            returnValue = createdescTemplate(cats[i].Description);
            break;
        }
    };

    document.querySelector('main').innerHTML = returnValue;
});
