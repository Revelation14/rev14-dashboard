import React from 'react';

interface TableRowProps {
  user: {
    image: string;
    name: string;
    role: string;
    contributions: number;
  };
}
const TableRow: React.FC<TableRowProps> = ({ user }) => {
  const { image, name, role, contributions } = user;

  return (
    <tr className="w-full">
      <td className="w-1/4">
        <div className="flex items-center text-lg font-normal">
          <img src={image} alt={name} className="mr-2 h-12 w-12 rounded-full" />
          <span>{name}</span>
        </div>
      </td>
      <td className="w-1/4">
        <div className="h-fit w-fit rounded-3xl bg-purple px-3 text-sm font-medium text-white">
          {role}
        </div>
      </td>
      <td className="w-1/4 text-sm font-light">
        {contributions} contributions
      </td>
      <td className="flex w-1/4 flex-row-reverse gap-3">
        <img src="/assets/icons/three-dots.svg" alt="" />
        <button
          type="button"
          className="flex items-center justify-center rounded-2xl bg-gray-300 px-2.5 py-2 text-sm font-normal hover:bg-gray-400"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
