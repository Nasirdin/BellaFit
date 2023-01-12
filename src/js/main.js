const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__burger-menu");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
