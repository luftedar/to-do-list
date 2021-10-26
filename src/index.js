import _, { add } from 'lodash';
import './style.css';

let tasks = [
    {
        description:'0000Here goes the description',
        complete: false,
        index: 0
    },
    {
        description:'1111Here goes the description',
        complete: false,
        index: 1
    },
    {
        description:'2222Here goes the description',
        complete: false,
        index: 2
    }
]

const showTasks = () => {
    const showDiv = document.querySelector('#list-wrapper');

    const newUlist = document.createElement('ul');
    newUlist.classList.add('list');

    const listHeader = document.createElement('p');
    listHeader.textContent = "Today's To Do";
    listHeader.classList.add('header');
    showDiv.appendChild(listHeader);
    const addInput = document.createElement('input');
    addInput.placeholder = 'Add to your list...'
    addInput.classList.add('input')
    showDiv.appendChild(addInput);

    showDiv.appendChild(newUlist);
    tasks.forEach((item)=> {
        for(let i = 0; i<tasks.length;i+=1){
            if(item.index===i){
                const newListItem = document.createElement('li');
                newListItem.classList.add('list-item');
                showDiv.appendChild(newListItem);

                const checkBox = document.createElement('INPUT');
                checkBox.setAttribute('type','checkbox');
                newListItem.appendChild(checkBox);
                const p = document.createElement('p');
                p.textContent = tasks[i].description;
                newListItem.appendChild(p);
            }
        }
    });
    const clearAll = document.createElement('p');
    clearAll.textContent = 'Clear all completed';
    clearAll.classList.add('remove-all');
    showDiv.appendChild(clearAll);
}

window.onload = showTasks()