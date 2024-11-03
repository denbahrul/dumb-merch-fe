import PageTitle from "@/components/ui/page-title";
import CartItem from "@/features/cart/components/cart-item";

export default function CartPage() {
  return (
    <div className="p-8">
      <PageTitle title="My Cart" />
      <div className="flex flex-col gap-2">
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
