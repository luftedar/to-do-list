import './style.css';
import * as renderscript from './renderlist.js';
import { addNewItem,removeItem,taskList } from './addremove';

window.addEventListener('DOMContentLoaded',() => {
  renderscript.renderBasic();
  renderscript.render(taskList);
  renderscript.renderBasicDelete();


  const inputArea = document.querySelector('#input');
  inputArea.addEventListener('keydown',(e) => {
    if(e.which  === 13){
      const ul = document.querySelector('#list');
      ul.innerHTML = '';
      addNewItem(inputArea.value,false,taskList.length);
      inputArea.value = '';
      console.log(taskList);
      renderscript.render(taskList);
      const deleteIcon = document.querySelectorAll('.fa-trash-alt');
      for(let i = 0; i<taskList.length;i += 1){
        deleteIcon[i].addEventListener('click',(e)=>{
          console.log(e.target.className);
          if(e.target.className === 'far fa-trash-alt'){
            console.log(e.target.parentElement.parentElement.parentElement.id);
            let index = e.target.parentElement.parentElement.parentElement.id;
            removeItem(index);
            renderscript.removeHtml(index);
            console.log(taskList);
          }
        });
      }
    }
  });
 
  const deleteIcon = document.querySelectorAll('.fa-trash-alt');
  for(let i = 0; i<taskList.length;i += 1){
    deleteIcon[i].addEventListener('click',(e)=>{
      console.log(e.target.className);
      if(e.target.className === 'far fa-trash-alt'){
        console.log(e.target.parentElement.parentElement.parentElement.id);
        let index = e.target.parentElement.parentElement.parentElement.id;
        renderscript.removeHtml(index);
        removeItem(index);
        console.log(taskList);
      }
    });
  }
});

