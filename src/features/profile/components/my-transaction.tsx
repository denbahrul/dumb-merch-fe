import PageTitle from "../../../components/ui/page-title";
import TransactionCard from "./ui/transaction-card";

export default function MyTransaction() {
  return (
    <div className="col-span-2">
      <PageTitle title="My Transaction" />
      <div className="flex flex-col gap-3">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </div>
  );
}
