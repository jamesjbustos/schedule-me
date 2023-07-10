import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Monday", Hours: 2 },
  { name: "Tuesday", Hours: 3 },
  { name: "Wednesday", Hours: 2.5 },
  { name: "Thursday", Hours: 3 },
  { name: "Friday", Hours: 2 },
  { name: "Saturday", Hours: 1.5 },
  { name: "Sunday", Hours: 1 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="hours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4fa2d9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4fa2d9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Hours"
            stroke="#4fa2d9"
            fillOpacity={1}
            fill="url(#hours)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
