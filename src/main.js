const NAV_MENU = document.querySelector(".nav-menu");

function setNavMenuOffsetTop() {
  const NAV_BAR = document.querySelector("nav");
  NAV_MENU.style.top = NAV_BAR.clientHeight + "px";
}

setNavMenuOffsetTop();
