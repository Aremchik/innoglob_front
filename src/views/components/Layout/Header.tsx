import { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useDateRange } from "../../../context/DateRangeContext";
import { useNavigate } from "react-router";

export const Header = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { dateRange, setDateRange } = useDateRange();
  const navigate = useNavigate();

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    const startDate = selection?.startDate;
    const endDate = selection?.endDate;

    if (startDate && endDate) {
      setDateRange({ startDate, endDate });
    }

    setShowCalendar(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      <div className="relative">
        <button
          onClick={() => setShowCalendar((prev) => !prev)}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800"
        >
          {format(dateRange.startDate, "dd/MM/yyyy")} -{" "}
          {format(dateRange.endDate, "dd/MM/yyyy")}
        </button>
        {showCalendar && (
          <div className="absolute mt-2 z-10">
            <DateRange
              ranges={[
                {
                  startDate: dateRange.startDate,
                  endDate: dateRange.endDate,
                  key: "selection",
                },
              ]}
              onChange={handleSelect}
              rangeColors={["#374151"]}
            />
          </div>
        )}
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800">
          Описание
        </button>
        <button
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800"
          onClick={() => navigate("/dashboard")}
        >
          Диаграммы
        </button>
      </div>
    </header>
  );
};
