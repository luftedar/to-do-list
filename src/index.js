import './style.css';
import updateCheckBox from './interactive.js';

let tasks = [
  {
    description: '0000Here goes the description',
    complete: false,
    index: 0,
  },
  {
    description: '1111Here goes the description',
    complete: false,
    index: 1,
  },
  {
    description: '2222Here goes the description',
    complete: false,
    index: 2,
  },
];

export default function setLocal(list) {
  localStorage.setItem('localList', JSON.stringify(list));
}

tasks = localStorage.getItem('localList') !== null ? JSON.parse(localStorage.getItem('localList')) : tasks;

const showTasks = () => {
  const showDiv = document.querySelector('#list-wrapper');

  const newUlist = document.createElement('ul');
  newUlist.classList.add('list');

  const header = document.createElement('div');
  header.classList.add('header-wrapper');
  showDiv.appendChild(header);

  const listHeader = document.createElement('p');
  listHeader.textContent = "Today's To Do";
  const listHeaderIcon = document.createElement('span');
  listHeaderIcon.innerHTML = '<i class="fas fa-recycle"></i>';
  listHeader.classList.add('header');
  header.appendChild(listHeader);
  header.appendChild(listHeaderIcon);
  const addInput = document.createElement('input');
  addInput.placeholder = 'Add to your list...';
  addInput.classList.add('input');
  showDiv.appendChild(addInput);

  showDiv.appendChild(newUlist);
  tasks.forEach((item) => {
    for (let i = 0; i < tasks.length; i += 1) {
      if (item.index === i) {
        const newListItem = document.createElement('li');
        newListItem.classList.add('list-item');
        newListItem.id = item.index;
        newUlist.appendChild(newListItem);

        const leftSide = document.createElement('div');
        leftSide.classList.add('left-side');
        newListItem.appendChild(leftSide);
        const checkBox = document.createElement('INPUT');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('checkbox');
        checkBox.checked = tasks[i].complete;
        leftSide.appendChild(checkBox);
        const p = document.createElement('p');
        p.textContent = tasks[i].description;
        leftSide.appendChild(p);

        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        newListItem.appendChild(rightSide);
        const dragIcon = document.createElement('span');
        dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
        rightSide.appendChild(dragIcon);
      }
    }
  });
  const clearAll = document.createElement('p');
  clearAll.textContent = 'Clear all completed';
  clearAll.classList.add('remove-all');
  showDiv.appendChild(clearAll);
};

window.onload = showTasks();

const box = document.querySelectorAll('.checkbox');
const ul = document.querySelector('.list');
const listElement = ul.getElementsByTagName('li');

for (let i = 0; i < listElement.length; i += 1) {
  box[i].addEventListener('change', (e) => {
    updateCheckBox(e.target, tasks, e.target.parentElement.parentElement.id);
    console.log(tasks);
  });
}