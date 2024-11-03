import PageTitle from "@/components/ui/page-title";
import CartItem from "@/features/cart/components/cart-item";
import { useAppSelector } from "@/features/complain/hooks/use-store";

export default function CartPage() {
  const { entities, loading } = useAppSelector((state) => state.cart);
  const cart = entities;

  if (loading === "pending") {
    return <p>Loading</p>;
  }

  // if (cart?.cartItem?.length === 0) {
  //   return <p>Your cart is still empty</p>;
  // } else {
  // }
  return (
    <div className="p-8">
      <PageTitle title="My Cart" />
      {cart?.cartItem?.length === 0 ? (
        <p>Your cart is still empty</p>
      ) : (
        <div className="flex flex-col gap-2">
          {cart?.cartItem?.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                id={cartItem.id}
                quantity={cartItem.quantity}
                product={cartItem.product}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
