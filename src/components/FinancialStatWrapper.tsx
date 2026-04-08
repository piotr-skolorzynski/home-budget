import { Landmark, TrendingUp, ShoppingBag } from "lucide-react";
import FinancialStatCard from "./FinancialStatCard";

const FinancialStatWrapper = () => {
  return (
    <div className="p-12 bg-base-100 min-h-screen">
      <div className="flex flex-wrap gap-8">
        <FinancialStatCard
          label="Total Balance"
          value="42.850,00"
          trend="+2.4%"
          icon={<Landmark size={20} />}
          variant="success"
        />

        <FinancialStatCard
          label="Monthly Income"
          value="12.400,00"
          target="15K"
          icon={<TrendingUp size={20} />}
          variant="primary"
        />

        <FinancialStatCard
          label="Monthly Expenses"
          value="8.120,50"
          trend="-12%"
          icon={<ShoppingBag size={20} />}
          variant="danger"
        />
      </div>
    </div>
  );
};

export default FinancialStatWrapper;
