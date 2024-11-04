import TransactionItem from "@/features/transaction/components/transaction-item";

export default function TransactionList() {
  return (
    <div className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="my-8 text-2xl font-bold">Transaction List</h1>
      </div>
      <div className="flex flex-col gap-2">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </div>
    </div>
  );
}
