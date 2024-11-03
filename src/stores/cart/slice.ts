import { ICart } from "@/types/cart";
import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, deleteCartItem, getCart } from "./async";

interface CartState {
  entities?: ICart;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CartState = {
  entities: {} as ICart,
  loading: "idle",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get cart
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCart.rejected, (state) => {
      state.loading = "failed";
    });

    // add item to cart
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      const newItem = action.payload;

      const existingItem = state.entities?.cartItem.find(
        (item) => item.productId === newItem.productId,
      );

      if (!existingItem) {
        state.entities?.cartItem.push(newItem);
      } else {
        existingItem.quantity = newItem.quantity;
      }

      state.loading = "succeeded";
    });
    builder.addCase(addItemToCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addItemToCart.rejected, (state) => {
      state.loading = "failed";
    });

    //delete cart item
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      if (state.entities && state.entities.cartItem) {
        state.entities.cartItem = state.entities.cartItem.filter(
          (item) => item.id !== action.payload.id,
        );
      }

      state.loading = "succeeded";
    });

    builder.addCase(deleteCartItem.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteCartItem.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default cartSlice.reducer;
