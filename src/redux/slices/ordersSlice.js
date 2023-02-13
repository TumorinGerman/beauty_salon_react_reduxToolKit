import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addDocToCollectionUserOrder from "../../services/firebase/utils/addDocToCollectionUserOrders";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return null;
});

export const pushOrder = createAsyncThunk(
  "orders/pushOrder",
  async (orderObj) => {
    await addDocToCollectionUserOrder(orderObj);
  }
);

const initialState = {
  orders: [],
  isLoaded: false,
  isPushed: true,
  fetchStatus: "",
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.fetchStatus = "loading";
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.fetchStatus = "success";
      state.isLoaded = true;
    });
    builder.addCase(pushOrder.fulfilled, (state, action) => {
      state.pushOrder = "success";
      state.isPushed = true;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.fetchStatus = "error";
      state.orders = [];
    });
  },
});

export const { getServices } = ordersSlice.actions;

export default ordersSlice.reducer;
