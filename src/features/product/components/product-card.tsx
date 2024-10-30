import { Link } from "react-router-dom";
import { IProduct } from "../../../types/product";

export default function ProductCard({
  id,
  productImage,
  productName,
  price,
  quantity,
}: IProduct) {
  return (
    <Link to={`/product/${id}`}>
      <div className="w-[100%] rounded-lg bg-background-quaternary p-2">
        <div className="h-[312px] w-full overflow-hidden rounded-md">
          <img
            src={
              productImage.length !== 0 ? productImage[0].url : "/dm-logo.svg"
            }
            alt="product photo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="py-2">
          <p className="text-xl text-red">{productName}</p>
          <p className="py-1 text-base">Rp. {price}</p>
          <p className="text-sm font-light text-gray-textB">
            Stock : {quantity}
          </p>
        </div>
      </div>
    </Link>
  );
}
