window.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".nav-burger");
    const btnBurgerBtnActive1 = document.querySelector(".b1");
    const btnBurgerBtnActive2 = document.querySelector(".b2");
    const btnBurgerBtnActive3 = document.querySelector(".b3");
    const burgerMenuBtnItem = document.querySelectorAll(
        ".header__text-item-link"
    );

    function toggleBurger() {
        burgerMenu.classList.toggle("hide-burger");

        btnBurgerBtnActive1.classList.toggle("b1--active");
        btnBurgerBtnActive2.classList.toggle("b2--active");
        btnBurgerBtnActive3.classList.toggle("b3--active");
    }

    burgerBtn.addEventListener("click", () => {
        toggleBurger();
    });

    burgerMenuBtnItem.forEach((item) => {
        item.addEventListener("click", () => {
            toggleBurger();
        });
    });
});
