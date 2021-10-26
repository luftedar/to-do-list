export default function updateCheckBox(htmlElement, array, index) {
  if (htmlElement.checked) {
    array[index].complete = true;
  } else {
    array[index].complete = false;
  }
}