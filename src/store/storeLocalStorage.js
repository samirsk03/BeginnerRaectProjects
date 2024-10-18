export const saveToLocalStorage = (state) => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem("cart", data);
  } catch (e) {
    console.warn("cant save data", e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    if (data === null) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};
