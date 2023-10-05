import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialValue,
    reducers: {
        increment: (state) => {
            return {
                value: state.value + 1
            }
        },
        decrement: (state) => {
            return {
                value: state.value - 1
            }
        },
        reset: (state) => {
            return {
                value: 0
            }
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;