const header  = document.querySelector("header");
const menu    = document.querySelector("header .menu");
const logo    = document.querySelector(".logo");
const button  = document.querySelector("header button");
const body    = document.body;
let value = false;

//codigo para activar la animación del header(barra de navegación)
document.addEventListener("scroll", ()=>{
    if(this.scrollY > 0) {
        header.classList.add("active");
        logo.classList.add("active");
        body.style.setProperty("--color-after", "white")
        menu.style.top = "120px";
        if(this.innerWidth < 1024) {
            header.style.justifyContent = "end";
        }
    }
    else {
        header.classList.remove("active");
        logo.classList.remove("active");
        body.style.setProperty("--color-after", "red");
        menu.style.top = "160px";
        if(this.innerWidth < 768) {
            logo.style.width = "140px";
            header.style.justifyContent = "center"
        }
        else if (this.innerWidth < 1024) {
            header.style.justifyContent = "center"
            logo.style.width = "200px";
        }
    }
});

/*************** button menu ******************/
button.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});