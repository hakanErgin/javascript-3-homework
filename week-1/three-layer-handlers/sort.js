function sort_charecters(str) {
  const strToArr = str.split("");
  const sortArray = strToArr.sort();
  str = sortArray.join("");
  return str;
}

function sort_handler() {

  // read and process user input
  const to_sort = document.getElementById('to-sort').value;

  // pass user input through core logic

  /* write a logic function to sort charecters in a string */
  /* assign the result to a variable named 'sorted' */
  const sorted = sort_charecters(to_sort);

  // report result to user
  const output_field = document.getElementById('sorted');
  output_field.innerHTML = sorted;
};

const sort_button = document.getElementById("sort-it");
sort_button.addEventListener("click", sort_handler);
