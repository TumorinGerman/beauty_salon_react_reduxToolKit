import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return null;
});

const initialState = {
  orders: [],
  isLoaded: false,
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
    builder.addCase(fetchOrders.rejected, (state) => {
      state.fetchStatus = "error";
      state.orders = [];
    });
  },
});

export const { getServices } = ordersSlice.actions;

export default ordersSlice.reducer;
