import { ICategory } from "@/types/categoty";
import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./async";

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
  },
});

export default categorySlice.reducer;
