import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === item.id);
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    itemId: newItem.id, 
                    price: newItem.price, 
                    name: newItem.title,
                    quantity: 1, 
                    totalPrice: newItem.price});
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart (state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id) 
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
        }
    });
    
export const cartSliceActions = cartSlice.actions;
export default cartSlice;