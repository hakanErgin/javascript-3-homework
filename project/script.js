const countries = function () {


  fetch('https://restcountries.eu/rest/v2/all')
    .then(function (data1) {
      console.log(data1)
      return data1.json()
    })
    .then(function (data) {
      console.log(data)

      const list = document.createElement("select");
      document.body.appendChild(list);
      list.id = "dropdownList";

      const makeSelectOptions = data.map(function (x) {
        const selectOption = document.createElement("option")
        selectOption.innerHTML = x.name //fills the html
        selectOption.value = x.name //fills value
        list.appendChild(selectOption)
        
      })
      
    });
}


document.getElementById("btn").addEventListener("click", countries);
