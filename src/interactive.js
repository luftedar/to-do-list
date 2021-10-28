import { addToLocalStorage } from './local.js';
import { taskList } from './addremove.js';
import { noneChecked, overlineChecked } from './renderlist.js';

export let checkedArray = [];

const statusArray = taskList.map((x) => x.complete);
for (let i = 0; i < statusArray.length; i += 1) {
  if (statusArray[i] === true) {
    checkedArray.push(i.toString());
  }
}

export function updateCheckBox(htmlElement, array, index, pElement) {
  if (htmlElement.checked) {
    array[index].complete = true;
    checkedArray.push(index);
    addToLocalStorage(array);
    addToLocalStorage(taskList, 'checked');
    overlineChecked(pElement);
  } else {
    array[index].complete = false;
    checkedArray = checkedArray.filter((x) => x !== index);
    addToLocalStorage(array);
    addToLocalStorage(taskList, 'checked');
    noneChecked(pElement);
  }
}