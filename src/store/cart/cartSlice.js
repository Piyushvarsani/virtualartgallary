import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const isExistingProduct = state.some(item => item.id === action.payload.id);
            if (!isExistingProduct) {
                state.push(action.payload)
            } else {
                alert('product added to cart')
            }
        },
        removeProduct: (state, action) => {
            return state.filter(art => art.id !== action.payload)
        }
    },
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer

