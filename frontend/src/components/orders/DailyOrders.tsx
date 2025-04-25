import { motion } from "framer-motion";
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

// Sample XRF data: Elemental concentrations (in %)
const xrfData = [
  { sample: "Sample 1", Fe: 7.2, Ca: 9.5, Mg: 5.6 },
  { sample: "Sample 2", Fe: 6.9, Ca: 9.8, Mg: 5.3 },
  { sample: "Sample 3", Fe: 7.5, Ca: 9.3, Mg: 5.9 },
  { sample: "Sample 4", Fe: 7.1, Ca: 9.7, Mg: 5.7 },
  { sample: "Sample 5", Fe: 7.3, Ca: 9.4, Mg: 5.8 },
  { sample: "Sample 6", Fe: 7.0, Ca: 9.6, Mg: 5.5 },
  { sample: "Sample 7", Fe: 7.4, Ca: 9.2, Mg: 5.8 },
];

const ElementConcentration = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Elemental Concentration (XRF)
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={xrfData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="sample" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
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
              stroke="#FF5733"
              strokeWidth={2}
              name="Iron (Fe)"
            />
            <Line
              type="monotone"
              dataKey="Ca"
              stroke="#33FF57"
              strokeWidth={2}
              name="Calcium (Ca)"
            />
            <Line
              type="monotone"
              dataKey="Mg"
              stroke="#3357FF"
              strokeWidth={2}
              name="Magnesium (Mg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ElementConcentration;
