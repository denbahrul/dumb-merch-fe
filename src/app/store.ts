import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/stores/auth/slice";
import categoryReducer from "@/stores/category/slice";
import productReducer from "@/stores/product/slice";
import profileReducer from "@/stores/profile/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
