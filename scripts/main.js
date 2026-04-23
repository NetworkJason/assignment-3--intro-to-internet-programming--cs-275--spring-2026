let nav = document.querySelector("nav");
let menuButton = document.querySelectorAll("#js-triggers a")[0];
let modalButton = document.querySelectorAll("#js-triggers a")[1];
let modal = document.querySelector(".modal-panel");
let modalBox = document.querySelector(".modal-content-pane");

menuButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
});

modalButton.addEventListener("click", (event) => {
    event.preventDefault();
    nav.style.display = "none";
    modal.style.display = "block";

});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

modalBox.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});