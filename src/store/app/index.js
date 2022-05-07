import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LANGUAGE } from "../../constants";

const initialState = {
  language: DEFAULT_LANGUAGE,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { switchLanguage } = appSlice.actions;
export default appSlice.reducer;
