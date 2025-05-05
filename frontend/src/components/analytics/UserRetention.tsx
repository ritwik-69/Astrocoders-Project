import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Sample XRF analysis data: concentration of Iron (Fe) across multiple samples
const xrfLineData = [
  { name: "Sample 1", Fe: 28 },
  { name: "Sample 2", Fe: 30 },
  { name: "Sample 3", Fe: 25 },
  { name: "Sample 4", Fe: 27 },
  { name: "Sample 5", Fe: 29 },
  { name: "Sample 6", Fe: 31 },
  { name: "Sample 7", Fe: 26 },
  { name: "Sample 8", Fe: 30 },
];

const XRFLineChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        XRF Analysis – Iron (Fe) Content
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={xrfLineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis
              stroke="#9CA3AF"
              label={{
                value: "Fe (%)",
                angle: -90,
                position: "insideLeft",
                fill: "#9CA3AF",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Fe"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default XRFLineChart;
