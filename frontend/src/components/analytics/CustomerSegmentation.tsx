import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";

// Sample XRF data showing concentration (%) of elements across two rock samples
const xrfRadarData = [
  { element: "Fe", Sample1: 28, Sample2: 30 },
  { element: "Si", Sample1: 21, Sample2: 27 },
  { element: "Al", Sample1: 30, Sample2: 20 },
  { element: "Ca", Sample1: 10, Sample2: 12 },
  { element: "K", Sample1: 8, Sample2: 6 },
  { element: "Mg", Sample1: 5, Sample2: 7 },
];

const XRFElementRadarChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        XRF Elemental Composition
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={xrfRadarData}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="element" stroke="#9CA3AF" />
            <PolarRadiusAxis angle={30} domain={[0, 35]} stroke="#9CA3AF" />
            <Radar
              name="Sample 1"
              dataKey="Sample1"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.6}
            />
            <Radar
              name="Sample 2"
              dataKey="Sample2"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default XRFElementRadarChart;
