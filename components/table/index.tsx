"use client";
import Tag from "./Tag";

export default function Table() {
  return (
    <table className="table w-full ">
      <tr>
        {colInfo.map((val) => (
          <th
            key={val.colId}
            style={{ width: val.width }}
            className={`border-[1px] border-gray-200 w-[${val.width}] bg-cyan-50`}
          >
            {val.colName}
          </th>
        ))}
      </tr>
      {rowData.map((row) => (
        <tr className="table-row" key={row.todo.toString()}>
          {colInfo.map((colData) => (
            <td
              key={colData.colId}
              className={`table-cell border-[1px] border-gray-200  align-middle text-center p-2`}
            >
              {(colData.colType === "NUMBER" || colData.colType === "TEXT") &&
                row[colData.colId]}
              {colData.colType === "TAG" && (
                <Tag
                  tagColor="text-gray-200"
                  tagBgColor="bg-gray-400"
                  tagText={row[colData.colId].toString()}
                />
              )}
              {colData.colType === "CHECKBOX" && (
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={row[colData.colId] as boolean}
                />
              )}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
type COL_ID = "tag" | "todo" | "hour" | "isComplete";
const colInfo: {
  colId: COL_ID;
  colName: string;
  colType: "TAG" | "TEXT" | "NUMBER" | "CHECKBOX";
  width: string;
  onChange?: () => void;
}[] = [
  {
    colId: "tag",
    colName: "태그",
    colType: "TAG",
    width: "200px",
  },
  {
    colId: "todo",
    colName: "할 일",
    colType: "TEXT",
    width: "300px",
  },
  {
    colId: "hour",
    colName: "시간",
    colType: "NUMBER",
    width: "100px",
  },
  {
    colId: "isComplete",
    colName: "완료여부",
    colType: "CHECKBOX",
    width: "200px",
  },
];

const tableInfo: {
  hasDrag: boolean;
  hasDelete: boolean;
} = {
  hasDrag: true,
  hasDelete: true,
};

const rowData: Record<COL_ID, string | number | boolean>[] = [
  {
    tag: "독서",
    todo: "asd",
    hour: 1,
    isComplete: false,
  },
  {
    tag: "독서2",
    todo: "asd2",
    hour: 1.5,
    isComplete: true,
  },
];
