import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
  { name: "Sample A", "Al₂O₃": 17.5, MgO: 5.2, "SiO₂": 45.3 },
  { name: "Sample B", "Al₂O₃": 14.8, MgO: 6.1, "SiO₂": 50.2 },
  { name: "Sample C", "Al₂O₃": 19.1, MgO: 4.8, "SiO₂": 47.6 },
  { name: "Sample D", "Al₂O₃": 16.7, MgO: 5.9, "SiO₂": 48.0 },
  { name: "Sample E", "Al₂O₃": 15.3, MgO: 5.5, "SiO₂": 49.1 },
];

const ProductPerformance = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Oxide Concentration
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="Al₂O₃" fill="#8B5CF6" />
            <Bar dataKey="MgO" fill="#10B981" />
            <Bar dataKey="SiO₂" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default ProductPerformance;
