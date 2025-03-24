"use client";
import clsx from "clsx";
import Holidays from "date-holidays";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

type TCalendarProps = {
  onChangeDate?: (dateStr: string) => void;
};

export default function Calendar({ onChangeDate }: TCalendarProps) {
  const [today, setToday] = useState<dayjs.Dayjs>(dayjs());
  const [selectedDay, setSelectedDay] = useState(dayjs().format("YYYY-MM-DD"));
  const holidayRef = useRef(new Holidays("KR"));
  const startOfMonth = today.startOf("month");
  const endOfMonth = today.endOf("month");
  const daysInMonth = endOfMonth.daysInMonth();
  const startDay = startOfMonth.day();

  // 이전/다음 달 이동
  const changeMonth = (offset: number) => {
    setToday(today.add(offset, "month"));
  };

  const getDateIsHoliday = (date: number) => {
    const now = today.set("date", date);
    return holidayRef.current.isHoliday(now.format("YYYY-MM-DD"));
  };

  useEffect(() => {
    if (selectedDay) {
      onChangeDate && onChangeDate(selectedDay);
    }
  }, [selectedDay]);

  return (
    <div className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-md">
      {/* 달력 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => changeMonth(-1)}>⬅️</button>
        <h2 className="text-xl font-semibold">{today.format("YYYY년 MM월")}</h2>
        <button onClick={() => changeMonth(1)}>➡️</button>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 font-semibold text-center">
        {["일", "월", "화", "수", "목", "금", "토"].map((day, idx) => (
          <div
            key={day}
            className={clsx(
              "p-2",
              idx === 0 && "text-red-700",
              idx === 6 && "text-blue-700"
            )}
          >
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 렌더링 */}
      <div className="grid grid-cols-7">
        {/* 빈 공간 (첫째 날의 요일 기준) */}
        {Array(startDay)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className="p-2"></div>
          ))}

        {/* 날짜 표시 */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
          (day, idx) => (
            <div
              key={day}
              className={clsx(
                "p-2",
                "text-center",
                "border",
                "rounded-lg",
                "cursor-pointer",
                (idx + startDay) % 7 === 0 && "text-red-700",
                (idx + startDay) % 7 === 6 && "text-blue-700",
                getDateIsHoliday(day) && "text-red-700",
                selectedDay === `${today.format("YYYY-MM")}-${day}`
                  ? "bg-cyan-200"
                  : "hover:bg-cyan-50"
              )}
              onClick={() =>
                setSelectedDay(`${today.format("YYYY-MM")}-${day}`)
              }
            >
              {day}
            </div>
          )
        )}
      </div>
    </div>
  );
}
