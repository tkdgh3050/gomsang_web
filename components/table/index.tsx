import React from "react";

export default function Table() {
  return (
    <table className="w-full">
      <tr>
        {colInfo.map((val) => (
          <th
            key={val.colId}
            className={`border-2 border-black w-[${val.width}] border-collapse`}
          >
            {val.colName}
          </th>
        ))}
      </tr>
    </table>
  );
}

const colInfo: {
  colId: string;
  colName: string;
  colType: string;
  width: string;
  onChange?: () => void;
}[] = [
  {
    colId: "tag",
    colName: "tag",
    colType: "TAG",
    width: "100px",
  },
  {
    colId: "todo",
    colName: "todo",
    colType: "TEXT",
    width: "300px",
  },
  {
    colId: "hour",
    colName: "hour",
    colType: "NUMBER",
    width: "100",
  },
  {
    colId: "isComplete",
    colName: "isComplete",
    colType: "CHECKBOX",
    width: "100",
  },
];
const tableInfo: {
  hasDrag: boolean;
  hasDelete: boolean;
} = {
  hasDrag: true,
  hasDelete: true,
};
