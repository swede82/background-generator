const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const h1 = document.querySelector('h1');

color1.addEventListener('input', changeBackGround);
color2.addEventListener('input', changeBackGround);
color3.addEventListener('input', changeTextColor);

function changeBackGround() {
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function changeTextColor() {
    h1.style.color = color3.value;
}