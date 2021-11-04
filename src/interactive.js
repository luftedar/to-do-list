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

export function updateCheckBox(array) {
  addToLocalStorage(array);
  addToLocalStorage(taskList, 'checked');
  return array;
}