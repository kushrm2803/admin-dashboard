import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId:
    localStorage.getItem("isLoggedIn") === "true"
      ? localStorage.getItem("currentuserId")
      : null,
  LoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUser: (state) => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        state.userId = localStorage.getItem("currentuserId");
      } else {
        state.userId = null;
      }
    },
    setLogin: (state) => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        state.LoggedIn = localStorage.getItem("currentuserId");
      } else {
        state.LoggedIn = "false";
      }
    },
  },
});

export const { setMode, setUser, setLogin } = globalSlice.actions;

export default globalSlice.reducer;
