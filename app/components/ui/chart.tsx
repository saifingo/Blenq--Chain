"use client";

import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "./utils";

// ----------------- Chart Config -----------------
export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  };
};

// ----------------- Chart Context -----------------
const ChartContext = React.createContext<ChartConfig | null>(null);

export function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within <ChartContainer />");
  return context;
}

// ----------------- Chart Container -----------------
interface ChartContainerProps extends React.ComponentProps<"div"> {
  config: ChartConfig;
  children: React.ReactNode;
}
export const ChartContainer: React.FC<ChartContainerProps> = ({ config, children, className, ...props }) => {
  return (
    <ChartContext.Provider value={config}>
      <div className={cn("w-full h-full", className)} {...props}>
        <Recharts.ResponsiveContainer>{children}</Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
};

// ----------------- Custom Tooltip Payload -----------------
export interface CustomTooltipPayload {
  name?: string;
  value?: string | number;
  color?: string;
}

// ----------------- Chart Tooltip -----------------
interface ChartTooltipContentProps {
  active?: boolean;
  payload?: CustomTooltipPayload[];
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
  labelClassName?: string;
}
export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  active,
  payload,
  hideLabel,
  hideIndicator,
  indicator = "dot",
  labelClassName,
}) => {
  const config = useChart();

  if (!active || !payload || !payload.length) return null;

  return (
    <div className={cn("bg-white p-2 shadow rounded", labelClassName)}>
      {payload.map((item, idx) => {
        const key = item.name ?? "value";
        const itemConfig = config[key];
        const color = itemConfig?.color ?? item.color;

        return (
          <div key={idx} className="flex items-center gap-2">
            {!hideIndicator && <div style={{ backgroundColor: color }} className="w-2 h-2 rounded" />}
            <span>{itemConfig?.label ?? item.name}</span>
            {item.value !== undefined && <span>{item.value}</span>}
          </div>
        );
      })}
    </div>
  );
};

// ----------------- Custom Legend Payload -----------------
export interface CustomLegendPayload {
  value?: string;
  color?: string;
}

// ----------------- Chart Legend -----------------
interface ChartLegendContentProps {
  payload?: CustomLegendPayload[];
  hideIcon?: boolean;
}
export const ChartLegendContent: React.FC<ChartLegendContentProps> = ({ payload, hideIcon }) => {
  const config = useChart();

  if (!payload || !payload.length) return null;

  return (
    <div className="flex gap-4">
      {payload.map((item, idx) => {
        const key = item.value ?? "value";
        const itemConfig = config[key];

        return (
          <div key={idx} className="flex items-center gap-1">
            {!hideIcon && <div style={{ backgroundColor: item.color }} className="w-2 h-2 rounded" />}
            <span>{itemConfig?.label ?? item.value}</span>
          </div>
        );
      })}
    </div>
  );
};

// ----------------- Recharts Exports -----------------
export const ChartTooltip = Recharts.Tooltip;
export const ChartLegend = Recharts.Legend;
