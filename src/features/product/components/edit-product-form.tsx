import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";

export default function EditProductForm() {
  return (
    <div>
      <form className="mb-10 flex flex-col gap-6">
        <div className="flex items-center">
          <label
            htmlFor="image"
            className={`mt-5 w-fit cursor-pointer rounded-lg bg-red px-6 py-2`}
          >
            Upload Image
          </label>
          <p className={`mt-5 w-fit cursor-pointer rounded-lg px-6 py-2`}>
            imageeee.jpg
          </p>
        </div>
        <input id="image" type="file" hidden />
        <FormInput placeholder="product name" type="text" />
        <textarea
          placeholder="product description"
          className="h-28 rounded-lg border-[1px] border-border-primary bg-background-teritery p-5 scrollbar-hide"
        />
        <FormInput placeholder="price" type="text" />
        <FormInput placeholder="stock" type="text" />
      </form>
      <Button title="Create" color="green" otherStyle="w-full" h="12" />
    </div>
  );
}
