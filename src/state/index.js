import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: null,
  token: null,
  reports: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    setReports: (state, action) => {
      state.reports = action.payload.reports;
    },
    setReport: (state, action) => {
      const updatesReports = state.posts.map((report) => {
        if (report._id === action.payload.report._id)
          return action.payload.report;
        return report;
      });
      state.reports = updatesReports;
    },
  },
});

export const { setMode, setLogin, setLogout, setReport, setReports } =
  globalSlice.actions;

export default globalSlice.reducer;
