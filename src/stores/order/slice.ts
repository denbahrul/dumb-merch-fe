import { IOrder } from "@/types/order";
import { createSlice } from "@reduxjs/toolkit";
import { getOrder } from "./async";

interface OrderState {
  entities?: IOrder[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: OrderState = {
  entities: [],
  loading: "idle",
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getOrder.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getOrder.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default orderSlice.reducer;
