let header = document.querySelector("#header");

window.onscroll = function () {
  if (scrollY <= 250) {
    header.style.cssText = "top: -100px;";
    nav.classList.remove("menu-show");
  } else {
    header.style.cssText = "top: 0px;";
  }
};

let nav = document.querySelector("header nav");
let bars = document.querySelector("header i");

bars.addEventListener("click", function () {
  if (nav.classList[0] === "menu-show") {
    nav.classList.remove("menu-show");
  } else {
    nav.classList.add("menu-show");
  }
});

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
    const sectionTop = sec.offsetTop - 220;
    if (pageYOffset >= sectionTop) {
      myPosition = sec.getAttribute("id");
    }
    links.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${myPosition}`) {
        a.classList.add("active");
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
