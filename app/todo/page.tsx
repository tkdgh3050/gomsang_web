"use client";
import Calendar from "@/components/calendar";

export default function Page() {
  const onChangeDate = (dateStr: string) => {
    console.log(dateStr);
  };
  return (
    <div className="h-[400px] w-[400px]">
      <Calendar onChangeDate={onChangeDate} />
    </div>
  );
}
