import { createSlice } from "@reduxjs/toolkit";
import { orderCake } from "../cake/cakeslice";

const initialState = {
  icecreamCount: 10,
};

const icecreamslice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIceCream: (state) => {
      state.icecreamCount += 1;
    },
    reStockIceCream: (state, action) => {
      state.icecreamCount += action.payload;
    },
  },
  // extraReducer:{
  //     ['cake/ordered']:(state)=>{
  //         state.icecreamCount--
  //     }
  //   }

  extraReducers: (builder) => {
    builder.addCase(orderCake, (state, action) => {
      state.icecreamCount--;
    });
  },
});

export const { orderIceCream, reStockIceCream } = icecreamslice.actions;
export default icecreamslice.reducer;
