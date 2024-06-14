
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        oneInc: (state,action)=>{
            console.log('Action Payload', action.payload.inc);
            console.log(state.counter);
            const newState = state.counter + action.payload.inc;
            state.counter = newState
            return state;
        },
        oneDec:(state,action) => {
            const newState = state.counter - action.payload.dec;
            state.counter = newState
            return state;
        },
        twoInc:(state,action) => {
            const newState = state.counter + action.payload.inc;
            state.counter = newState
            return state;
        },
        twoDec:(state,action) => {
            const newState = state.counter - action.payload.dec;
            state.counter = newState
            return state;
        }
    }
})
//console.log(counterSlice.actions);
export const CounterAction = counterSlice.actions;
export default counterSlice;