"use client";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";

type TMonthInfo = {
  startOfMonth: dayjs.Dayjs;
  endOfMonth: dayjs.Dayjs;
  daysInMonth: number;
  startDay: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Calendar() {
  const [today, setToday] = useState<dayjs.Dayjs>();
  const [monthInfo, setMonthInfo] = useState<TMonthInfo>();
  // const [selectedDate, setSelectedDate] = useState(() => dayjs());

  useEffect(() => {
    setToday(dayjs());
  }, []);

  useEffect(() => {
    if (!today) return;

    const startOfMonth = today.startOf("month");
    const endOfMonth = today.endOf("month");
    const daysInMonth = endOfMonth.daysInMonth();
    const startDay = startOfMonth.day();

    setMonthInfo({
      startOfMonth,
      endOfMonth,
      daysInMonth,
      startDay,
    });
  }, [today]);

  return (
    <>
      <div>{monthInfo?.daysInMonth}</div>
      <div>{monthInfo?.startDay}</div>
    </>
  );
}
