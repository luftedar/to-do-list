import './style.css';

const tasks = [
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
        showDiv.appendChild(newListItem);

        const leftSide = document.createElement('div');
        leftSide.classList.add('left-side');
        newListItem.appendChild(leftSide);
        const checkBox = document.createElement('INPUT');
        checkBox.setAttribute('type', 'checkbox');
        leftSide.appendChild(checkBox);
        const p = document.createElement('p');
        p.textContent = tasks[i].description;
        leftSide.appendChild(p);

        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        newListItem.appendChild(rightSide);
        const dragIcon = document.createElement('span');
        dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
        dragIcon.style.alignSelf = 'flex-end';
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