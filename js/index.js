const burgerBtn = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile");

let isOpen = false;

burgerBtn.addEventListener("click", () => {
  if (isOpen) {
    mobileMenu.style.opacity = 0;
    mobileMenu.style.zIndex = -1;
  } else {
    mobileMenu.style.opacity = 1;
    mobileMenu.style.zIndex = 1;
  }

  isOpen = !isOpen;
});
