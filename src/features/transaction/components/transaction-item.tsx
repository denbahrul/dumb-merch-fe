import { IOrder } from "@/types/order";

export default function TransactionItem({ order }: { order: IOrder }) {
  return (
    <div className="flex flex-col rounded-lg bg-background-quaternary p-2">
      <div className="flex items-center justify-between border-b-[1px] border-b-gray-textA p-2">
        <div>
          <p className="text-xs font-light text-red">
            <span className="font-semibold">Saturday</span>, 14 Juli 2021
          </p>
          <p className="text-sm">Total Amount : Rp {order.totalPrice}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="rounded-md bg-green px-2 text-sm">Shipping</p>
          {/* <button className="rounded-md bg-red px-2 py-1 text-xs">
            Deliver
          </button> */}
        </div>
      </div>
      <div className="mb-2 border-b-[1px] border-gray-textA px-1 py-2">
        <p className="text-xs font-light">Customer Name</p>
        <p className="mb-2 text-sm font-semibold">
          {order.user.profile.fullName}
        </p>
        <p className="text-xs font-light">Phone Number</p>
        <p className="mb-2 text-sm font-semibold">{order.user.profile.phone}</p>
        <p className="text-xs font-light">Address</p>
        <p className="mb-2 text-sm font-semibold">
          {order.user.profile.address}
        </p>
      </div>
      {order.orderItems.map((item) => {
        return (
          <div className="flex items-center justify-between p-1">
            <div className="flex items-center gap-2">
              <img
                src={
                  item?.product?.productImage &&
                  item.product.productImage.length > 0
                    ? item.product.productImage[0].url
                    : "/dm-logo.svg"
                }
                alt="product photo"
                className="h-20 w-20 rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <p className="text-xs italic">
                    {item.product.category?.categoryName}
                  </p>
                  <p className="font-bold text-red">
                    {item.product.productName}
                  </p>
                  <p className="text-xs">
                    Price : {item.product.price} X {item.quantity}
                  </p>
                  <p className="text-xs">Total Price : {item.totalPrice}</p>
                </div>
              </div>
            </div>
            <img
              src="/dm-logo.svg"
              alt="dumb merch logo"
              className="mr-5 h-10 w-10 rounded-md object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
