import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    totalQuantity: 0,
    totalPrize: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            
            if(existingItem){
                
                existingItem.quantity += 1 ;
                existingItem.totalPrize += newItem.price ;
            }else{
                
                state.cartItems.push({
                    ...newItem,
                    quantity : 1,
                    totalPrize: newItem.price
                })
            }
            state.totalPrize += newItem.price;
            state.totalQuantity += 1;
            
        },

        removeFromCart : (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalPrize -= existingItem.totalPrize;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        }, 

        increaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id );

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrize += existingItem.price;
                state.totalPrize += existingItem.pricee;
                state.totalQuantity += 1
            }
        }, 
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id );

            if (existingItem){
                existingItem.quantity -= 1;
                existingItem.totalPrize -= existingItem.price;
            }
        }

    }
})

export const { addToCart , removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;