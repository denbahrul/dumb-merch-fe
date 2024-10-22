import { IProduct } from "../../../types/product";

export default function ProductCard({ photo, name, price, stock }: IProduct) {
  return (
    <div className="bg-background-quaternary w-[100%] rounded-lg p-2">
      <div className="h-[312px] w-full overflow-hidden rounded-md">
        <img
          src={photo}
          alt="product photo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="py-2">
        <p className="text-red text-xl">{name}</p>
        <p className="py-1 text-base">Rp. {price}</p>
        <p className="text-gray-textB text-sm font-light">Stock : {stock}</p>
      </div>
    </div>
  );
}
