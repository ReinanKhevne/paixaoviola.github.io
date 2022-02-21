const imgs = document.getElementById('img');
const img = document.querySelectorall('#img img');

let x = 0;

function carrossel() {
    x++;

    if(x > img.length - 1) {
        x = 0;
    }

    imgs.style.transform = `translateX(${-x * 500}px)`;
}

setInterval(carrossel, 1800)