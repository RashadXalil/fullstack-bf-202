import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            // id == payload
            state.items.push(action.payload)
            console.log(state.items)
        },
        removeFromWishlist: (state, action) => {
            let target = state.items.find(item => item.id == action.payload)
            let indexOftarget = state.items.indexOf(target)
            state.items.splice(indexOftarget, 1)
        }
    }
})
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer