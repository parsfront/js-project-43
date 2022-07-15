const btn = document.querySelector(".close");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
    btn.classList.toggle("closeBtn");
    nav.classList.toggle("show");
});
