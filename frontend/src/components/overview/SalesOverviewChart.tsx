import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Updated dummy data for XRF Intensity (in counts per second - cps)
const intensityData = [
  { name: "Jul", intensity: 1800 },
  { name: "Aug", intensity: 1650 },
  { name: "Sep", intensity: 2050 },
  { name: "Oct", intensity: 1900 },
  { name: "Nov", intensity: 2200 },
  { name: "Dec", intensity: 2750 },
  { name: "Jan", intensity: 2300 },
  { name: "Feb", intensity: 2150 },
  { name: "Mar", intensity: 2500 },
  { name: "Apr", intensity: 2350 },
  { name: "May", intensity: 2700 },
  { name: "Jun", intensity: 2850 },
];

const ElementalIntensityChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Elemental Intensity Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={intensityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="intensity"
              stroke="#10B981" // changed to a greenish shade to feel more geo/lab oriented
              strokeWidth={3}
              dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ElementalIntensityChart;
