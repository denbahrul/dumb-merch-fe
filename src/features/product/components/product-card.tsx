import { Link } from "react-router-dom";
import { IProduct } from "../../../types/product";

export default function ProductCard({
  id,
  photo,
  name,
  price,
  stock,
}: IProduct) {
  return (
    <Link to={`product/${id}`}>
      <div className="w-[100%] rounded-lg bg-background-quaternary p-2">
        <div className="h-[312px] w-full overflow-hidden rounded-md">
          <img
            src={photo}
            alt="product photo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="py-2">
          <p className="text-xl text-red">{name}</p>
          <p className="py-1 text-base">Rp. {price}</p>
          <p className="text-sm font-light text-gray-textB">Stock : {stock}</p>
        </div>
      </div>
    </Link>
  );
}
