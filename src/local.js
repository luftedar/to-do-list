export function addToLocalStorage(array, localname = 'localList') {
  window.localStorage.setItem(localname, JSON.stringify(array));
}

export function getFromLocalStorage(array) {
  if (window.localStorage.getItem(array) == null) {
    return null;
  }
  return JSON.parse(localStorage.getItem(array));
}