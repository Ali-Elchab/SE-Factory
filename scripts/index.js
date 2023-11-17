let menuButton = document.querySelector("#hamburger-menu");
let menu = document.querySelector(".menu-container");
let exitMenu = document.querySelector("#exit-menu");
let menuLinks = document.querySelectorAll(".link-menu-item");
let faqs = document.querySelectorAll(".faq-dropdown");
const sentenceElement = document.querySelector(".transition-h1");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tabs-links button:nth-child(1)").click();

  const sentences = ["SOFTWARE DEVELOPER?", "UI/UX DESIGNER?", "DATA ENGINEER?"];
  let currentIndex = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 16;
  const speed = 100;

  const updateSentence = () => {
    sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
  };

  const handleAnimation = () => {
    if (forwards) {
      if (offset >= sentences[currentIndex].length) {
        if (++skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else if (offset === 0) {
      forwards = true;
      currentIndex = (currentIndex + 1) % sentences.length;
    }

    if (skipCount === 0) {
      forwards ? offset++ : offset--;
    }

    updateSentence();
  };

  setInterval(handleAnimation, speed);
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

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector(".faq-answer");
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
