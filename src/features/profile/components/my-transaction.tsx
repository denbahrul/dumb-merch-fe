import { IOrder } from "@/types/order";
import PageTitle from "../../../components/ui/page-title";
import TransactionCard from "./ui/transaction-card";

export default function MyTransaction({ orders }: { orders: IOrder[] }) {
  console.log("wkwkwkkw", orders);

  return (
    <div className="col-span-2 mt-12 lg:mt-0">
      <PageTitle title="My Transaction" />
      <div className="flex flex-col gap-3">
        {orders?.map((order) => {
          return <TransactionCard order={order} />;
        })}
      </div>
    </div>
  );
}
