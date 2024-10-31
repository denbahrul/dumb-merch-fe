import { CreateCategoryDTO } from "@/validation/categorySchema";
import { apiV1 } from "@/libs/api";
import { ICategory } from "@/types/categoty";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const getCategory = createAsyncThunk<ICategory[], undefined>(
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

export const createCategory = createAsyncThunk<ICategory, CreateCategoryDTO>(
  "category/createeCategory",
  async (data, thunkAPI) => {
    try {
      const res = await apiV1.post(`/category/create`, data);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#1D1D1D",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: number, thunkAPI) => {
    try {
      const res = await apiV1.delete(`/category/delete/${id}`);
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
