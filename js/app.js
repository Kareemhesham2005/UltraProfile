let header = document.querySelector("#header");

let nav = document.querySelector("header nav");
let menu = document.querySelector("header .menu-btn");
let menuOpen = false;

menu.addEventListener("click", function () {
  if (nav.classList[0] === "menu-show") {
    nav.classList.remove("menu-show");
  } else {
    nav.classList.add("menu-show");
  }
  if (!menuOpen) {
    menu.classList.add("open");
    menuOpen = true;
  } else {
    menu.classList.remove("open");
    menuOpen = false;
  }
});

window.onscroll = function () {
  if (scrollY <= 250) {
    header.style.cssText = "top: -100px;";
    nav.classList.remove("menu-show");
    menu.classList.remove("open");
    menuOpen = false;
  } else {
    header.style.cssText = "top: 0px;";
  }
};

let btn = document.querySelector("section button");

window.addEventListener("scroll", function () {
  if (scrollY >= 700) {
    btn.classList.add("btn-show");
  } else {
    btn.classList.remove("btn-show");
  }
});

btn.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("header nav ul li a");

let myPosition = "";
window.addEventListener("scroll", function () {
  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop - 300;
    if (pageYOffset >= sectionTop) {
      myPosition = sec.getAttribute("id");
      let bars = document.querySelectorAll(".prog span");
      if (myPosition === "resume") {
        bars.forEach((b) => {
          if (bars[0] == b) {
            b.setAttribute("data-skill", "90%");
            b.style.cssText = "transform: translateX(0); width: 90%;";
          } else if (bars[1] == b) {
            b.setAttribute("data-skill", "80%");
            b.style.cssText = "transform: translateX(0); width: 80%;";
          } else if (bars[2] == b) {
            b.setAttribute("data-skill", "60%");
            b.style.cssText = "transform: translateX(0); width: 60%;";
          }
        });
      }
    }
    links.forEach((a) => {
      if (a.getAttribute("href") === `#${myPosition}`) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  });
});

let myLi = document.querySelectorAll("#portfolio ul li");
let imgs = Array.from(document.querySelectorAll(".all"));

myLi.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  myLi.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.getAttribute("data-filter")).forEach((el) => {
    el.style.display = "block";
  });
}
