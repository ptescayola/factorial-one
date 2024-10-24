import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ComponentProps, ForwardedRef } from "react"
import { Label, Pie, PieChart as PieChartPrimitive } from "recharts"
import { autoColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig } from "../utils/types"

export type PieChartItem = {
  label: string
  value: number
  color?: string
}

export type PieChartProps = {
  dataConfig: ChartConfig
  data: PieChartItem[]
  tickFormatter?: (value: string) => string
  overview?: { number: number; label: string }
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
}

export const _PieChart = (
  { data, dataConfig, overview, aspect, tickFormatter }: PieChartProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const preparedData = data.map((item, index) => ({
    ...item,
    fill:
      dataConfig[item.label as keyof typeof dataConfig]?.color ||
      autoColor(index),
  }))

  return (
    <ChartContainer
      config={dataConfig}
      ref={ref}
      aspect={aspect}
      data-chromatic="ignore"
      style={{ height: 380 }}
    >
      <PieChartPrimitive accessibilityLayer margin={{ left: 0, right: 0 }}>
        <ChartTooltip
          cursor
          content={<ChartTooltipContent yAxisFormatter={tickFormatter} />}
        />
        <Pie
          isAnimationActive={false}
          nameKey={"label"}
          legendType="circle"
          dataKey={"value"}
          data={preparedData}
          innerRadius={120}
          outerRadius={135}
          paddingAngle={2.5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 8}
                      className="fill-f1-foreground text-2xl font-semibold"
                    >
                      {overview?.number
                        ? tickFormatter
                          ? tickFormatter(String(overview.number))
                          : overview.number
                        : null}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-f1-foreground-secondary"
                    >
                      {overview?.label}
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent />}
          align={"center"}
          verticalAlign={"bottom"}
          layout="vertical"
          className={"flex-row items-start gap-4 pr-3 pt-2"}
        />
      </PieChartPrimitive>
    </ChartContainer>
  )
}

export const PieChart = fixedForwardRef(_PieChart)
