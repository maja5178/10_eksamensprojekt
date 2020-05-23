window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");

    document.querySelector(".burger").addEventListener("click", burgerClick);
}

function burgerClick() {
    console.log("burgerClick");

    document.querySelector('.nav_right').classList.toggle("hide");
    document.querySelector('.background').classList.toggle("hide");


}
