import * as React from "react";
import { LED, PUMP, TOTAL } from "@/lib/data/data";
import { Footprints, Waves } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PCV } from "@/config/display";
interface DataEntry {
  time: string; // Assuming time is in ISO string format
}

export default function ChartPage() {
  const [month, setMonth] = React.useState("06");
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getMonthName = (month: number): string => {
    // Note: JavaScript months are 0-based, so subtract 1 from the month number
    return monthNames[month - 1];
  };
  const filterByDateString = (
    data: DataEntry[],
    dateString: string,
  ): DataEntry[] => {
    const [year, month] = dateString.split("-").map(Number); // Split and convert year and month

    return data.filter((entry) => {
      const date = new Date(entry.time);
      return date.getUTCFullYear() === year && date.getUTCMonth() + 1 === month;
    });
  };
  const filteredData = filterByDateString(TOTAL, `2024-${month}`);
  const filteredPump = filterByDateString(PUMP, `2024-${month}`);
  const filteredLED = filterByDateString(LED, `2024-${month}`);
  const LEDConfig = {
    led1: {
      label: "led1",
      color: "hsl(var(--chart-1))",
      icon: Footprints,
    },
    led2: {
      label: "led2",
      color: "hsl(var(--chart-2))",
      icon: Waves,
    },
    led3: {
      label: "led3",
      color: "hsl(var(--chart-3))",
      icon: Waves,
    },
  } satisfies ChartConfig;
  const PUMPConfig = {
    pump_l1: {
      label: "pump_l1",
      color: "hsl(var(--chart-1))",
    },
    pump_l2: {
      label: "pump_l2",
      color: "hsl(var(--chart-2))",
    },
    pump_l3: {
      label: "pump_l3",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;
  const TOTALConfig = {
    total_l1: {
      label: "total_l1",
      color: "hsl(var(--chart-1))",
    },
    total_l2: {
      label: "total_l2",
      color: "hsl(var(--chart-2))",
    },
    total_l3: {
      label: "total_l3",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;
  return (
    <>
      <div
        className={`bar flex justify-around h-[60px] ${PCV ? "mt-[40px]" : ""}`}
      >
        <button
          onClick={() => setMonth("04")}
          className={`p-2 w-full ${
            month === "04" ? "bg-blue-500 text-white" : ""
          }`}
        >
          April
        </button>
        <button
          onClick={() => setMonth("05")}
          className={`p-2 w-full ${
            month === "05" ? "bg-blue-500 text-white" : ""
          }`}
        >
          May
        </button>
        <button
          onClick={() => setMonth("06")}
          className={`p-2 w-full ${
            month === "06" ? "bg-blue-500 text-white" : ""
          }`}
        >
          June
        </button>
        <a className="p-2 my-auto text-center w-full" href="/GH.xlsx" download>
          Download
        </a>
      </div>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>TOTAL POWER</CardTitle>
            <CardDescription>
              total power in {`${getMonthName(parseInt(month))}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={TOTALConfig}
              className="w-[100%] max-h-[400px]"
            >
              <BarChart accessibilityLayer data={filteredData}>
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <Bar
                  dataKey="total_l1"
                  stackId="a"
                  fill="hsl(var(--chart-1))"
                />
                <Bar
                  dataKey="total_l2"
                  stackId="a"
                  fill="hsl(var(--chart-2))"
                />
                <Bar
                  dataKey="total_l3"
                  stackId="a"
                  fill="hsl(var(--chart-3))"
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={false}
                  defaultIndex={1}
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={{
                          "--color-bg": `var(--color-${name})`,
                        } as React.CSSProperties}
                      />
                      {TOTALConfig[name as keyof typeof TOTALConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          W
                        </span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 2 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          Total
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {(item.payload.total_l1 + item.payload.total_l2 +
                              item.payload.total_l3).toFixed(2)}
                            <span className="font-normal text-muted-foreground">
                              W
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>TOTAL PUMP POWER</CardTitle>
            <CardDescription>
              total pump power in {`${getMonthName(parseInt(month))}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={PUMPConfig}
              className="w-[100%] max-h-[400px]"
            >
              <BarChart accessibilityLayer data={filteredPump}>
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <Bar
                  dataKey="pump_l1"
                  stackId="a"
                  fill="hsl(var(--chart-1))"
                />
                <Bar
                  dataKey="pump_l2"
                  stackId="a"
                  fill="hsl(var(--chart-2))"
                />
                <Bar
                  dataKey="pump_l3"
                  stackId="a"
                  fill="hsl(var(--chart-3))"
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={false}
                  defaultIndex={1}
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={{
                          "--color-bg": `var(--color-${name})`,
                        } as React.CSSProperties}
                      />
                      {PUMPConfig[name as keyof typeof PUMPConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          W
                        </span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 2 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          Total
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {(item.payload.pump_l1 + item.payload.pump_l2 +
                              item.payload.pump_l3).toFixed(2)}
                            <span className="font-normal text-muted-foreground">
                              W
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>TOTAL LED POWER</CardTitle>
            <CardDescription>
              total led power in {`${getMonthName(parseInt(month))}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={LEDConfig}
              className="w-[100%] max-h-[400px]"
            >
              <BarChart accessibilityLayer data={filteredLED}>
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <Bar
                  dataKey="led1"
                  stackId="a"
                  fill="hsl(var(--chart-1))"
                />
                <Bar
                  dataKey="led2"
                  stackId="a"
                  fill="hsl(var(--chart-2))"
                />
                <Bar
                  dataKey="led3"
                  stackId="a"
                  fill="hsl(var(--chart-3))"
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={false}
                  defaultIndex={1}
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={{
                          "--color-bg": `var(--color-${name})`,
                        } as React.CSSProperties}
                      />
                      {LEDConfig[name as keyof typeof LEDConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          W
                        </span>
                      </div>
                      {/* Add this after the last item */}
                      {index === 2 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          Total
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {(item.payload.led1 + item.payload.led2 +
                              item.payload.led3).toFixed(2)}
                            <span className="font-normal text-muted-foreground">
                              W
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </React.Suspense>
    </>
  );
}
