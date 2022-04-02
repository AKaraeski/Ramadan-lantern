let container = document.getElementById('container');
let cone = document.getElementById('cone');
let icons = document.querySelectorAll('.icons');

for (let ico = 0; ico < icons.length; ico++) {
    icons[ico].innerHTML = `
        <i class="fas fa-moon"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-solid fa-sun"></i>
        <i class="fa-regular fa-moon"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-sun"></i>
    `;
}

const units = [];

for(i = 0; i < 55; i++) {
    units[i] = document.createElement('div');
    units[i].classList.add('unit', 'pos-center');
    units[i].style.cssText = `
        transform: rotateY(${i * (360 / 55)}deg) translate3D(-50%, -50%, 50px);
        animation-delay: ${i * 0.1}s;
        `;
    cone.appendChild(units[i]);
}

function set3D(parent) {
    parentWidth = document.querySelector(`.${parent}`).clientWidth;
    let front = document.querySelector(`.${parent} .side.front`);
    let left = document.querySelector(`.${parent} .side.left`);
    let back = document.querySelector(`.${parent} .side.back`);
    let right = document.querySelector(`.${parent} .side.right`);
    
    front.style.transform = `translateZ(${parentWidth * 0.5}px)`;
    left.style.transform = `rotateY(90deg) translateZ(${parentWidth * 0.5}px)`;
    back.style.transform = `rotateY(180deg) translateZ(${parentWidth * 0.5}px)`;
    right.style.transform = `rotateY(270deg) translateZ(${parentWidth * 0.5}px)`;

}

set3D('cone-cube');
set3D('middle');
set3D('kara');
set3D('end-cube');
