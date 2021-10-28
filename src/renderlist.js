import { taskList } from './addremove';

const showDiv = document.querySelector('#list-wrapper');
const newUlist = document.createElement('ul');
newUlist.classList.add('list');
newUlist.id = 'list';
const newListItem = document.createElement('li');
newListItem.classList.add('list-item');

export function renderBasic() {
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
  addInput.type = 'text';
  addInput.name = 'NewItem';
  addInput.id = 'input';
  showDiv.appendChild(addInput);
  showDiv.appendChild(newUlist);
}

export function renderBasicDelete() {
  const clearAll = document.createElement('p');
  clearAll.textContent = 'Clear all completed';
  clearAll.classList.add('remove-all');
  showDiv.appendChild(clearAll);
}

export function render(taskArray) {
  taskArray.forEach((item) => {
    for (let i = 0; i < taskArray.length; i += 1) {
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
        checkBox.checked = taskArray[i].complete;
        leftSide.appendChild(checkBox);
        const p = document.createElement('p');
        p.contentEditable = 'true';
        p.classList.add('editable');
        p.textContent = taskArray[i].description;
        leftSide.appendChild(p);
        if (taskArray[i].complete) {
          overlineChecked(p);
        }

        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        newListItem.appendChild(rightSide);
        const dragIcon = document.createElement('span');
        dragIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
        rightSide.appendChild(dragIcon);
      }
    }
  });
}

export function removeHtml(index) {
  const removalList = document.getElementById(index);
  removalList.remove();
  const displayedLists = document.getElementsByClassName('list-item');
  taskList.forEach((item) => {
    for (let i = 0; i < displayedLists.length; i += 1) {
      if (item.index === i) {
        displayedLists[i].id = item.index;
      }
    }
  });
}

export function removeCheckedHtml(idArray) {
  const listItems = document.querySelectorAll('.list-item');
  idArray.forEach((item) => {
    for (let i = 0; i < listItems.length; i += 1) {
      if (item == i) {
        listItems[i].remove();
      }
    }
  });
}

export function reRenderRemovedCheckedId() {
  const listItems = document.querySelectorAll('.list-item');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].id = i;
  }
}

export function overlineChecked(htmlElement) {
  htmlElement.style.textDecoration = 'line-through';
  htmlElement.contenteditable = 'false';
}

export function noneChecked(htmlElement) {
  htmlElement.style.textDecoration = 'none';
  htmlElement.contenteditable = 'true';
}