const getCountriesWhenClicked = function getCountries() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then(function (rawData) {
      return rawData.json()
    })
    .then(function (dataJson) {
      console.log(dataJson)
      const listElem = document.createElement("select"); // create list
      document.querySelector("#divDropdown").appendChild(listElem)
      listElem.id = "dropdownList";

      //  map dataJson and populate list
      dataJson.map(function (x) {
        optionElem = document.createElement("option")
        optionElem.innerHTML = x.name //  fills html list
        // optionElem.value = x.name //  fills value
        listElem.appendChild(optionElem) // adds to list
        return x.name
      })

      console.log(listElem);

      //  select/change
      listElem.addEventListener("change", (event) => {
        const selection = document.querySelector("#divResult")
        selection.textContent = event.target.value
        const selContent = selection.textContent
        console.log(selContent);


        const selectedCountry = dataJson.filter(country => country.name === selContent)
        console.log(selectedCountry);

        //  creates content for selected
        function createContent(a) {
          console.log(a);
        };

        createContent(selContent);
      })
    })

}

document.getElementById("btn").addEventListener("click", getCountriesWhenClicked);

