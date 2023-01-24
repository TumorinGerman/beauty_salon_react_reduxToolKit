import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogined: false,
  activeUserId: {},
};

export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    userLogining: (state, action) => {
      state.isLogined = true;
      state.activeUserId = action.payload;
    },
  },
});

export const { userLogining } = userSlice.actions;
export default userSlice.reducer;
