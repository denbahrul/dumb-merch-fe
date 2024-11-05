import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import TransactionItem from "@/features/transaction/components/transaction-item";
import { getOrder } from "@/stores/order/async";
import { useEffect } from "react";

export default function TransactionList() {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.order);
  const orders = entities;

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  if (loading === "pending") {
    return <p>Loading</p>;
  }
  return (
    <div className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="my-6 text-2xl font-bold">Transaction List</h1>
      </div>
      <div className="flex flex-col gap-4">
        {orders?.map((order) => {
          return <TransactionItem order={order} />;
        })}
      </div>
    </div>
  );
}
