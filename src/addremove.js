import { addToLocalStorage, getFromLocalStorage } from './local.js';

export let taskList = [];

if (getFromLocalStorage('localList') == null) {
  addToLocalStorage(taskList);
} else {
  taskList = getFromLocalStorage('localList');
}

export function addNewItem(newDescription, newComplete, newIndex) {
  const newTask = {
    description: newDescription,
    complete: newComplete,
    index: newIndex,
  };
  taskList.push(newTask);
  addToLocalStorage(taskList);
}

export function removeItem(removal) {
  if (removal === 0 && taskList.length === 1) {
    taskList = [];
  } else {
    taskList = taskList.filter((x) => x !== taskList[removal]);
    let { length } = taskList;
    while (length > removal) {
      taskList[length - 1].index = taskList[length - 1].index - 1;
      length--;
    }
  }
  addToLocalStorage(taskList);
}

export function removeAllChecked() {
  taskList = taskList.filter((x) => x.complete === false);
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].index = i;
  }
  addToLocalStorage(taskList);
}

export function editedPTag(changedDesc, index) {
  taskList[index].description = changedDesc;
  addToLocalStorage(taskList);
}