import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/CartSlice"

let Store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default Store
