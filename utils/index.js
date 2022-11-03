export const getLocalStorageData = (key) => {
  if (key) {
    return window.localStorage.getItem(key);
  }
  return window.localStorage;
};

export const setLocalStorageData = (key, value) => {
  window.localStorage.setItem(key, value);
};
