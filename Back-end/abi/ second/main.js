// DOKUMEN TITLE

// console.log(document.title);

// merubah
document.title = "habhab";
console.log(document.title);

// DOKUMENT BODY

const body = document.body;

// untuk mengisikan body append, element
// body.append("HELLO WORD");
// const h1 = document.createElement("h1");
// h1.textContent = "anjay bro";

// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = "habiburrohman";

// const namaKamu = document.createElement("b");
// namaKamu.innerText = "abiiii";

// const h1 = document.createElement("h1");
// h1.textContent = "<marquee> anjay bro </marquee>";

// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = "<marquee> habiburrohman </marquee>";

// const namaKamu = document.createElement("b");
// namaKamu.innerText = "<marquee> abiiii </marquee>";

// body.append(h1);
// body.append(namaSaya);
// body.append(namaKamu);

// DATA SELECTOR
const btn1 = document.getElementById("btn1");
const btn3 = document.getElementById("btn3");
const btn2 = document.querySelector(".btn2");

const defaultText = "klik saya dong";
const defaultWarna = (btn3.textContent = defaultText);
// console.log(btn2);
// STYLING

btn3.style.border = "none";
btn3.style.padding = "8px";
btn3.style.fontSize = "24px";
btn3.style.background = "tomato";

btn2.style.border = "none";
btn2.style.padding = "8px";
btn2.style.fontSize = "24px";
btn2.style.background = "tomato";

// Event

// function gantiWarna() {
//   console.log("aman");
//   alert("aman");
// }

function clickButton() {
  btn3.style.background = "aqua";
  const newText = document.createElement("p");
  newText.textContent = "HALLO APA KABAR";
  body.append(newText);
}

function ubahText() {
  btn3.textContent = "apaan dah lu";
}

function oriText() {
  btn3.style.background = "tomato";
  btn3.textContent = defaultText;
}

function clickButton1() {
  btn2.style.background = "aqua";
  const newText = document.createElement("p");
  newText.textContent = "HALLO SAYANG";
  body.append(newText);
}

function ubahText1() {
  btn2.textContent = "apaan dah lu";
}

function oriText1() {
  btn2.style.background = "tomato";
  btn2.textContent = defaultText;
}
