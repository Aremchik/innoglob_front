// DateRangeContext.tsx
import React, { createContext, useContext, useState } from "react";

type DateRange = {
  startDate: Date;
  endDate: Date;
};

type DateRangeContextType = {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
};

const DateRangeContext = createContext<DateRangeContextType | undefined>(
  undefined
);

export const DateRangeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <DateRangeContext.Provider value={{ dateRange, setDateRange }}>
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const context = useContext(DateRangeContext);
  if (!context)
    throw new Error("useDateRange must be used within a DateRangeProvider");
  return context;
};
