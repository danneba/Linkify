import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "this is token value",
  userId: "123",
  profileImage: "url.photo.jpg",
  userName: "Ephrem",
  isLoggedIn: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unset: (state) => {
      console.log("UNSET");
      return { isLoggedIn: false };
    },
  },
});

export const { unset } = userSlice.actions;
export default userSlice.reducer;
