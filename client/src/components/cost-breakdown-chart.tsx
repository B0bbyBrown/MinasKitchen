import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";

Chart.register(...registerables);

export default function CostBreakdownChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: "doughnut",
      data: {
        labels: [
          "Food & Ingredients",
          "Team Wages",
          "Packaging",
          "Ops & Transport",
        ],
        datasets: [
          {
            data: [60, 20, 10, 10],
            backgroundColor: [
              "hsl(11, 65%, 50%)", // primary
              "hsl(173, 58%, 39%)", // success
              "hsl(39, 77%, 67%)", // secondary
              "hsl(10, 71%, 62%)", // accent
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.label + ": " + context.parsed + "%";
              },
            },
          },
        },
        animation: {
          duration: 2000,
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <canvas ref={chartRef} width={300} height={300}></canvas>
    </div>
  );
}
