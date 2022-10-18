import {configureStore} from "@reduxjs/toolkit"
import { configure } from "@testing-library/react"
import cartReducer from "./cartRedux"

export default configureStore({
    reducer:{
        cart: cartReducer,
        
    }
})