import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogined: false,
  activeUserId: "",
  userInformation: {},
};

export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    userLogining: (state, action) => {
      console.log("userLogining start");
      state.isLogined = true;
      state.activeUserId = action.payload;
    },
    addUserInfo: (state, action) => {
      console.log("addUserInfo start");
      console.table(action.payload);
      state.userInformation = action.payload;
    },
    userLogOut: (state) => {
      state.isLogined = false;
      state.activeUserId = "";
      state.userInformation = {};
    },
  },
});

export const { userLogining, addUserInfo, userLogOut } = userSlice.actions;
export default userSlice.reducer;
