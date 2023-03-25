import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";

export const Store = configureStore({
    reducer: {
        category: categoryReducer,
    },
})