// docs: https://funtranslations.com/api/yoda

function yodize() {

  const phrase = document.getElementById("to-yodize").value;

  const encoded = encodeURIComponent(phrase);

  const url = "https://api.funtranslations.com/translate/yoda.json?text=" + encoded;

  /*
    use fetch to send a get request to the url above
    then log only the translated phrase
  */

  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
  //     const response = JSON.parse(xhr.response);
  //     const yodized = response.contents.translated;
  //     const p = document.createElement('p');
  //     p.innerHTML = `Yodized:  ${yodized}`;
  //     const firstDiv = document.getElementsByTagName('div')[0];
  //     firstDiv.appendChild(p);
  //   }
  // };
  // xhr.open('get', url);
  // xhr.send();

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson.contents.translated));
    });

}

document.getElementById("yodize").addEventListener("click", yodize);