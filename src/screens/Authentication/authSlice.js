import { createSlice } from "@reduxjs/toolkit";
// axios

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    setIsLoggedIn: false,
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogin: (state) => {
      state.setIsLoggedIn = true;
    },
    setLogout: (state) => {
      state.token = "";

      state.setIsLoggedIn = false;
    },
  },
});

export const { setToken, setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
