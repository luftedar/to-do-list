export let checkedArray = [];

export function updateCheckBox(htmlElement, array, index) {
  if (htmlElement.checked) {
    array[index].complete = true;
    checkedArray.push(index);
  } else {
    array[index].complete = false;
    checkedArray = checkedArray.filter((x) => x !== index);
  }
}