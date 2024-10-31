import { ICategory } from "@/types/categoty";
import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "./async";

interface CategoryState {
  entities?: ICategory[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: CategoryState = {
  entities: [],
  loading: "idle",
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get category
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.loading = "failed";
    });

    //create category
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.entities = [...(state.entities || []), action.payload];
      state.loading = "succeeded";
    });
    builder.addCase(createCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createCategory.rejected, (state) => {
      state.loading = "failed";
    });

    //update category
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.entities = state.entities?.map((category) =>
        category.id === action.payload.id ? action.payload : category,
      );
      state.loading = "succeeded";
    });
    builder.addCase(updateCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateCategory.rejected, (state) => {
      state.loading = "failed";
    });

    //delete category
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.entities = state.entities?.filter(
        (category) => category.id !== action.payload,
      );
      state.loading = "succeeded";
    });
    builder.addCase(deleteCategory.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default categorySlice.reducer;
