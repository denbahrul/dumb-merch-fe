import { useAppDispatch } from "@/features/complain/hooks/use-store";
import { deleteCartItem } from "@/stores/cart/async";
import { ICartItem } from "@/types/cart";
import { IProduct } from "@/types/product";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  quantity: number;
  product: IProduct;
}

export default function CartItem({ id, quantity, product }: CartItem) {
  const dispatch = useAppDispatch();
  async function onDelete(cartItemId: number) {
    dispatch(deleteCartItem(cartItemId));
  }
  return (
    <div className="flex justify-between rounded-lg bg-background-quaternary p-2">
      <img
        src={
          product?.productImage[0]
            ? product?.productImage[0]?.url
            : "/dm-logo.svg"
        }
        alt="Product Photo"
        className="h-24 w-24 rounded-lg object-cover"
      />
      <div className="w-full items-center justify-between px-4 sm:flex">
        <Link to={`/product/${product.id}`}>
          <div className="flex flex-col gap-1">
            <p className="text-red">{product?.category?.categoryName}</p>
            <p className="text-lg">{product?.productName}</p>
            <p className="font-semibold italic">Rp. {product?.price}</p>
          </div>
        </Link>
        <div className="mt-2 flex items-center gap-4 sm:mt-0">
          <AiOutlineDelete size={24} onClick={() => onDelete(id)} />
          <p>Quantity : {quantity}</p>
        </div>
      </div>
    </div>
  );
}
