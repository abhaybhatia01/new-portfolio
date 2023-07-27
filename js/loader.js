window.addEventListener("load", function finishPreload() {
    //hiding the loader
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    //stoping the  bounce loading animation
    const bounce = document.querySelectorAll(".spinner div");
    bounce.forEach((bubble) => {
        bubble.classList.remove("loading-active");
    });
});
// document
//     .querySelector(".img")
//     .addEventListener("click", function preload() {
//         //bringing back the loader
//         const loader = document.querySelector(".loader");
//         loader.classList.remove("loader-hidden");
//         //adding bounce loading animation
//         const bounce = document.querySelectorAll(".spinner div");
//         bounce.forEach((bubble) => {
//             bubble.classList.add("loading-active");
//         });
//     });