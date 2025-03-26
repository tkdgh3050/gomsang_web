"use client";
import Calendar from "@/components/calendar";
import Table from "@/components/table";

export default function Page() {
  const onChangeDate = (dateStr: string) => {
    console.log(dateStr);
  };
  return (
    <div className="h-[400px] w-[400px] flex">
      <Calendar onChangeDate={onChangeDate} />
      <Table />
    </div>
  );
}
