import { createSlice } from "@reduxjs/toolkit";
import { validateSchema } from "graphql";

const initialState = {
  token: "",
  userId: "",
  userName: "",
  isLoggedIn: false,
  isHost: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, { payload }) => {
      console.log("The token from store is  ,", payload.token);
      console.log("The payload is ", payload);
      localStorage.setItem("token", payload.token);
      let val = payload.token.split(".")[1];
      val = JSON.parse(window.atob(val));
      state.isLoggedIn = true;
      state.token = localStorage.getItem("token");
      state.userId = val.sub;
      state.userName = val.name;
      state.isHost = payload.isHost;
    },
    unset: (state, action) => {
      localStorage.removeItem("token");
      return { isLoggedIn: false };
    },
  },
});

export const { unset, set } = userSlice.actions;
export default userSlice.reducer;
