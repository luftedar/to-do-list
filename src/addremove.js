import { addToLocalStorage, getFromLocalStorage } from './local.js';

export let taskList = [];

if (getFromLocalStorage('localList') == null) {
  addToLocalStorage(taskList);
} else {
  taskList = getFromLocalStorage('localList');
}

export function addNewItem(newDescription, newComplete, newIndex, array) {
  const newTask = {
    description: newDescription,
    complete: newComplete,
    index: newIndex,
  };
  array.push(newTask);
  addToLocalStorage(array);
  return array;
}

export function removeItem(removal, array) {
  console.log(removal, array);
  if (removal === 0 && array.length === 1) {
    array = [];
  } else {
    array = array.filter((x) => x !== array[removal]);
    let { length } = array;
    while (length >= removal) {
      array[length - 1].index = array[length - 1].index - 1;
      length--;
    }
  }
  addToLocalStorage(array);
  console.log(array);
}

export function removeAllChecked(array) {
  array = array.filter((x) => x.complete === false);
  for (let i = 0; i < array.length; i += 1) {
    array[i].index = i;
  }
  addToLocalStorage(array);
  return array;
}

export function editedPTag(changedDesc, index,array) {
  array[index].description = changedDesc;
  addToLocalStorage(array);
  return array;
}