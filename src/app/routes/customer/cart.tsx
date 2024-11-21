import Button from "@/components/ui/button";
import PageTitle from "@/components/ui/page-title";
import CartItem from "@/features/cart/components/cart-item";
import {
  useAppSelector,
  useAppDispatch,
} from "@/features/complain/hooks/use-store";
import { apiV1 } from "@/libs/api";
import { useEffect } from "react";
import { getCart } from "@/stores/cart/async";

export default function CartPage() {
  const { entities, loading } = useAppSelector((state) => state.cart);
  const cart = entities;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  async function handlePay() {
    try {
      const res = await apiV1.post("/order", {
        orderItem: cart?.cartItem,
        totalPrice: cart?.totalPrice,
        cartId: cart?.id,
      });

      if (res.data.data.token) {
        window.snap.pay(res.data.data.token);
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
      <div className="mt-8 border-t-[1px] border-t-gray-textA pt-8">
        <div className="flex w-full items-center justify-between rounded-lg bg-background-quaternary p-4 pt-4">
          <div>
            <p>Total :</p>
            <p>Rp. {cart?.totalPrice}</p>
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
    </div>
  );
}
