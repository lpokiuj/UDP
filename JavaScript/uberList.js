const createTemplate = (catName) => `
    <div class="char-img">
        <a href="uber-desc.html"><img src="../images/character-img.svg" alt=""></a>
        <p>${catName}</p>
    </div>
`

fetchData().then((cats) => {
  console.log(cats);
  const catsTemplate = cats.map((cat) => createTemplate(cat.Name)).join('');
  document.querySelector('.list-img').innerHTML = catsTemplate;
});
