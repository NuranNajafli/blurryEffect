const text = document.querySelector('.text');
const bg = document.querySelector('.background');

let a = 0;
let int = setInterval(blurring, 30);

function blurring(){
    a++;
    if(a > 99){
        clearInterval(int);
    }
    text.innerHTML = a + '%';
    text.style.opacity = scale(a, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(a, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};