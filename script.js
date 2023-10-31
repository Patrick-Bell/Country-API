const searchInput = document.querySelector("input");
const infoText = document.querySelector(".info-text");
const closeButton = document.querySelector(".close-button");
let countryName = searchInput.value;
const moreInfoSection = document.querySelector(".content");


closeButton.addEventListener("click", () => {
    moreInfoSection.style.display = "none";
    searchInput.value = "";
    infoText.innerHTML = "Type a country to find out more!";    
    infoText.style.display = "block";
    infoText.style.color = "#7e7e7e";
});

function search(countryName) {
    searchInput.value = countryName;
    fetchAPI(countryName);
}

function fetchAPI(countryName) {
    wrapper.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Searching the country of <span>"${countryName}..."</span>`;
    // Reset the display property to make the moreInfoSection visible
    moreInfoSection.style.display = "block";
    searchInput.value = countryName; // Update the search input with the new word
}

searchInput.addEventListener("click", () => {
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((data) => {
        infoText.innerHTML = "Searching for country..."
        infoText.style.display = "block";
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(data[0].population);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));

    
        flags.innerHTML = `<img src="${data[0].flags.svg}" class="country-flag">`
        names.innerHTML = `${data[0].name.common}`
        capital.innerHTML = `${data[0].capital[0]}`;
        continent.innerHTML =`${data[0].continents[0]}`;
        population.innerHTML = `${data[0].population}`;
        currency.innerHTML = `${data[0].currencies[Object.keys(data[0].currencies)].name}`;
        languages.innerHTML = `${Object.values(data[0].languages).toString().split(",").join(", ")}`
        infoText.style.display = "none";

    });

})
