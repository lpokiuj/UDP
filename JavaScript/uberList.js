// Helpers
const storeScores = (scores) => encodeURIComponent(JSON.stringify(scores));
const getScores = (scores) => JSON.parse(decodeURIComponent(scores));

const createTemplate = (catName, catScore, uberId) => `
    <div data-scores="${storeScores(
        catScore
    )}" data-uber-id="${uberId}" class="char-img flex">
        <a href="uber-desc.html?name=${catName}"><img src="../images/character-img.svg" alt=""></a>
        <p>${catName}</p>
    </div>
`;


// Get all elements
const catList = document.querySelector(".list-img");

// search
const searchForm = document.querySelector(".search-bar");
const searchInput = document.querySelector(".search-bar-bar");

// categories
let categoriesFlag = false;
const categoriesButton = document.querySelector(".categories-bar");
const categoriesButtonText = categoriesButton.querySelector("p");
const filterCategoryButtons = document.querySelectorAll(
    ".drop-down-categories p"
);

// sort
let sortFlag = false;
const sortByButton = document.querySelector(".sort-by-bar");
const sortByButtonText = sortByButton.querySelector("p");
const filterSortButtons = document.querySelectorAll(".drop-down-sort p");

fetchData().then((cats) => {
    const catTemplate = cats
        .map((cat) => createTemplate(cat.Name, cat.Scores, cat.uberId))
        .join("");

    // appending to list
    catList.innerHTML = catTemplate;

    const cache = {
        searchInput: searchInput.value || "",
        category: "",
        sort: "",
    };

    // FIXME: how to clear input text when user refresh? 
    searchInput.addEventListener("input", (e) => {
        cache.searchInput = e.target.value;
    });

    filterCategoryButtons.forEach((el) => {
        el.addEventListener("click", (e) => {
            cache.category = e.target.dataset.category;
            categoriesButtonText.innerText = cache.category;
        });
    });

    filterSortButtons.forEach((el) => {
        el.addEventListener("click", (e) => {
            cache.sort = e.target.classList[0];
            sortByButtonText.innerText = e.target.innerText;
        });
    });

    const sortBy = (elements, type) => {
        if (type === "alphabet") {
            return elements.sort((el1, el2) => {
                if (el1.Name < el2.Name) return -1;
                if (el1.Name > el2.Name) return 1;
                return 0;
            });
        } else {
            return elements.sort((el1, el2) => {
                return el1.uberId - el2.uberId;
            });
        }
    };

    const searchBtn = document.querySelector(".search-btn");
    searchBtn.addEventListener("click", () => {
        // getCache
        console.table(cache);

        // elements
        let elements = cats;
        let output = [];
        output =
            cache.searchInput === ""
                ? cats
                : elements.filter((cat) =>
                      cat.Name.toLowerCase().includes(
                          cache.searchInput.toLowerCase()
                      )
                  );

        output =
            cache.category === ""
                ? output
                : output.filter((cat) =>
                      cat.Scores.hasOwnProperty(cache.category)
                  );

        output = cache.sort === "" ? output : sortBy(output, cache.sort);

        console.log("output: ", output);

        catList.innerHTML = "";

        if (!output.length) {
            catList.innerHTML = `
            <h2 style="color: white;">No cats found</h2>
            `;
        } else {
            catList.innerHTML = output
                .map((o) => createTemplate(o.Name, o.Scores, o.uberId))
                .join("");
        }
    });

    document.querySelector('.reset-btn').addEventListener('click', () => {
        catList.innerHTML = '';

        // reset cache
        cache.category = "";
        cache.searchInput = "";
        cache.sort = ""

        // reset UI
        searchInput.value = "";
        categoriesButtonText.innerText = "Categories";
        sortByButtonText.innerText = "Sort by";
        catList.innerHTML = catTemplate;
    })
});
