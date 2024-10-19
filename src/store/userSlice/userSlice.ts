import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
}

const initialState: User = {
  name: "",
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
