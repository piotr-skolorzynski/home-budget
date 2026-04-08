import React from "react";

interface FinancialStatCardProps {
  label: string;
  value: string;
  currency?: string;
  trend?: string;
  target?: string;
  icon: React.ReactNode;
  variant?: "primary" | "success" | "danger";
}

const FinancialStatCard = ({
  label,
  value,
  currency = "zł",
  trend,
  target,
  icon,
  variant = "primary",
}: FinancialStatCardProps) => {
  // Tonal Layering: surface-container-low sitting on a base surface
  // Soft edges achieved through background shifts instead of borders
  return (
    <div className="rounded-box p-8 bg-base-200 flex flex-col gap-6 min-w-[320px] transition-all duration-300 hover:bg-base-300">
      {/* Header Section: Intentional Asymmetry */}
      <div className="flex justify-between items-start">
        <div
          className={`p-2 rounded-md ${
            variant === "success"
              ? "text-success"
              : variant === "danger"
                ? "text-error"
                : "text-primary"
          }`}
        >
          {icon}
        </div>

        {/* Supplemental Data: Target or Trend */}
        <div className="flex flex-col items-end gap-1">
          {target && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-base-content/40">
              Target: {target}
            </span>
          )}
          {trend && (
            <span
              className={`text-[11px] px-2 py-0.5 rounded-sm font-mono ${
                variant === "success"
                  ? "bg-success/10 text-success"
                  : variant === "danger"
                    ? "bg-error/10 text-error"
                    : "bg-primary/10 text-primary"
              }`}
            >
              {trend}
            </span>
          )}
        </div>
      </div>

      {/* Data Section: The Editorial Scale */}
      <div className="space-y-1">
        <p className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-base-content/60">
          {label}
        </p>
        <div className="flex items-baseline gap-3">
          {/* Currency figures MUST use font-mono per Spec Section 3 */}
          <h2 className="text-4xl font-mono font-medium tracking-tight text-base-content">
            {value}
          </h2>
          <span className="text-xl font-mono text-base-content/80">
            {currency}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinancialStatCard;
