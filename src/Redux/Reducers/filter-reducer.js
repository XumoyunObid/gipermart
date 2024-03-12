import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    createFilter: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.keyName]: action.payload.value,
        },
      };
    },
  },
});

export default filterReducer.reducer;

export const { createFilter } = filterReducer.actions;
