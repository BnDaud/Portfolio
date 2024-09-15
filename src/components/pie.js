import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DoughnutChart = (arg) => {
  const data = {
    labels: [arg.name],
    datasets: [
      {
        label: "Skill Levels",
        data: [arg.grade, 100 - arg.grade],
        backgroundColor: ["rgba(91, 200, 175, 1)", "rgba(40, 47, 55, 1)"],
        borderColor: ["rgba(91, 200, 175, 1)", "rgba(40, 47, 55, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "90%", // Adjust this value to change the inner radius
    radius: "40%", // Adjust this value to change the outer radius
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgba(255, 255, 255, 1)", // Change this to your desired color
          font: {
            size: 14, // Increase font size
            //weight: "bold", // Make text bold
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
