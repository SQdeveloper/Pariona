const header  = document.querySelector("header");
const enlaces = document.querySelectorAll("header ul a");
const logo    = document.querySelector(".logo");
const body    = document.body;

document.addEventListener("scroll", ()=>{
    if(this.scrollY > 0) {
        header.classList.add("active");
        logo.classList.add("active");
        body.style.setProperty("--color-after", "white")
    }
    else {
        header.classList.remove("active");
        logo.classList.remove("active");
        body.style.setProperty("--color-after", "red")
    }
});