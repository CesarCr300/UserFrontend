import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponseEntity } from "../entities/user.entity";
import { AxiosInstanceSingletone } from "../services/api.service";

interface UserState {
  isAuthenticated: boolean;
  user: null | LoginResponseEntity;
}

const initialState: UserState = {
  isAuthenticated: window.localStorage.getItem("user") != null,
  user: window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user")!)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginResponseEntity>) {
      AxiosInstanceSingletone.setNewToken(action.payload.token);
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      window.localStorage.removeItem("user");
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
