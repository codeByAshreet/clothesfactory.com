let lll = document.getElementById("mainimage");
console.log(lll);
let product = document.getElementsByClassName("product");
let proimages = document.getElementsByClassName("product-images");
let rrr = document.getElementsByClassName("inner-row-image");

if (product) {
  product[0].addEventListener("click", () => {
    window.location.href = "../prodet/p1.html";
  });

  product[1].addEventListener("click", () => {
    window.location.href = "../prodet/p2.html";
  });
  product[2].addEventListener("click", () => {
    window.location.href = "../prodet/p3.html";
  });
  product[3].addEventListener("click", () => {
    window.location.href = "../prodet/p4.html";
  });
  product[4].addEventListener("click", () => {
    window.location.href = "../prodet/p5.html";
  });
  product[5].addEventListener("click", () => {
    window.location.href = "../prodet/p6.html";
  });
  product[6].addEventListener("click", () => {
    window.location.href = "../prodet/p7.html";
  });
  product[7].addEventListener("click", () => {
    window.location.href = "../prodet/p8.html";
  });
  product[8].addEventListener("click", () => {
    window.location.href = "../prodet/p9.html";
  });
  product[9].addEventListener("click", () => {
    window.location.href = "../prodet/p10.html";
  });
  product[10].addEventListener("click", () => {
    window.location.href = "../prodet/p11.html";
  });
  product[11].addEventListener("click", () => {
    window.location.href = "../prodet/p12.html";
  });
  product[12].addEventListener("click", () => {
    window.location.href = "../prodet/p13.html";
  });
  product[13].addEventListener("click", () => {
    window.location.href = "../prodet/p14.html";
  });
  product[14].addEventListener("click", () => {
    window.location.href = "../prodet/p15.html";
  });
  product[15].addEventListener("click", () => {
    window.location.href = "../prodet/p16.html";
  });
} else {
  console.log("PRODUCT NOT FOUND");
}
