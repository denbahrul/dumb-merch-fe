import Button from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import {
  CreateCategoryDTO,
  createCategorySchema,
} from "@/validation/categorySchema";
import { useAppDispatch } from "@/features/complain/hooks/use-store";
import { createCategory } from "@/stores/category/async";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddCategoryForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryDTO>({
    resolver: zodResolver(createCategorySchema),
  });

  async function onSubmit(data: CreateCategoryDTO) {
    await dispatch(createCategory(data)).unwrap();
    navigate("/admin/category");
  }
  return (
    <div>
      <form
        className="mb-10 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          {...register("categoryName")}
          placeholder="Category"
          type="text"
        />
        {errors.categoryName && (
          <p className="text-rose-600">* {errors.categoryName.message}</p>
        )}
        <Button
          type="submit"
          otherStyle="w-full mt-5"
          title="Create"
          color="green"
          h="12"
        />
      </form>
    </div>
  );
}
