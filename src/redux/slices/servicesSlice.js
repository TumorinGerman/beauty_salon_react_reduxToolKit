import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getPriceFireStore from "../../services/firebase/utils/getPrice";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const data = await getPriceFireStore();
    return data;
  }
);

const initialState = {
  services: [],
  isLoaded: false,
  fetchStatus: "",
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServices: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.fetchStatus = "loading";
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.services = action.payload;
      state.fetchStatus = "success";
      state.isLoaded = true;
    });
    builder.addCase(fetchServices.rejected, (state) => {
      state.fetchStatus = "error";
      state.services = [];
    });
  },
});

export const { getServices } = servicesSlice.actions;

export default servicesSlice.reducer;
