/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';

import Pagination from './Pagination';
import usePaginationStore from './usePaginationStore';

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
  rowsPerPage?: number;
}

const Table: React.FC<TableProps> = ({
  style,
  className,
  columns,
  data,
  rowsPerPage = 6,
}) => {
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  useEffect(() => {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    setCurrentPage(1); // Reset the current page when the data changes
    usePaginationStore.setState({ totalPages });
  }, [data, rowsPerPage, setCurrentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentPage = usePaginationStore((state) => state.currentPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedData = data.slice(start, end);

  return (
    <div>
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
          {paginatedData.map((item, index) => (
            <tr key={index}>
              {columns.map((_, columnIndex) => (
                <td key={columnIndex}>{item[columnIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

export default Table;
