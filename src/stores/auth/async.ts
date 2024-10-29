import { AuthDTO } from "@/features/auth/types/auth.dto";
import { apiV1 } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const getUserLogged = createAsyncThunk<AuthDTO, undefined>(
  "users/getUserLogged",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        return thunkAPI.rejectWithValue("");
      }
      const res = await apiV1.get("/auth/me");

      if (!res.data) {
        return thunkAPI.rejectWithValue("Invalid authorization header");
      }

      return res.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
