import { AiOutlineDelete } from "react-icons/ai";

export default function CartItem() {
  return (
    <div className="flex justify-between rounded-lg bg-background-quaternary p-2">
      <img
        src="https://res.cloudinary.com/dlhqbphej/image/upload/v1730423004/dumb-merch/c0wrwe5v3hgzodthrxxz.jpg"
        alt="Product Photo"
        className="h-24 w-24 rounded-lg object-cover"
      />
      <div className="w-full items-center justify-between px-4 sm:flex">
        <div className="flex flex-col gap-1">
          <p className="text-red">Handphone</p>
          <p className="text-lg">Samsung A32 5G</p>
          <p className="font-semibold italic">Rp. 3500000</p>
        </div>
        <div className="mt-2 flex items-center gap-4 sm:mt-0">
          <AiOutlineDelete size={24} />
          <p>Quantity : 2</p>
        </div>
      </div>
    </div>
  );
}
