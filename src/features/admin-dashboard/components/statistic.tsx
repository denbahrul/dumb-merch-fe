import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import TransactionList from "@/app/routes/admin/transaction-list";
import BarChartItem from "./bar-chart";
import PieChartDashboard from "./pie-chart";

export default function Statistic() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 justify-between gap-4 px-8">
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-emerald-400">
              <FaMoneyCheckDollar size={24} />
            </div>
            <div>
              <p className="text-lg">Total Profit</p>
              <p className="text-xl font-semibold">Rp. 230.000.000</p>
            </div>
          </div>
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-yellow-300">
              <MdOutlineShoppingCartCheckout size={24} />
            </div>
            <div>
              <p className="text-lg">Produk Terjual</p>
              <p className="text-xl font-semibold">132 Produk</p>
            </div>
          </div>
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-purple-600">
              <IoPeopleOutline size={24} />
            </div>
            <div>
              <p className="text-lg">Total Pembeli</p>
              <p className="text-xl font-semibold">86 Orang</p>
            </div>
          </div>
          <div className="item-center flex gap-4 rounded-lg bg-background-quaternary px-6 py-4">
            <div className="flex items-center text-blue-500">
              <FaChartLine size={24} />
            </div>
            <div>
              <p className="text-lg">Top Product</p>
              <p className="text-xl font-semibold">Lenovo Ideapad</p>
            </div>
          </div>
        </div>
        <div className="m-8 flex items-center rounded-lg bg-background-quaternary">
          <div>
            <p className="mt-8 text-center text-xl">Total sales by month</p>
            <BarChartItem />
          </div>
          <PieChartDashboard />
        </div>
      </div>
      <TransactionList />
    </div>
  );
}
