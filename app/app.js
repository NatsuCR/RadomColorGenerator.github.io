const btn = document.getElementById('id_btn');
const spam = document.getElementById('id_color');
const title = document.getElementById('title');
const body = document.body;
const container_box = document.getElementById('container_box_style')

btn.addEventListener('click', () => {
    const RandomColor = getRandomColor();
    spam.innerText = RandomColor;
    title.innerText = `Code of colors: ${RandomColor}`;
    container_box.style.backgroundColor = RandomColor;
    container_box.classList.remove('container_box_hidden')
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

