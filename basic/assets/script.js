let section2Link = document.querySelectorAll(".section2Div > a");
let section2VideoLink = document.querySelector(".section2DivVideo > a");
let section2h1 = document.querySelectorAll(".section2DivTexte > h1");
let section2cadre = document.querySelectorAll(".section2cadre");

const test3 = (evenementHover, nb) => {
  evenementHover.preventDefault();
  evenementHover.stopPropagation();

  section2h1[nb].setAttribute("style", "text-decoration: underline;");
  if (nb != 2) {
    section2cadre[nb].setAttribute("style", "transform: scale(1);");
  }
};

const test4 = (evenementHover, nb) => {
  evenementHover.preventDefault();
  evenementHover.stopPropagation();

  section2h1[nb].setAttribute("style", "text-decoration: none;");
  if (nb != 2) {
    section2cadre[nb].setAttribute("style", "transform: scale(1.09);");
  }
};

section2Link[0].addEventListener("mouseover", (evenementHover) =>
  test3(evenementHover, 0)
);
section2Link[1].addEventListener("mouseover", (evenementHover) =>
  test3(evenementHover, 1)
);
section2VideoLink.addEventListener("mouseover", (evenementHover) =>
  test3(evenementHover, 2)
);
section2Link[0].addEventListener("mouseout", (evenementHover) =>
  test4(evenementHover, 0)
);
section2Link[1].addEventListener("mouseout", (evenementHover) =>
  test4(evenementHover, 1)
);
section2VideoLink.addEventListener("mouseout", (evenementHover) =>
  test4(evenementHover, 2)
);
