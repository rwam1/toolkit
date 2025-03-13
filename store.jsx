import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/Feature/userSlice";

export default configureStore({
    reducer:{
        user:userReducer
    }
})
