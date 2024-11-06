export interface IDashboard {
  summary: Summary;
  monthlySales: number[];
  salesByCategory: {};
}

export interface Summary {
  totalProfit: number;
  totalProductsSold: number;
  totalBuyers: number;
  topProduct: string;
}
