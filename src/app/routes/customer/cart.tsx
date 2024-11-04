import Button from "@/components/ui/button";
import PageTitle from "@/components/ui/page-title";
import CartItem from "@/features/cart/components/cart-item";
import { useAppSelector } from "@/features/complain/hooks/use-store";
import { apiV1 } from "@/libs/api";

export default function CartPage() {
  const { entities, loading } = useAppSelector((state) => state.cart);
  const cart = entities;

  async function handlePay() {
    try {
      const res = await apiV1.post("/payment", {});
      console.log(res.data);

      if (res.data.result.token) {
        window.snap.pay(res.data.result.token);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading === "pending") {
    return <p>Loading</p>;
  }

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
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-background-quaternary px-8 py-4">
        <div>
          <p>Total :</p>
          <p>Rp. 36000000</p>
        </div>
        <Button
          onClick={handlePay}
          color="red"
          h="10"
          otherStyle=""
          title="Checkout"
        />
      </div>
    </div>
  );
}
