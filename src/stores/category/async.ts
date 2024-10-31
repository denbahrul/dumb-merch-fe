import { apiV1 } from "@/libs/api";
import { ICategory } from "@/types/categoty";
import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from "@/validation/categorySchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });
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
        background: "#181818",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });

        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const updateCategory = createAsyncThunk<
  ICategory,
  { data: UpdateCategoryDTO; categoryId: number }
>("category/updateCategory", async ({ data, categoryId }, thunkAPI) => {
  try {
    const res = await apiV1.patch(`/category/update/${categoryId}`, data);
    Swal.fire({
      icon: "success",
      title: res.data.message,
      showConfirmButton: false,
      background: "#181818",
      color: "#fff",
      iconColor: "#04A51E",
      timer: 1500,
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: `${error.message}`,
        background: "#181818",
        color: "#fff",
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: number, thunkAPI) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "If you delete this category, all products with this category will also be deleted.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F74D4D",
        cancelButtonColor: "#56C05A",
        confirmButtonText: "Yes, delete it!",
        background: "#181818",
        color: "#fff",
      });
      if (result.isConfirmed) {
        const res = await apiV1.delete(`/category/delete/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: res.data.message,
          icon: "success",
          background: "#181818",
          color: "#fff",
          confirmButtonColor: "#56C05A",
        });
        return res.data.data.id;
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
