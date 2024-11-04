import React, { useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { ChatBot } from "../../components/ChatBot/ChatBot";
import { Modal } from "../../components/Modal/Modal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  PointElement,
  LineElement
);

export const Dashboard: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const chartData = {
    bar: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Bar Chart",
          data: [12, 19, 3, 5],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    pie: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    line: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Line Chart",
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        },
      ],
    },
  };

  const openModal = (content: string) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      <div
        className="bg-white rounded-lg p-7 shadow-md cursor-pointer max-h-72 overflow-hidden"
        onClick={() => openModal("bar")}
      >
        <h2 className="text-lg font-bold">Bar Chart</h2>
        <Bar data={chartData.bar} options={{ maintainAspectRatio: false }} />
      </div>

      <div
        className="bg-white rounded-lg p-4 shadow-md cursor-pointer max-h-72 overflow-hidden"
        onClick={() => openModal("table")}
      >
        <h2 className="text-lg font-bold">Data Table</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2">Column 1</th>
              <th className="border px-4 py-2">Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Data 1</td>
              <td className="border px-4 py-2">Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="bg-white rounded-lg p-7 shadow-md cursor-pointer max-h-72 overflow-hidden"
        onClick={() => openModal("pie")}
      >
        <h2 className="text-lg font-bold">Pie Chart</h2>
        <Pie
          data={chartData.pie}
          options={{ maintainAspectRatio: false }}
          height={300}
        />
      </div>

      <div
        className="bg-white rounded-lg p-7 shadow-md cursor-pointer max-h-72 overflow-hidden"
        onClick={() => openModal("line")}
      >
        <h2 className="text-lg font-bold">Line Chart</h2>
        <Line
          data={chartData.line}
          options={{ maintainAspectRatio: false }}
          height={300}
        />
      </div>

      {modalContent && (
        <Modal
          contentType={modalContent}
          chartData={chartData}
          onClose={closeModal}
        />
      )}
      <ChatBot />
    </div>
  );
};
