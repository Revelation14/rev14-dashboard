import { Cell, Pie, PieChart } from 'recharts';

interface IPieChartProps {
  data: any;
}
const PieChartComponent: React.FC<IPieChartProps> = ({ data }) => {
  const COLORS = ['#3AA76D', '#ED6E33', '#D44333'];

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
