import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

interface IPieChartProps {
  data: any;
}
const PieChartComponent: React.FC<IPieChartProps> = ({ data }) => {
  const COLORS = ['#3AA76D', '#ED6E33', '#D44333'];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // A hack to fix this error when you refresh the page:  `Hydration failed because the initial UI does not match what was rendered on the server`
  }

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="40%"
        cy="40%"
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_entry: any, index: number) => (
          <Cell
            // eslint-disable-next-line react/no-array-index-key
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};
export default PieChartComponent;
