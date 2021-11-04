function addNewItem(newDescription, newComplete, newIndex,array) {
  const newTask = {
    description: newDescription,
    complete: newComplete,
    index: newIndex,
  };
  array.push(newTask);
}

function removeItem(removal,array) {
  if (removal === 0 && array.length === 1) {
    array = [];
  } else {
    array = array.filter((x) => x !== array[removal]);
    let length  = array.length;
    while (length > removal) {
      array[length - 1].index = array[length - 1].index - 1;
      length--;
    }
  }
  return array.length;
}

function editedPTag(changedDesc, index,array) {
  array[index].description = changedDesc;
  return array;
}

function removeAllChecked(array) {
  array = array.filter((x) => x.complete === false);
  for (let i = 0; i < array.length; i += 1) {
    array[i].index = i;
  }
  return array;
}

function updateCheckBox(array) {
  return array;
}

exports.addNewItem = addNewItem;
exports.removeItem = removeItem;
exports.editedPTag = editedPTag;
exports.removeAllChecked = removeAllChecked;
exports.updateCheckBox = updateCheckBox;