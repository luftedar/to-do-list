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

exports.addNewItem = addNewItem;
exports.removeItem = removeItem;