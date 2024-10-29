import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/stores/auth/slice";
import categoryReducer from "@/stores/category/slice";
import productReducer from "@/stores/product/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
