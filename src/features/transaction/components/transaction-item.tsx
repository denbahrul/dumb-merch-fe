import { useAppDispatch } from "@/features/complain/hooks/use-store";
import { deleteCartItem } from "@/stores/cart/async";
import { IProduct } from "@/types/product";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

// interface CartItem {
//   id: number;
//   quantity: number;
//   product: IProduct;
// }

export default function TransactionItem() {
  // const dispatch = useAppDispatch();
  // async function onDelete(cartItemId: number) {
  //   dispatch(deleteCartItem(cartItemId));
  // }
  return (
    <div className="rounded-lg bg-background-quaternary p-2">
      <div className="flex justify-between">
        <img
          src="https://res.cloudinary.com/dlhqbphej/image/upload/v1730435316/dumb-merch/uznlyipzfnmapn2jcra2.jpg"
          // src={
          //   product?.productImage[0]
          //     ? product?.productImage[0]?.url
          //     : "/dm-logo.svg"
          // }
          alt="Product Photo"
          className="h-24 w-24 rounded-lg object-cover"
        />
        <div className="w-full items-center justify-between px-4 sm:flex">
          {/* <Link to={`/product/${product.id}`}> */}
          <div className="flex flex-col">
            <p className="text-red">Laptop</p>
            <p className="text-lg">Lenovo Ideapad 5i</p>
            <p className="font-semibold italic">3 X Rp. 12000000</p>
          </div>
          {/* </Link> */}
          <div className="mt-2 flex items-center gap-4 sm:mt-0">
            {/* <AiOutlineDelete
            size={24}
            color="#F74D4D"
            onClick={() => onDelete(id)}
          /> */}
            <p>Status :</p>
            <p>Pending</p>
          </div>
        </div>
      </div>
      <div className="mt-2 border-t-[1px] border-gray-textA px-1 pt-2">
        <p className="text-xs font-light">Total Amount</p>
        <p className="mb-2 text-sm font-semibold">Rp. 36000000</p>
        <p className="text-xs font-light">Customer Name</p>
        <p className="mb-2 text-sm font-semibold">Toni Kroos</p>
        <p className="text-xs font-light">Phone Number</p>
        <p className="mb-2 text-sm font-semibold">085714611032</p>
        <p className="text-xs font-light">Address</p>
        <p className="mb-2 text-sm font-semibold">Jakarta, Indonesia</p>
      </div>
    </div>
  );
}
