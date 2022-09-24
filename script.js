const toggle = document.getElementById("toggleDark");
const menu = document.getElementById("toggleMenu");
const body = document.querySelector("body");
const list = document.querySelector("ul");

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  document.body.classList.toggle("dark-theme");
  document.body.style.transition("1s");
});

menu.addEventListener("click", () => {
  list.classList.toggle("active");
});
