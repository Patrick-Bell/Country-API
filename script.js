document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input");
    const infoText = document.querySelector(".info-text");
    const flags = document.querySelector("#flags"); 
    const names = document.querySelector("#names"); 
    const capital = document.querySelector("#capital"); 
    const continent = document.querySelector("#continent");
    const population = document.querySelector("#population"); 
    const currency = document.querySelector("#currency"); 
    const languages = document.querySelector("#languages");
    const timezones = document.querySelector("#timezones");
    const countryInfo = document.querySelector(".content");
    const countryAbb = document.querySelector(".fifa");
    const closeButton = document.querySelector(".bi-x-lg")
      
    searchInput.addEventListener("input", () => {
      const countryName = searchInput.value;
      let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
      
      // Check if the input is empty
      
      if (countryName === "") {
        infoText.innerHTML = "Please enter a country name.";
        infoText.style.display = "block"
        countryInfo.classList.remove("active");
        return;
      }
  
      //fetching the api and extracting the data 

      fetch(finalURL).then((response) => response.json()).then((data) => {
          
          console.log(data[0]);
          console.log(data[0].capital[0]);
          console.log(data[0].flags.svg);
          console.log(data[0].name.common);
          console.log(data[0].fifa);
          console.log(data[0].continents[0]);
          console.log(data[0].population);
          console.log(Object.keys(data[0].currencies)[0]);
          console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
          console.log(Object.values(data[0].languages).toString().split(",").join(", "));
          console.log(data[0].timezones[0]);

        //placing the extracted data where I want it 

        countryInfo.classList.add("active");
        infoText.style.display = "";
        infoText.innerHTML = "";
          flags.innerHTML = `<img src="${data[0].flags.svg}" class="country-flag">`;
          names.innerHTML = `${data[0].name.common}`
          countryAbb.innerHTML = `(${data[0].fifa})`;
          capital.innerHTML = `${data[0].capital[0]}`;
          continent.innerHTML = `${data[0].continents[0]}`;
          population.innerHTML = `${data[0].population.toLocaleString()}`;
          currency.innerHTML = `${data[0].currencies[Object.keys(data[0].currencies)].name}`;
          languages.innerHTML = `${Object.values(data[0].languages).toString().split(",").join(", ")}`;
          timezones.innerHTML = `${data[0].timezones[0]}`;
          infoText.style.display = "none";

          // handling countries with no abbreviations, to not show. e.g. United Kingdom

          if (data[0].fifa === undefined){
            countryAbb.style.display = "none";
          } else {
            countryAbb.style.display = "inline";
          }
          
        })
        
        //close button to reset

        closeButton.addEventListener("click", () => {
            countryInfo.classList.remove("active");
            infoText.innerHTML = "Enter a country name to find out more!"
            infoText.style.display = "block"
            searchInput.value = ""
    });
  });
})
