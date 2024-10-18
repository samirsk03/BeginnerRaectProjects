import { configureStore } from "@reduxjs/toolkit";
import cartRedusers from './cartSlice'
import { loadFromLocalStorage, saveToLocalStorage } from "./storeLocalStorage";

  const existingData = loadFromLocalStorage();

  const store = configureStore({
    reducer: {
        cart : cartRedusers,
    },
    preloadedState: existingData, // use loaded state 
})

// Subscribe to store changes to save them to localStorage
store.subscribe(()=>{
  saveToLocalStorage({cart: store.getState().cart})
})

export default store