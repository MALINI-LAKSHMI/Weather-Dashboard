import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function TemperatureChart({ forecast }) {
  return (
    <div className="chart-container">
      <h3>Next 12 Hours Temperature</h3>

      <LineChart width={500} height={300} data={forecast}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#ff7300"
        />
      </LineChart>
    </div>
  );
}

export default TemperatureChart;