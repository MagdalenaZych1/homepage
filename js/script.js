console.log("hello <3");

let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let themeName = document.querySelector(".themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("pink");

    themeName.innerText = bodyElement.classList.contains("pink") ? "biały" : "rożowy";
});