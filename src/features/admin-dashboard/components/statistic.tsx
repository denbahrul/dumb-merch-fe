import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import TransactionList from "@/app/routes/admin/transaction-list";
import BarChartItem from "./bar-chart";
import { PieChartDashboard } from "./pie-chart";
import {
  useAppDispatch,
  useAppSelector,
} from "@/features/complain/hooks/use-store";
import { useEffect } from "react";
import { getDashboard } from "@/stores/dashboard-admin/async";

export default function Statistic() {
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector((state) => state.dashboard.entities);
  const loading = useAppSelector((state) => state.dashboard.loading);
  // console.log(">>>>>", dashboard);

  useEffect(() => {
    dispatch(getDashboard());
    console.log("wkwkwk");
  }, []);

  if (loading === "pending") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 justify-between gap-4 px-8 md:grid-cols-4">
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-emerald-400">
              <FaMoneyCheckDollar size={24} />
            </div>
            <div>
              <p className="text-lg">Total Profit</p>
              <p className="text-xl font-semibold">
                Rp. {dashboard?.summary?.totalProfit}
              </p>
            </div>
          </div>
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-yellow-300">
              <MdOutlineShoppingCartCheckout size={24} />
            </div>
            <div>
              <p className="text-lg">Produk Terjual</p>
              <p className="text-xl font-semibold">
                {dashboard?.summary?.totalProductsSold} Produk
              </p>
            </div>
          </div>
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-purple-600">
              <IoPeopleOutline size={24} />
            </div>
            <div>
              <p className="text-lg">Total Pembeli</p>
              <p className="text-xl font-semibold">
                {dashboard?.summary?.totalBuyers} Orang
              </p>
            </div>
          </div>
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-blue-500">
              <FaChartLine size={24} />
            </div>
            <div>
              <p className="text-lg">Top Product</p>
              <p className="text-xl font-semibold">
                {dashboard?.summary?.topProduct}
              </p>
            </div>
          </div>
        </div>
        <div className="m-8 flex items-center rounded-lg bg-background-quaternary">
          <PieChartDashboard />
          {dashboard?.monthlySales ? (
            <BarChartItem monthlySales={dashboard.monthlySales} />
          ) : null}
        </div>
      </div>
      <TransactionList />
    </div>
  );
}
