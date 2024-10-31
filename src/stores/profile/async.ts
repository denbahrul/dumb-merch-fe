import { ProfileEntity } from "@/entities/user";
import { apiV1 } from "@/libs/api";
import { UpdateProfileDTO } from "@/validation/profileSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/profile");

      return res.data.profile;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const updateProfile = createAsyncThunk<ProfileEntity, UpdateProfileDTO>(
  "profile/updateProfile",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "profilePhoto" && value.length > 0) {
          formData.append("profilePhoto", value[0]);
        } else if (key !== "profilePhoto") {
          formData.append(key, value);
        }
      });
      const res = await apiV1.patch("/profile/update", formData);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#1D1D1D",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.profile;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
