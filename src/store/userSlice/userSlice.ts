import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  phone: string;
  address: string;
  isAuthenticated: boolean;
}

const initialState: User = {
  name: "",
  phone: "",
  address: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload.name;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
