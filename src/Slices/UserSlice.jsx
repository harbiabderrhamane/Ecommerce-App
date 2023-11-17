import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  sign: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setSign: (state, action) => {
      state.sign = action.payload;
    },
  },
});

export const { login, logout, setSign } = userSlice.actions;
export default userSlice;
