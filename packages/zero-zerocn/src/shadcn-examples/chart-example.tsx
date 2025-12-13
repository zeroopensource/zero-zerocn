"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
} from "recharts";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/bases/radix/ui/chart";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

const areaChartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const areaChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartExample() {
  return (
    <ExampleWrapper>
      <ChartAreaExample />
      <ChartBarExample />
      <ChartLineExample />
      <ChartRadialExample />
      <ChartRadarExample />
    </ExampleWrapper>
  );
}

function ChartAreaExample() {
  return (
    <Example title="Area Chart">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Area Chart</CardTitle>
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={areaChartConfig}>
            <AreaChart
              accessibilityLayer
              data={areaChartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                axisLine={false}
                dataKey="month"
                tickFormatter={(value) => value.slice(0, 3)}
                tickLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
              />
              <Area
                dataKey="desktop"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                type="natural"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <IconPlaceholder
                  className="size-4"
                  hugeicons="ChartUpIcon"
                  lucide="TrendingUpIcon"
                  tabler="IconTrendingUp"
                />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground leading-none">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}

const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function ChartBarExample() {
  return (
    <Example title="Bar Chart">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={barChartConfig}>
            <BarChart accessibilityLayer data={barChartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                axisLine={false}
                dataKey="month"
                tickFormatter={(value) => value.slice(0, 3)}
                tickLine={false}
                tickMargin={10}
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator="dashed" />}
                cursor={false}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month{" "}
            <IconPlaceholder
              className="size-4"
              hugeicons="ChartUpIcon"
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
            />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}

const lineChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const lineChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function ChartLineExample() {
  return (
    <Example title="Line Chart">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Line Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={lineChartConfig}>
            <LineChart
              accessibilityLayer
              data={lineChartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                axisLine={false}
                dataKey="month"
                tickFormatter={(value) => value.slice(0, 3)}
                tickLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <Line
                dataKey="desktop"
                dot={false}
                stroke="var(--color-desktop)"
                strokeWidth={2}
                type="monotone"
              />
              <Line
                dataKey="mobile"
                dot={false}
                stroke="var(--color-mobile)"
                strokeWidth={2}
                type="monotone"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <IconPlaceholder
                  className="size-4"
                  hugeicons="ChartUpIcon"
                  lucide="TrendingUpIcon"
                  tabler="IconTrendingUp"
                />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground leading-none">
                Showing total visitors for the last 6 months
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const pieChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

function ChartPieExample() {
  const totalVisitors = React.useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Example title="Pie Chart">
      <Card className="w-full">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Donut with Text</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            className="mx-auto aspect-square max-h-[250px]"
            config={pieChartConfig}
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
                cursor={false}
              />
              <Pie
                data={pieChartData}
                dataKey="visitors"
                innerRadius={60}
                nameKey="browser"
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          dominantBaseline="middle"
                          textAnchor="middle"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          <tspan
                            className="fill-foreground font-bold text-3xl"
                            x={viewBox.cx}
                            y={viewBox.cy}
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            className="fill-muted-foreground"
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month{" "}
            <IconPlaceholder
              className="size-4"
              hugeicons="ChartUpIcon"
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
            />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}

const radarChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const radarChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function ChartRadarExample() {
  return (
    <Example title="Radar Chart">
      <Card className="w-full">
        <CardHeader className="items-center pb-4">
          <CardTitle>Radar Chart - Multiple</CardTitle>
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <ChartContainer
            className="mx-auto aspect-square max-h-[250px]"
            config={radarChartConfig}
          >
            <RadarChart data={radarChartData}>
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
              />
              <PolarAngleAxis dataKey="month" />
              <PolarGrid />
              <Radar
                dataKey="desktop"
                fill="var(--color-desktop)"
                fillOpacity={0.6}
              />
              <Radar dataKey="mobile" fill="var(--color-mobile)" />
            </RadarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month{" "}
            <IconPlaceholder
              className="size-4"
              hugeicons="ChartUpIcon"
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
            />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground leading-none">
            January - June 2024
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}

const radialChartData = [
  { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
];

const radialChartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function ChartRadialExample() {
  return (
    <Example title="Radial Chart">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Radial Chart - Shape</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            className="mx-auto aspect-square max-h-[210px]"
            config={radialChartConfig}
          >
            <RadialBarChart
              data={radialChartData}
              endAngle={100}
              innerRadius={80}
              outerRadius={140}
            >
              <PolarGrid
                className="first:fill-muted last:fill-background"
                gridType="circle"
                polarRadius={[86, 74]}
                radialLines={false}
                stroke="none"
              />
              <RadialBar background dataKey="visitors" />
              <PolarRadiusAxis axisLine={false} tick={false} tickLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          dominantBaseline="middle"
                          textAnchor="middle"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          <tspan
                            className="fill-foreground font-bold text-4xl"
                            x={viewBox.cx}
                            y={viewBox.cy}
                          >
                            {radialChartData[0].visitors.toLocaleString()}
                          </tspan>
                          <tspan
                            className="fill-muted-foreground"
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month{" "}
            <IconPlaceholder
              className="size-4"
              hugeicons="ChartUpIcon"
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
            />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </Example>
  );
}
