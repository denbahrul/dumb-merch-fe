import { apiV1 } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDashboard = createAsyncThunk(
  "dashboard/getDashboard",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/dashboard/admin");

      return res.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
