/* eslint-disable react/no-array-index-key */
import React from 'react';

interface TableColumnProps {
  className?: string;
  children: React.ReactNode;
}

const TableColumn: React.FC<TableColumnProps> = ({ className, children }) => {
  return <th className={className}>{children}</th>;
};

interface TableProps {
  style?: React.CSSProperties;
  className?: string;
  columns: React.ReactNode[];
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ style, className, columns, data }) => {
  return (
    <table style={style} className={className}>
      <colgroup>
        {columns.map((_, index) => (
          <col key={index} style={{ width: `${100 / columns.length}%` }} />
        ))}
      </colgroup>
      <thead className="text-left text-gray-600">
        <tr className="border-b">
          {columns.map((column, index) => (
            <TableColumn key={index}>{column}</TableColumn>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((_, columnIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={columnIndex}>{item[columnIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
