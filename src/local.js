export function addToLocalStorage(array, localname = 'localList') {
  localStorage.setItem(localname, JSON.stringify(array));
}

export function getFromLocalStorage(array) {
  if (localStorage.getItem(array) == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem(array));
}