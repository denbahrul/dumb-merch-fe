import { apiV1 } from "@/libs/api";
import { ICart, ICartItem } from "@/types/cart";
import { AddItemToCartDTO } from "@/validation/cartSchema";

import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getCart = createAsyncThunk<ICart, undefined>(
  "cart/getCart",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/cart");

      return res.data;
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

export const addItemToCart = createAsyncThunk<ICartItem, AddItemToCartDTO>(
  "cart/addItemToCart",
  async (data, thunkAPI) => {
    try {
      const res = await apiV1.post(`/cart/add`, data);
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

export const deleteCartItem = createAsyncThunk(
  "product/deleteProduct",
  async (id: number, thunkAPI) => {
    try {
      const res = await apiV1.delete(`/cart/delete/${id}`);

      return res.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
