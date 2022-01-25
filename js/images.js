let main_image = document.getElementById("main-image");
let little_image1 = document.getElementById("little-image-back-hover1");
let little_image2 = document.getElementById("little-image-back-hover2");
let little_image3 = document.getElementById("little-image-back-hover3");
let little_image4 = document.getElementById("little-image-back-hover4");

little_image1.classList.remove("little-image-back");
little_image1.classList.add("little-image-back-active");

little_image1.addEventListener("click", (event) => {
  if (little_image2.classList == "little-image-back-active") {
    little_image2.classList.remove("little-image-back-active");
    little_image2.classList.add("little-image-back");
  }
  if (little_image3.classList == "little-image-back-active") {
    little_image3.classList.remove("little-image-back-active");
    little_image3.classList.add("little-image-back");
  }
  if (little_image4.classList == "little-image-back-active") {
    little_image4.classList.remove("little-image-back-active");
    little_image4.classList.add("little-image-back");
  }

  main_image.src = "./images/image-product-1.jpg";
  little_image1.classList.remove("little-image-back");
  little_image1.classList.add("little-image-back-active");
});

little_image2.addEventListener("click", (event) => {
  if (little_image1.classList == "little-image-back-active") {
    little_image1.classList.remove("little-image-back-active");
    little_image1.classList.add("little-image-back");
  }
  if (little_image3.classList == "little-image-back-active") {
    little_image3.classList.remove("little-image-back-active");
    little_image3.classList.add("little-image-back");
  }
  if (little_image4.classList == "little-image-back-active") {
    little_image4.classList.remove("little-image-back-active");
    little_image4.classList.add("little-image-back");
  }

  main_image.src = "./images/image-product-2.jpg";
  little_image2.classList.remove("little-image-back");
  little_image2.classList.add("little-image-back-active");
});

little_image3.addEventListener("click", (event) => {
  if (little_image1.classList == "little-image-back-active") {
    little_image1.classList.remove("little-image-back-active");
    little_image1.classList.add("little-image-back");
  }
  if (little_image2.classList == "little-image-back-active") {
    little_image2.classList.remove("little-image-back-active");
    little_image2.classList.add("little-image-back");
  }
  if (little_image4.classList == "little-image-back-active") {
    little_image4.classList.remove("little-image-back-active");
    little_image4.classList.add("little-image-back");
  }
  main_image.src = "./images/image-product-3.jpg";
  little_image3.classList.remove("little-image-back");
  little_image3.classList.add("little-image-back-active");
});

little_image4.addEventListener("click", (event) => {
  if (little_image1.classList == "little-image-back-active") {
    little_image1.classList.remove("little-image-back-active");
    little_image1.classList.add("little-image-back");
  }
  if (little_image3.classList == "little-image-back-active") {
    little_image3.classList.remove("little-image-back-active");
    little_image3.classList.add("little-image-back");
  }
  if (little_image2.classList == "little-image-back-active") {
    little_image2.classList.remove("little-image-back-active");
    little_image2.classList.add("little-image-back");
  }

  main_image.src = "./images/image-product-4.jpg";
  little_image4.classList.remove("little-image-back");
  little_image4.classList.add("little-image-back-active");
});

let img_menu = document.getElementById("img_menu");
let close_img = document.getElementById("close_img");

let j = 1;

main_image.addEventListener("click", (event) => {
  img_menu.classList.remove("img-menu");
  img_menu.classList.add("img-menu-active");
});

close_img.addEventListener("click", (event) => {
  img_menu.classList.remove("img-menu-active");
  img_menu.classList.add("img-menu");
  j = 1;
  main_image_in.src = `./images/image-product-${j}.jpg`;
  little_image1_in.classList.remove("little-image-back-in");
  little_image1_in.classList.add("little-image-back-active-in");
  little_image2_in.classList.remove("little-image-back-active-in");
  little_image2_in.classList.add("little-image-back-in");
  little_image3_in.classList.remove("little-image-back-active-in");
  little_image3_in.classList.add("little-image-back-in");
  little_image4_in.classList.remove("little-image-back-active-in");
  little_image4_in.classList.add("little-image-back-in");
});

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let main_image_in = document.getElementById("main_image_in");
let little_image1_in = document.getElementById("little-image-back-hover1-in");
let little_image2_in = document.getElementById("little-image-back-hover2-in");
let little_image3_in = document.getElementById("little-image-back-hover3-in");
let little_image4_in = document.getElementById("little-image-back-hover4-in");

