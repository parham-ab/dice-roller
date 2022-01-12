// variables
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
// functions
btn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  img.setAttribute("src", `./img/dice${randomNum}.png`);
});
