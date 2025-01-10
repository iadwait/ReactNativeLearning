import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterSlice'


// Action goes to Reducer, Reducer updates the State and stores it in Store
export const store = configureStore({
    reducer: {
        // counter is the name we gave to reducer in slice
        counter: counterReducer,
    },
});

export default store;