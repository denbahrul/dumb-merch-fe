import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./async";

interface ProductState {
  entities?: IProduct[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProductState = {
  entities: [],
  loading: "idle",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default productSlice.reducer;
