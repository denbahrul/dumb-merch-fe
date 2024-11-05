import { IOrder } from "@/types/order";

export default function TransactionCard({ order }: { order: IOrder }) {
  async function handlePay() {
    window.snap.pay(order.transactionToken);
  }
  return (
    <div className="rounded-md bg-background-quaternary">
      <div className="flex items-center justify-between border-b-[1px] border-b-gray-textA p-2">
        <div>
          <p className="text-xs font-light text-red">
            <span className="font-semibold">Saturday</span>, 14 Juli 2021
          </p>
          <p className="text-sm">Sub Total : {order.totalPrice}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="rounded-md bg-rose-600 px-1 text-xs">
            Waiting for payment
          </p>
          <button
            onClick={handlePay}
            className="rounded-md bg-red px-2 py-1 text-xs"
          >
            Pay Now
          </button>
        </div>
      </div>
      {order.orderItems.map((item) => {
        return (
          <div className="flex items-center justify-between p-2">
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
              src="dm-logo.svg"
              alt="dumb merch logo"
              className="mr-5 h-10 w-10 rounded-md object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
