import { createSlice } from "@reduxjs/toolkit";
import { getUserLogged } from "./async";
import { AuthDTO } from "@/features/auth/types/auth.dto";

interface AuthState {
  entities?: AuthDTO;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState: AuthState = {
  entities: {} as AuthDTO,
  loading: "idle",
  error: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserLogged.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getUserLogged.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getUserLogged.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string; // Assign error message here
    });
  },
});

export default authSlice.reducer;
