let body = document.querySelector("body");
let link = document.querySelectorAll("a");
let section2Link = document.querySelectorAll(".section2Div > a");
let section2VideoLink = document.querySelector(".section2DivVideo > a");
let section2h1 = document.querySelectorAll(".section2DivTexte > h1");
let section2cadre = document.querySelectorAll(".section2cadre");

let section7Link = document.querySelectorAll(".section7Link");
let section7h2 = document.querySelectorAll(".section7DivDiv > h2");
let section7img = document.querySelectorAll(".section7DivElement img");

const changementStyleMouseOver = (evenementHover, nb, section2or7) => {
  evenementHover.preventDefault();
  evenementHover.stopPropagation();

  if (section2or7 == true) {
    section2h1[nb].setAttribute("style", "text-decoration: underline;");
    if (nb != 2) {
      section2cadre[nb].setAttribute("style", "transform: scale(1);");
    }
  } else {
    section7h2[nb].setAttribute("style", "text-decoration: underline;");
    if (nb != 2) {
      section7img[nb].setAttribute("style", "transform: scale(1);");
    }
  }
};

const changementStyleMouseOut = (evenementHover, nb, section2or7) => {
  evenementHover.preventDefault();
  evenementHover.stopPropagation();

  if (section2or7 == true) {
    section2h1[nb].setAttribute("style", "text-decoration: none;");
    if (nb != 2) {
      section2cadre[nb].setAttribute("style", "transform: scale(1.09);");
    }
  } else {
    section7h2[nb].setAttribute("style", "text-decoration: none;");
    if (nb != 2) {
      section7img[nb].setAttribute("style", "transform: scale(1.09);");
    }
  }
};

section2Link[0].addEventListener("mouseover", (evenementHover) =>
  changementStyleMouseOver(evenementHover, 0, true)
);
section2Link[1].addEventListener("mouseover", (evenementHover) =>
  changementStyleMouseOver(evenementHover, 1, true)
);
section2VideoLink.addEventListener("mouseover", (evenementHover) =>
  changementStyleMouseOver(evenementHover, 2, true)
);
section2Link[0].addEventListener("mouseout", (evenementHover) =>
  changementStyleMouseOut(evenementHover, 0, true)
);
section2Link[1].addEventListener("mouseout", (evenementHover) =>
  changementStyleMouseOut(evenementHover, 1, true)
);
section2VideoLink.addEventListener("mouseout", (evenementHover) =>
  changementStyleMouseOut(evenementHover, 2, true)
);
console.log(section2Link);
for (let index = 0; index <= 6; index++) {
  section7Link[index].addEventListener("mouseover", (evenementHover) =>
    changementStyleMouseOver(evenementHover, index, false)
  );
  section7Link[index].addEventListener("mouseout", (evenementHover) =>
    changementStyleMouseOut(evenementHover, index, false)
  );
}

const changementSyleScrollPosition = () => {
  let scrollPosition = window.scrollY;
  
  if (scrollPosition > 3000 && scrollPosition < 4000) {
    body.setAttribute("class", "switchStyle");
  } else {
    body.setAttribute("class", "");
  }
}
window.addEventListener("scroll", changementSyleScrollPosition);
