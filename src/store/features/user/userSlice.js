import { createSlice } from "@reduxjs/toolkit";
import { validateSchema } from "graphql";

const initialState = {
  token: "",
  userId: "",
  userName: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, { payload }) => {
      localStorage.setItem("token", payload);
      let val = payload.split(".")[1];
      val = JSON.parse(window.atob(val));
      state.isLoggedIn = true;
      state.token = localStorage.getItem("token");
      state.userId = val.sub;
      state.userName = val.name;
    },
    unset: (state, action) => {
      localStorage.removeItem("token");
      return { isLoggedIn: false };
    },
  },
});

export const { unset, set } = userSlice.actions;
export default userSlice.reducer;
