let menuButton = document.querySelector("#hamburger-menu");
let menu = document.querySelector(".menu-container");
let exitMenu = document.querySelector("#exit-menu");
let menuLinks = document.querySelectorAll(".link-menu-item");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tabs-links button:nth-child(1)").click();
});
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

function showTab(evt, program) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  let currentTab = document.querySelector(`#${program}`);
  let tablinks = document.getElementsByClassName("tablinks");
  let programsSection = document.getElementById("programs");
  let pointer = document.querySelector(`#${program} .fcs-pointer`);
  let toBeConfirmed = document.querySelector(`#${program} .next-course-styled`);

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  currentTab.style.cssText = "display:flex;";
  evt.currentTarget.className += " active";
  console.log(currentTab);
  if (program == "FSW") {
    pointer.style.cssText = "color:#28eea7;";
    programsSection.style.cssText = "background-color:#28eea7;";
    toBeConfirmed.style.cssText = "color:#28eea7;";
  } else if (program == "FCS") {
    pointer.style.cssText = "color: #ffc635;";
    programsSection.style.cssText = "background-color:#ffc635;";
    toBeConfirmed.style.cssText = "color:#ffc635;";
    currentTab.style.cssText = "border-radius:0px 20px 20px 20px;display:flex;";
  } else if (program == "FSD") {
    pointer.style.cssText = "color: #9864da;";
    programsSection.style.cssText = "background-color:#9864da;";
    toBeConfirmed.style.cssText = "color:#9864da;";
  } else if (program == "UIX") {
    pointer.style.cssText = "color: #fb508e;";
    programsSection.style.cssText = "background-color:#fb508e;";
    toBeConfirmed.style.cssText = "color:#fb508e;";
  }
}
