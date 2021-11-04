const { addNewItem, removeItem } = require('../src/__mocks__/addremove');

let taskList = [
  {
    description: 'Task 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Task 2',
    completed: false,
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
    localStorage.setItem("taskList", taskList);
  });
  test('Remove Item', () => {
    expect(removeItem(1, taskList)).toBe(2);
  });
  test('LocalStorage', () => {
    localStorage.setItem("taskList", removeItem(1,taskList))
    expect(localStorage.getItem("taskList")).toBe(2);
  })
});
