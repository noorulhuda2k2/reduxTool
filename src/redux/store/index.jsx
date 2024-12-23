import { configureStore } from "@reduxjs/toolkit";
import blogReducers from "../reducers/blogSlice"

export const blogStore = configureStore({
    reducer: blogReducers
})