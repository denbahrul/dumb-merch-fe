import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getProduct } from "./async";

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
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.entities = state.entities?.filter(
        (product) => product.id !== action.payload,
      );
      state.loading = "succeeded";
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default productSlice.reducer;
