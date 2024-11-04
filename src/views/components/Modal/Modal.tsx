import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";

type ModalProps = {
  contentType: string;
  chartData: any;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  contentType,
  chartData,
  onClose,
}) => {
  const renderContent = () => {
    switch (contentType) {
      case "bar":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Столбчатая диаграмма - Подробный просмотр
            </h2>
            <div className="flex justify-center w-full h-96">
              <Bar
                data={chartData.bar}
                options={{ maintainAspectRatio: true }}
              />
            </div>
            <p className="mt-4 text-base text-center">
              Дополнительные сведения и анализ данных столбчатой диаграммы...
            </p>
          </>
        );
      case "table":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Таблица данных - Подробный просмотр
            </h2>
            <div className="overflow-auto max-h-80 w-full">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Столбец 1</th>
                    <th className="border px-4 py-2">Столбец 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Данные 1</td>
                    <td className="border px-4 py-2">Данные 2</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Данные 3</td>
                    <td className="border px-4 py-2">Данные 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-base text-center">
              Более подробная информация и анализ данных таблицы...
            </p>
          </>
        );
      case "pie":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Круговая диаграмма - Подробный просмотр
            </h2>
            <div className="flex justify-center w-full h-96">
              <Pie
                data={chartData.pie}
                options={{ maintainAspectRatio: true }}
              />
            </div>
            <p className="mt-4 text-base text-center">
              Дополнительные сведения и анализ данных круговой диаграммы...
            </p>
          </>
        );
      case "line":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Линейная диаграмма - Подробный просмотр
            </h2>
            <div className="flex justify-center w-full h-96">
              <Line
                data={chartData.line}
                options={{ maintainAspectRatio: true }}
              />
            </div>
            <p className="mt-4 text-base text-center">
              Дальнейший анализ тенденций в данных линейной диаграммы...
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl h-auto max-h-[80vh] relative flex flex-col items-center overflow-y-auto shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        {renderContent()}
      </div>
    </div>
  );
};
