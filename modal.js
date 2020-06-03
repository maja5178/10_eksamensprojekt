document.addEventListener("DOMContentLoaded", modalShow);

function modalShow() {
    console.log("modalShow");

    document.querySelector(".button_bestil").addEventListener("click", buttonClick);
}

function buttonClick() {
    console.log("buttonClick");

    document.querySelector('.bestil_modal').classList.remove("no_show");

    document.querySelector(".btn_close").addEventListener("click", closeModal);

}

function closeModal() {
    console.log("closeModal");

    document.querySelector('.bestil_modal').classList.add("no_show");
}
