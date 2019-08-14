const countries = function () {

  fetch("https://restcountries.eu/rest/v2/all")
    .then(function (data1) {
      // console.log(data1)
      return data1.json()
    })
    .then(function (data) {
      // console.log(data)
      const listElem = document.createElement("select"); // create list
      document.querySelector("#div2").appendChild(listElem);
      listElem.id = "dropdownList";

      //  map data and populate list
      data.map(function (x) {
        this.optionElem = document.createElement("option")
        optionElem.innerHTML = x.name //  fills html list
        optionElem.value = x.name //  fills value
        listElem.appendChild(optionElem) // adds to list
        return x.name
      })

      console.log(listElem);

      //  select/change
      listElem.addEventListener("change", (event) => {
        const selection = document.querySelector("#div3");
        selection.textContent = `${event.target.value}`;
      });
    });
}

document.getElementById("btn").addEventListener("click", countries);
