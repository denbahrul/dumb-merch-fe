import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";

export default function EditCategoryForm() {
  return (
    <div>
      <form className="mb-10 flex flex-col gap-6">
        <FormInput placeholder="Mouse" type="text" />
      </form>
      <Button otherStyle="w-full" title="Save" color="green" h="12" />
    </div>
  );
}
