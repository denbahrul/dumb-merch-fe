import { IOrder } from "@/types/order";
import PageTitle from "../../../components/ui/page-title";
import TransactionCard from "./ui/transaction-card";

export default function MyTransaction({ orders }: { orders: IOrder[] }) {
  console.log("wkwkwkkw", orders);

  return (
    <div className="col-span-2 mt-12 lg:mt-0">
      <PageTitle title="My Transaction" />
      <div className="flex h-[80vh] flex-col gap-3 overflow-x-scroll rounded-md scrollbar-hide">
        {orders?.map((order) => {
          return <TransactionCard order={order} />;
        })}
      </div>
    </div>
  );
}
