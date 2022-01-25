let cart_img = document.getElementById("cart_img");
let top_panel_profile = document.getElementById("top_panel_profile");

let cart_in = document.createElement("div");
cart_in.classList.add("cart-in-passive");

let cart_in_top = document.createElement("div");
let cart_in_top_text = document.createElement("p");
cart_in_top_text.classList.add("cart-in-top-text");
cart_in_top_text.innerText = "Cart";
cart_in_top.classList.add("cart-in-top");
cart_in_top.appendChild(cart_in_top_text);
cart_in.appendChild(cart_in_top);

let cart_in_main = document.createElement("div");
cart_in_main.classList.add("cart-in-main");
let cart_in_main_text = document.createElement("p");
cart_in_main_text.classList.add("cart-in-main-text");
cart_in_main_text.innerText = "Your cart is empty.";
cart_in_main.appendChild(cart_in_main_text);
cart_in.appendChild(cart_in_main);

function createMain() {
  let cart_in_main_top = document.createElement("div");
  cart_in_main_top.classList.add("cart-in-main-top");
  cart_in_main_top.id = "cart_in_main_top";

  let cart_in_main_img = document.createElement("img");
  cart_in_main_img.classList.add("cart-in-main-img");
  cart_in_main_img.src = "./images/image-product-1-thumbnail.jpg";

  let cart_in_main_price = document.createElement("div");
  cart_in_main_price.classList.add("cart-in-main-price");

  let cart_in_main_price_name = document.createElement("p");
  cart_in_main_price_name.classList.add("cart-in-main-price-name");
  cart_in_main_price_name.innerText = "Full Limited Edition Sneakers";

  let cart_in_main_price_box = document.createElement("div");
  cart_in_main_price_box.classList.add("cart-in-main-price-box");

  let cart_in_main_price_calc = document.createElement("p");
  cart_in_main_price_calc.classList.add("cart-in-main-price-calc");
  cart_in_main_price_calc.innerText = "$125.00 x " + b;

  let cart_in_main_price_calc_res = document.createElement("P");
  cart_in_main_price_calc_res.classList.add("cart-in-main-price-calc-res");
  cart_in_main_price_calc_res.innerText = "$" + 125 * b + ".00";

  let cart_in_main_delete = document.createElement("img");
  cart_in_main_delete.classList.add("cart-in-main-delete");
  cart_in_main_delete.src = "./images/icon-delete.svg";

  let cart_in_main_btn = document.createElement("div");
  cart_in_main_btn.classList.add("cart-in-main-btn");
  cart_in_main_btn.id = "cart_in_main_btn";
  let cart_in_main_btn_text = document.createElement("p");
  cart_in_main_btn_text.classList.add("cart-in-main-btn-text");
  cart_in_main_btn_text.innerText = "Checkout";

  cart_in_main.id = "1";
  cart_in_main_price_box.appendChild(cart_in_main_price_calc);
  cart_in_main_price_box.appendChild(cart_in_main_price_calc_res);
  cart_in_main_price.appendChild(cart_in_main_price_box);
  cart_in_main_price.appendChild(cart_in_main_price_name);
  cart_in_main_price.appendChild(cart_in_main_price_box);

  cart_in_main_top.appendChild(cart_in_main_img);
  cart_in_main_top.appendChild(cart_in_main_price);
  cart_in_main_top.appendChild(cart_in_main_delete);
  cart_in_main_btn.appendChild(cart_in_main_btn_text);
  cart_in_main.appendChild(cart_in_main_top);
  cart_in_main.appendChild(cart_in_main_btn);
  cart_in.appendChild(cart_in_main);

  cart_in_main_delete.addEventListener("click", (event) => {
    cart_in_main.removeChild(cart_in_main_top);
    cart_in_main.removeChild(cart_in_main_btn);
    cart_in_main.appendChild(cart_in_main_text);
    cart_number_div.classList.remove("cart-number-div");
    cart_number_div.classList.add("cart-number-passive");
    cart_in_main.id = "0";
    return (b = 0);
  });
}

