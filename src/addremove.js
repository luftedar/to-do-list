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
  if(removal === 0 && taskList.length === 1){
    taskList = [];
  }
  else{
    taskList = taskList.filter((x) => x !== taskList[removal])
    let length = taskList.length;
    while(length>removal){
    taskList[length-1].index = taskList[length-1].index -  1;
    length--;
  }
  }
}

export function removeAllChecked(){
  taskList = taskList.filter((x) => x.complete === false);
  for(let i = 0; i < taskList.length;i += 1){
    taskList[i].index = i;
  }
}

export function editedPTag(changedDesc,index){
  taskList[index].description = changedDesc;
}