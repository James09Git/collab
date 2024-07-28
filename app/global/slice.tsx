import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    handleShow: (state, { payload }) => {
      state.show = payload;
    },
  },
});

export const { handleShow } = slice.actions;

export default slice.reducer;
