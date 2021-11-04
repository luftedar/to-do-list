const { addNewItem, removeItem,editedPTag,removeAllChecked,updateCheckBox } = require('../src/__mocks__/addremove');

const taskList = [
  {
    description: 'Task 1',
    completed: true,
    index: 0,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 1,
  },
];

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
    return this.store;
  }

  getItem(key) {
    if (this.store[key] === null) {
      return [];
    }
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value;
    return this.store[key];
  }

  removeItem(key) {
    delete this.store[key];
  }
}

const localStorage = new LocalStorageMock();

describe('Tests for add remove', () => {
  test('Add Item', () => {
    addNewItem('New Task', false, taskList.length, taskList);
    expect(taskList.length).toBe(3);
    localStorage.setItem('taskList', taskList);
  });
  test('Remove Item', () => {
    expect(removeItem(1, taskList)).toBe(2);
  });
  test('LocalStorage', () => {
    localStorage.setItem('taskList', removeItem(1, taskList));
    expect(localStorage.getItem('taskList')).toBe(2);
  });
});

describe('Tests for editing, updating complete, clear all', () => {
  test('Editing', () => {
    editedPTag('Changed Description', 0, taskList);
    expect(taskList[0].description).toBe('Changed Description');
    localStorage.setItem('taskList', editedPTag('Changed Description', 0, taskList));
    expect(localStorage.getItem('taskList')[0].description).toBe('Changed Description');
  });
  test('Update Checkbox', () => {
    localStorage.setItem('taskList', updateCheckBox(taskList));
    expect(localStorage.getItem('taskList')[1].completed).toBe(true);
  });
  test('Clear All', () => {
    localStorage.setItem('taskList', removeAllChecked(taskList));
    removeAllChecked(taskList);
    expect(localStorage.getItem('taskList').length).toBe(1);
  });
  test('LocalStorage', () => {
    localStorage.setItem('taskList', removeItem(1, taskList));
    expect(localStorage.getItem('taskList')).toBe(2);
  });
});