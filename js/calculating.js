let b = 0;

let to_add_number = document.getElementById("amount-button-number");
let minus = document.getElementById("amount-button-minus");
let plus = document.getElementById("amount-button-plus");

let a = 0;

plus.addEventListener("click", (event) => {
  to_add_number.innerText = a + 1;
  a = a + 1;
  return a
});

minus.addEventListener("click", (event) => {
  if (a > 0) {
    to_add_number.innerText = a - 1;
    a = a - 1;
  }
  return a
});
