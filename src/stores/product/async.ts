import { apiV1 } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/product");

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
