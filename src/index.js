import './style.css';
import * as renderscript from './renderlist.js';
import {
  addNewItem, editedPTag, removeAllChecked, removeItem, taskList,
} from './addremove';
import { updateCheckBox, checkedArray } from './interactive.js';
import { addToLocalStorage, getFromLocalStorage } from './local.js';

window.addEventListener('DOMContentLoaded', () => {
  renderscript.renderBasic();
  renderscript.renderBasicDelete();

  const clearAllButton = document.querySelector('.remove-all');
  clearAllButton.addEventListener('click', () => {
    removeAllChecked();
    renderscript.removeCheckedHtml(checkedArray);
    renderscript.reRenderRemovedCheckedId();
  });
  renderscript.render(taskList);
  renderscript.reRenderRemovedCheckedId();
  const inputArea = document.querySelector('#input');
  inputArea.addEventListener('keydown', (e) => {
    if (e.which === 13) {
      const ul = document.querySelector('#list');
      ul.innerHTML = '';
      addNewItem(inputArea.value, false, taskList.length);
      inputArea.value = '';
      renderscript.render(taskList);
      const deleteIcon = document.querySelectorAll('.fa-trash-alt');
      const box = document.querySelectorAll('.checkbox');
      const pItem = document.querySelectorAll('.editable');
      for (let i = 0; i < taskList.length; i += 1) {
        deleteIcon[i].addEventListener('click', (e) => {
          if (e.target.className === 'far fa-trash-alt') {
            if (i === 0) {
              removeItem('0');
              renderscript.removeHtml('0');
            } else {
              const index = e.target.parentElement.parentElement.parentElement.id;
              removeItem(index);
              renderscript.removeHtml(index);
            }
          }
        });
        box[i].addEventListener('change', (e) => {
          updateCheckBox(e.target, taskList, e.target.parentElement.parentElement.id, pItem[i]);
        });
        const pItem = document.querySelectorAll('.editable');
        pItem[i].addEventListener('blur', () => {
          editedPTag(pItem[i].textContent, i);
        });
      }
    }
  });

  const deleteIcon = document.querySelectorAll('.fa-trash-alt');
  const box = document.querySelectorAll('.checkbox');
  const pItem = document.querySelectorAll('.editable');
  for (let i = 0; i < taskList.length; i += 1) {
    deleteIcon[i].addEventListener('click', (e) => {
      if (e.target.className === 'far fa-trash-alt') {
        if (i === 0) {
          removeItem('0');
          renderscript.removeHtml('0');
        } else {
          const index = e.target.parentElement.parentElement.parentElement.id;
          removeItem(index);
          renderscript.removeHtml(index);
        }
      }
    });
    box[i].addEventListener('change', (e) => {
      updateCheckBox(e.target, taskList, e.target.parentElement.parentElement.id, pItem[i]);
    });
    pItem[i].addEventListener('blur', () => {
      editedPTag(pItem[i].textContent, i);
    });
  }
});
