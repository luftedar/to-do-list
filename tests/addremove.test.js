import { addNewItem } from "../src/addremove";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

beforeEach(() => {
  localStorage.setItem('stored', JSON.stringify([
    {
      description: 'Here Goes Desc',
      completed: false,
      index: 0,
    },
    {
      description: 'Here Goes Desc',
      completed: false,
      index: 1,
    },
    {
      description: 'Here Goes Desc',
      completed: false,
      index: 2,
    },
  ]))
});

describe('Add New Item', () => {
  test('Adds New Object to the array', () => {
    const lastIndex = JSON.parse(localStorage.getItem('stored')).length;
    addNewItem('Here Goes the New Desc',false,lastIndex)
    expect((JSON.parse(localStorage.getItem('stored'))).length).toBe(4);
  })
})
