export const getLocalStorageData = (key) => {
  if (typeof window !== "undefined") {
    if (key) {
      return window.localStorage.getItem(key);
    }
    return window.localStorage;
  }
};

export const setLocalStorageData = (key, value) => {
  window.localStorage.setItem(key, value);
};
