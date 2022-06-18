let body = document.querySelector("body");

let section2Link = document.querySelectorAll(".section2Div > a");
let section2VideoLink = document.querySelector(".section2DivVideo > a");
let section2h1 = document.querySelectorAll(".section2DivTexte > h1");
let section2cadre = document.querySelectorAll(".section2cadre");

let section5 = document.querySelector(".section5");
let cursor = document.querySelector(".cursor");

let section7Link = document.querySelectorAll(".section7Link");
let section7h2 = document.querySelectorAll(".section7DivDiv > h2");
let section7img = document.querySelectorAll(".section7DivElement img");

const changementStyleMouseOver = (evenementHover, nb, section2or7) => {
  evenementHover.preventDefault();
  evenementHover.stopPropagation();

  if (section2or7 === true) {
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

  if (section2or7 === true) {
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

  if (scrollPosition > 2800 && scrollPosition < 3600) {
    body.setAttribute("class", "switchStyleBody");
    section5.setAttribute("class", "section5 switchStyleSection5");
    for (let index = 0; index < section7h2.length; index++) {
      section7h2[index].setAttribute("class", "switchStyleH2");
    }
  } else {
    body.setAttribute("class", "");
    section5.setAttribute("class", "section5");
    for (let index = 0; index < section7h2.length; index++) {
      section7h2[index].setAttribute("class", "");
    }
  }
};
window.addEventListener("scroll", changementSyleScrollPosition);

const styleCursorSection5 = (eventCursor) => {
  cursor.setAttribute(
    "style",
    "display:block;top:" +
      (eventCursor.pageY - 2594) +
      "px;left:" +
      (eventCursor.pageX - 60) +
      "px;"
  );
};
section5.addEventListener("mousemove", styleCursorSection5);
