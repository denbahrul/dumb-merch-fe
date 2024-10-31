import Button from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { updateProfile } from "@/stores/profile/async";
import {
  UpdateProfileDTO,
  updateProfileSchema,
} from "@/validation/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ProfileModal({
  open,
  handleClose,
}: {
  open: any;
  handleClose: any;
}) {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.entities);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UpdateProfileDTO>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      fullName: profile?.fullName,
      username: profile?.user?.username,
      phone: profile?.phone,
      gender: profile?.gender,
      address: profile?.address,
    },
  });

  async function onSubmit(data: UpdateProfileDTO) {
    await dispatch(updateProfile(data));
    handleClose();
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex h-screen items-center justify-center">
          <div className="flex max-h-[80%] w-[80%] max-w-[920px] flex-col overflow-scroll rounded-lg bg-background-secondary px-8 pb-8 pt-4 scrollbar-hide">
            <div className="mb-4 flex justify-end">
              <IoIosCloseCircleOutline
                onClick={handleClose}
                size={28}
                className="cursor-pointer"
              />
            </div>
            <p className="mb-8 text-xl font-bold">Edit Profile</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="items-center gap-8 md:flex">
                <div className="flex flex-col items-center justify-center gap-4 md:w-[40%]">
                  <img
                    src={
                      watch("profilePhoto") &&
                      watch("profilePhoto")[0] instanceof File
                        ? URL.createObjectURL(watch("profilePhoto")[0] as Blob)
                        : profile?.profilePhoto
                    }
                    // {profile?.profilePhoto}
                    alt="Profile Photo"
                    className="m-auto h-32 w-32 rounded-full object-cover md:h-64 md:w-64 md:rounded-lg"
                  />
                  <label
                    className="flex items-center gap-1 text-sm"
                    htmlFor="imageProfile"
                  >
                    <CiEdit size={16} />
                    <p>edit image</p>
                  </label>
                </div>
                <div className="mt-8 flex flex-col gap-4 md:mt-0 md:w-[60%]">
                  <input
                    {...register("profilePhoto")}
                    id="imageProfile"
                    hidden
                    type="file"
                  />
                  <FormInput {...register("fullName")} placeholder="Name" />
                  {errors.fullName && (
                    <p className="text-rose-600">* {errors.fullName.message}</p>
                  )}
                  <FormInput {...register("username")} placeholder="Username" />
                  {errors.username && (
                    <p className="text-rose-600">* {errors.username.message}</p>
                  )}
                  <FormInput {...register("phone")} placeholder="Phone" />
                  {errors.phone && (
                    <p className="text-rose-600">* {errors.phone.message}</p>
                  )}
                  <FormInput {...register("gender")} placeholder="Gender" />
                  {errors.gender && (
                    <p className="text-rose-600">* {errors.gender.message}</p>
                  )}
                  <FormInput {...register("address")} placeholder="Address" />
                  {errors.address && (
                    <p className="text-rose-600">* {errors.address.message}</p>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  color="green"
                  h="10"
                  otherStyle="mt-2 w-32"
                  title="Save"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
