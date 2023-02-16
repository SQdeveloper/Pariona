const buttons    = document.querySelectorAll(".cont-buttons button");
const caja       = document.querySelectorAll(".slider .caja");
const sliderMove = document.querySelector(".sliderMove");
let   number     = 0;

/********* buttons cambien de color de fondo */
buttons.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        buttons.forEach(i => {
            i.style.backgroundColor = "white";
            i.style.color = "black";
        })
        item.style.backgroundColor = "var(--color-red)";
        item.style.color = "white";
        // Movemos el sliderMove
        move(index);
        // style div
        caja.forEach(box=>{
            box.style.opacity = "0";
        });
        caja[index].style.opacity = "1";
    })
});

function move(i) {
    sliderMove.style.transform = `translateX(-${100/3 * i}%)`;
}