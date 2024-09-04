

import {createSlice} from '@reduxjs/toolkit';


const initialState ={
    cakeCount:10
}


const cakeslices = createSlice({
    name:"cake",
    initialState,
    reducers:{
        orderCake:(state)=>{
            state.cakeCount += 1;
        },
        reStockCake:(state,action)=>{
            state.cakeCount += action.payload;
        }
    }
})

export default cakeslices.reducer;
export const {orderCake,reStockCake} = cakeslices.actions