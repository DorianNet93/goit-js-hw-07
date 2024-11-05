const controls = document.querySelector('#controls');
const inputElement = controls.querySelector("input[type='number']");
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


createBtn.style.backgroundColor = `#4E75FF`
createBtn.style.border = 'none';
createBtn.style.padding = '8px';
createBtn.style.borderRadius = '8px';
createBtn.style.color = 'white';


destroyBtn.style.backgroundColor = `#FF4E4E`
destroyBtn.style.border = 'none';
destroyBtn.style.padding = '8px';
destroyBtn.style.borderRadius = '8px';
destroyBtn.style.color = 'white';



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  let boxSize = 30;

  

  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    elements.push(box);
  }
  boxes.append(...elements);
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputElement.value.trim(), 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});

