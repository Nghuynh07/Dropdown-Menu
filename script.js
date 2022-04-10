const navItems = document.querySelectorAll(".navbar-item");
const dropdownBG = document.querySelector(".dropdown-bg");
// const dropDown = document.querySelector(".dropdown");

navItems.forEach((item) => {
  item.onmouseover = () => {
    dropdownBG.style.opacity = "1";
    dropdownBG.style.visibility = "visible";
    dropdownBG.style.width = getComputedStyle(item.lastElementChild).width;
    dropdownBG.style.height = getComputedStyle(item.lastElementChild).height;

    dropdownBG.style.top = `${item.lastElementChild.offsetTop}px`;
    dropdownBG.style.left = `${item.lastElementChild.offsetLeft}px`;
  };

  item.onmouseout = () => {
    dropdownBG.style.opacity = "0";
    dropdownBG.style.visibility = "hidden";
  };
});
