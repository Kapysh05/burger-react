import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";

export const Store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
    },
})