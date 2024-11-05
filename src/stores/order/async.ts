import { apiV1 } from "@/libs/api";
import { IOrder } from "@/types/order";

import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getOrder = createAsyncThunk<IOrder[], undefined>(
  "order/getOrder",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/order");

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
