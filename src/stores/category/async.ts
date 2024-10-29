import { apiV1 } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/category");

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
