import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import { LineChartData } from "../../types";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
);

interface LineChartProps {
  covidData: LineChartData;
}

const LineChart: React.FC<LineChartProps> = ({ covidData }) => {
  const dates: string[] = Object.keys(covidData.cases).map((key) => key);
  const cases: number[] = Object.values(covidData.cases).map((value) => value);
  const deaths: number[] = Object.values(covidData.deaths).map(
    (value) => value,
  );
  const recovered: number[] = Object.values(covidData.recovered).map(
    (value) => value,
  );

  const data: ChartData<"line"> = {
    labels: dates,
    datasets: [
      {
        label: "Deaths",
        data: deaths,
        backgroundColor: "#FF5C5C",
        borderColor: "#FF5C5C",
        pointBorderColor: "#FF5C5C",
      },
      {
        label: "Cases",
        data: cases,
        backgroundColor: "#5C5CFF",
        borderColor: "#5C5CFF",
        pointBorderColor: "#5C5CFF",
      },
      {
        label: "Recovered",
        data: recovered,
        backgroundColor: "#8AFF8A",
        borderColor: "#8AFF8A",
        pointBorderColor: "#8AFF8A",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          maxTicksLimit: dates.length,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        title: {
          display: true,
          text: "Number of cases",
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-5 rounded-lg shadow-xl">
      <h1 className="text-2xl font-semibold">Covid cases flactuations</h1>
      <div className="flex w-full justify-center p-4">
        <Line
          data={data}
          options={options}
          className="h-[500px] w-full md:h-[600px]"
        />
      </div>
    </div>
  );
};

export default LineChart;
