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
  console.log('inputvalue',removal,'object.index',taskList[removal].index,taskList);
  taskList = taskList.filter((x) => x !== taskList[removal])
  console.log(taskList);
  let length = taskList.length;
  while(length>removal){
    taskList[length-1].index = taskList[length-1].index -  1;
    length--;
  }
}

export function removeAllChecked(){
  taskList = taskList.filter((x) => x.complete === true);
}