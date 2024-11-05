import Statistic from "@/features/admin-dashboard/components/statistic";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="my-8 text-2xl font-bold">Dashboard</h1>
      </div>
      <Statistic />
    </div>
  );
}
