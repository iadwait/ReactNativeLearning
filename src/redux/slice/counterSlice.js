// Action Reducer Store
// Action - What type of Action, eg counter - increment decrement action, 
// 2 parm type (increment, decrement) - and payload is optional can contain data

import { createSlice } from "@reduxjs/toolkit";

// Reducer - What type of Action is coming and what updation is to be made in state
// 2 param - current state value and type of action

// Store - Globall data is stored / managed


// Slice is combination of Action and Reducer
export const counterSlice = createSlice({
    name: 'counter', // Reducer
    initialState: {
        value: 0,
    },
    reducers: {
        // Action
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; // Export Reducer


