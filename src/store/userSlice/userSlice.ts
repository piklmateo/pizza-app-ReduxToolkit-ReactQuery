import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  phone: string;
  address: string;
}

const initialState: User = {
  name: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
