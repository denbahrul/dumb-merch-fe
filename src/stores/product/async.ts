import { apiV1 } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: number, thunkAPI) => {
    try {
      const res = await apiV1.delete(`/product/delete/${id}`);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#1D1D1D",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.data.id;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
