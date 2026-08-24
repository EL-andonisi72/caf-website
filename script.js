let btnOpenMenu = document.getElementById("menu-open-btn");
let btnClsMenu = document.getElementById("menu-cls-btn");

// ?open nav list
btnOpenMenu.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});

// ?cls nav list
btnClsMenu.addEventListener("click", () => btnOpenMenu.click());