import { configureStore } from "@reduxjs/toolkit";
import { reduxLogger } from "redux-logger";

import cakeReducer from "@babel/template";
import icecreamReducer from "./features/icecream/icecreamslice.js";
import userReducer from "./features/user/userslice.js";

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },

});

export default store;
