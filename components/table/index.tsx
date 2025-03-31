"use client";
import Tag from "./Tag";

export default function Table() {
  console.log("here");
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
      {rowData.map((row) => (
        <tr key={row.todo.toString()}>
          {colInfo.map((colData) => {
            if (colData.colType === "NUMBER" || colData.colType === "TEXT") {
              return (
                <td
                  key={colData.colId}
                  className={`border-2 border-black border-collapse`}
                >
                  {row[colData.colId]}
                </td>
              );
            } else if (colData.colType === "TAG") {
              return (
                <td
                  key={colData.colId}
                  className={`border-2 border-black border-collapse`}
                >
                  <Tag
                    tagColor="red-50"
                    tagBgColor="white-90"
                    tagText={row[colData.colId].toString()}
                  />
                </td>
              );
            } else if (colData.colType === "CHECKBOX") {
              return (
                <td
                  key={colData.colId}
                  className={`border-2 border-black border-collapse`}
                >
                  <div className="checkbox">{row[colData.colId]}</div>
                </td>
              );
            }
          })}
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
