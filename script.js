
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

document.getElementById("mobile-menu").addEventListener("click", () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("active");
});
