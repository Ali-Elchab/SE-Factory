let menuButton = document.querySelector("#hamburger-menu");
let menu = document.querySelector(".menu-container");
let exitMenu = document.querySelector("#exit-menu");
let menuLinks = document.querySelectorAll(".link-menu-item");

menuButton.addEventListener("click", () => {
  menu.style.cssText = "display:flex;";
});

exitMenu.addEventListener("click", () => {
  menu.style.cssText = "display:none;";
  console.log("Hello");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.cssText = "display:none;";
  });
});
