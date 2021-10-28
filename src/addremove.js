export let taskList = [
];

export function addNewItem(newDescription,newComplete,newIndex){
  const newTask = {
    description: newDescription,
    complete: newComplete,
    index: newIndex
  }
  taskList.push(newTask);
}

export function removeItem(removal){
  taskList = taskList.filter((x) => x !== taskList[removal])
  let length = taskList.length;
  while(length>removal){
    taskList[length-1].index = taskList[length-1].index -  1;
    length--;
  }
}

export function removeAllChecked(){
  taskList = taskList.filter((x) => x.complete === true);
}