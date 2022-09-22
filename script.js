const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  document.body.classList.toggle("dark-theme");
  document.body.style.transition("1s");
});
