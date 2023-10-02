import React from "react";
// import ReactApexChart from "react-apexcharts";

import dynamic from "next/dynamic";

const DynamicApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false, // Disable server-side rendering
});

function QuizResultChart({ triedQuestions }) {
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: "45%",
          background: "transparent",
          image: undefined,
          stroke: "#D1FADF",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "40px",
            fontWeight: "bold",
          },
        },
      },
    },
    colors: ["#20E647"],
  };

  const series = [triedQuestions * 10];

  return (
    <DynamicApexCharts
      options={options}
      series={series}
      type="radialBar"
      height={340}
    />
  );
}

export default QuizResultChart;
