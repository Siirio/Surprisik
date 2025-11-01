const gb = document.getElementById('gb');
const tb = document.getElementById('tb');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

let scale = 1;
const maxScale = 2.3;

gb.addEventListener('click', () => {
    if(scale < maxScale) { 
        scale += 0.3;
        tb.style.transform = `scale(${scale})`;
    } 
});

tb.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});