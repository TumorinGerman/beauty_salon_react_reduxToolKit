import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import servicesReducer from "./slices/servicesSlice";
import ordersReducer from "./slices/ordersSlice";

export const store = configureStore({
  reducer: {
    userAuth: userReducer,
    services: servicesReducer,
    orders: ordersReducer,
  },
});
