import setLocal from './index.js'

export default function updateCheckBox(htmlElement, array, index) {
  if (htmlElement.checked) {
    array[index].complete = true;
    setLocal(array);
  } else {
    array[index].complete = false;
    setLocal(array);
  }
}