top_panel_profile.appendChild(cart_in);

let prev_back_mobile = document.getElementById("prev-back-mobile");
let prev_mobile_img = document.getElementById("prev-mobile");
let next_mobile_img = document.getElementById("next-mobile-img");
let next_back_mobile = document.getElementById("next-back-mobile");

cart_img.addEventListener("click", (event) => {
  if (cart_in.classList == "cart-in-passive") {
    cart_in.classList.remove("cart-in-passive");
    cart_in.classList.add("cart-in");
    cart_img.classList.remove("top-panel-profile-cart");
    cart_img.classList.add("top-panel-profile-cart-hover");
  } else {
    cart_in.classList.remove("cart-in");
    cart_in.classList.add("cart-in-passive");
    cart_img.classList.remove("top-panel-profile-cart-hover");
    cart_img.classList.add("top-panel-profile-cart");
  }

  if (cart_in.classList == "cart-in") {
    prev_mobile_img.classList.remove("prev-mobile");
    prev_mobile_img.classList.add("prev-mobile-passive");
  }
  if (cart_in.classList == "cart-in-passive") {
    prev_mobile_img.classList.remove("prev-mobile-passive");
    prev_mobile_img.classList.add("prev-mobile-img");
  }
  if (cart_in.classList == "cart-in") {
    prev_back_mobile.classList.remove("prev-mobile-back");
    prev_back_mobile.classList.add("prev-mobile-passive");
  }
  if (cart_in.classList == "cart-in-passive") {
    prev_back_mobile.classList.remove("prev-mobile-passive");
    prev_back_mobile.classList.add("prev-mobile-back");
  }

  if (cart_in.classList == "cart-in") {
    next_mobile_img.classList.remove("prev-mobile");
    next_mobile_img.classList.add("prev-mobile-passive");
  }
  if (cart_in.classList == "cart-in-passive") {
    next_mobile_img.classList.remove("prev-mobile-passive");
    next_mobile_img.classList.add("next-mobile-img");
  }
  if (cart_in.classList == "cart-in") {
    next_back_mobile.classList.remove("next-mobile-back");
    next_back_mobile.classList.add("prev-mobile-passive");
  }
  if (cart_in.classList == "cart-in-passive") {
    next_back_mobile.classList.remove("prev-mobile-passive");
    next_back_mobile.classList.add("next-mobile-back");
  }
});

let cart_img_box = document.getElementById("cart_img_box");
let addcart_button = document.getElementById("addcart-button");

let cart_number_div = document.createElement("div");
cart_number_div.classList.add("cart-number-div-passive");
let cart_number = document.createElement("p");
cart_number.classList.add("cart-number");

cart_number_div.appendChild(cart_number);
cart_img_box.appendChild(cart_number_div);

addcart_button.addEventListener("click", (event) => {
  if (cart_in_main.id == "1") {
    let delete_top = document.getElementById("cart_in_main_top");
    cart_in_main.removeChild(delete_top);
    let delete_btn = document.getElementById("cart_in_main_btn");
    cart_in_main.removeChild(delete_btn);
  }
  cart_number.innerText = b + a;
  b = b + a;
  if (b > 0) {
    cart_number_div.classList.remove("cart-number-div-passive");
    cart_number_div.classList.add("cart-number-div");
    if (cart_in_main.firstChild == cart_in_main_text) {
      cart_in_main.removeChild(cart_in_main_text);
    }
    createMain();
  }

  return b;
});

let prev_btn_mob = document.getElementById("prev-btn-mob");
let img_mob = document.getElementById("img-mob");
let next_btn_mob = document.getElementById("next-btn-mob");

let l = 1;

prev_btn_mob.addEventListener("click", (event) => {
  if (l > 1) {
    l -= 1;
    img_mob.src = `./images/image-product-${l}.jpg`;
  }
});

next_btn_mob.addEventListener("click", (event) => {
  if (l < 4) {
    l += 1;
    img_mob.src = `./images/image-product-${l}.jpg`;
  }
});
