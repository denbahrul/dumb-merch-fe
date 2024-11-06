import { createSlice } from "@reduxjs/toolkit";
import { IDashboard } from "@/types/dashboard-admin";
import { getDashboard } from "./async";

interface ProfileState {
  entities?: IDashboard;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProfileState = {
  entities: {} as IDashboard,
  loading: "idle",
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get dashboard
    builder.addCase(getDashboard.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getDashboard.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getDashboard.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default dashboardSlice.reducer;