next.addEventListener("click", (event) => {
  if (j < 4) {
    j += 1;
    main_image_in.src = `./images/image-product-${j}.jpg`;
  }
  if (j == 1) {
    little_image2_in.classList.remove("little-image-back-active-in");
    little_image2_in.classList.add("little-image-back-in");
    little_image3_in.classList.remove("little-image-back-active-in");
    little_image3_in.classList.add("little-image-back-in");
    little_image4_in.classList.remove("little-image-back-active-in");
    little_image4_in.classList.add("little-image-back-in");
    little_image1_in.classList.remove("little-image-back-in");
    little_image1_in.classList.add("little-image-back-active-in");
  }

  if (j == 2) {
    little_image2_in.classList.remove("little-image-back-in");
    little_image2_in.classList.add("little-image-back-active-in");
    little_image1_in.classList.remove("little-image-back-active-in");
    little_image1_in.classList.add("little-image-back-in");
    little_image3_in.classList.remove("little-image-back-active-in");
    little_image3_in.classList.add("little-image-back-in");
    little_image4_in.classList.remove("little-image-back-active-in");
    little_image4_in.classList.add("little-image-back-in");
  }

  if (j == 3) {
    little_image3_in.classList.remove("little-image-back-in");
    little_image3_in.classList.add("little-image-back-active-in");
    little_image2_in.classList.remove("little-image-back-active-in");
    little_image2_in.classList.add("little-image-back-in");
    little_image1_in.classList.remove("little-image-back-active-in");
    little_image1_in.classList.add("little-image-back-in");
    little_image4_in.classList.remove("little-image-back-active-in");
    little_image4_in.classList.add("little-image-back-in");
  }

  if (j == 4) {
    little_image4_in.classList.remove("little-image-back-in");
    little_image4_in.classList.add("little-image-back-active-in");
    little_image2_in.classList.remove("little-image-back-active-in");
    little_image2_in.classList.add("little-image-back-in");
    little_image3_in.classList.remove("little-image-back-active-in");
    little_image3_in.classList.add("little-image-back-in");
    little_image1_in.classList.remove("little-image-back-active-in");
    little_image1_in.classList.add("little-image-back-in");
  }

  return j;
});

prev.addEventListener("click", (event) => {
  if (j > 1) {
    j -= 1;
    main_image_in.src = `./images/image-product-${j}.jpg`;
  }

  if (j == 1) {
    little_image2_in.classList.remove("little-image-back-active-in");
    little_image2_in.classList.add("little-image-back-in");
    little_image3_in.classList.remove("little-image-back-active-in");
    little_image3_in.classList.add("little-image-back-in");
    little_image4_in.classList.remove("little-image-back-active-in");
    little_image4_in.classList.add("little-image-back-in");
    little_image1_in.classList.remove("little-image-back-in");
    little_image1_in.classList.add("little-image-back-active-in");
  }

  if (j == 2) {
    little_image2_in.classList.remove("little-image-back-in");
    little_image2_in.classList.add("little-image-back-active-in");
    little_image1_in.classList.remove("little-image-back-active-in");
    little_image1_in.classList.add("little-image-back-in");
    little_image3_in.classList.remove("little-image-back-active-in");
    little_image3_in.classList.add("little-image-back-in");
    little_image4_in.classList.remove("little-image-back-active-in");
    little_image4_in.classList.add("little-image-back-in");
  }

  if (j == 3) {
    little_image3_in.classList.remove("little-image-back-in");
    little_image3_in.classList.add("little-image-back-active-in");
    little_image2_in.classList.remove("little-image-back-active-in");
    little_image2_in.classList.add("little-image-back-in");
    little_image1_in.classList.remove("little-image-back-active-in");
    little_image1_in.classList.add("little-image-back-in");
    little_image4_in.classList.remove("little-image-back-active-in");
    little_image4_in.classList.add("little-image-back-in");
  }

  if (j == 4) {
    little_image4_in.classList.remove("little-image-back-in");
    little_image4_in.classList.add("little-image-back-active-in");
    little_image2_in.classList.remove("little-image-back-active-in");
    little_image2_in.classList.add("little-image-back-in");
    little_image3_in.classList.remove("little-image-back-active-in");
    little_image3_in.classList.add("little-image-back-in");
    little_image1_in.classList.remove("little-image-back-active-in");
    little_image1_in.classList.add("little-image-back-in");
  }
  return j;
});

little_image1_in.classList.remove("little-image-back-in");
little_image1_in.classList.add("little-image-back-active-in");
little_image2_in.classList.remove("little-image-back-active-in");
little_image2_in.classList.add("little-image-back-in");
little_image3_in.classList.remove("little-image-back-active-in");
little_image3_in.classList.add("little-image-back-in");
little_image4_in.classList.remove("little-image-back-active-in");
little_image4_in.classList.add("little-image-back-in");
