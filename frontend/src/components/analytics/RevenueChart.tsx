import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated example data: Measured vs Target for multiple elements (Fe, Si, Ca)
const xrfData = [
  {
    month: "Jan",
    feContent: 66.4,
    targetFe: 68.0,
    siContent: 12.5,
    targetSi: 12.0,
    caContent: 8.2,
    targetCa: 8.0,
  },
  {
    month: "Feb",
    feContent: 68.7,
    targetFe: 68.0,
    siContent: 12.9,
    targetSi: 12.0,
    caContent: 8.5,
    targetCa: 8.0,
  },
  {
    month: "Mar",
    feContent: 67.1,
    targetFe: 68.0,
    siContent: 13.0,
    targetSi: 12.0,
    caContent: 8.3,
    targetCa: 8.0,
  },
  {
    month: "Apr",
    feContent: 69.3,
    targetFe: 68.0,
    siContent: 12.7,
    targetSi: 12.0,
    caContent: 8.6,
    targetCa: 8.0,
  },
  {
    month: "May",
    feContent: 66.9,
    targetFe: 68.0,
    siContent: 12.6,
    targetSi: 12.0,
    caContent: 8.4,
    targetCa: 8.0,
  },
  {
    month: "Jun",
    feContent: 68.8,
    targetFe: 68.0,
    siContent: 12.8,
    targetSi: 12.0,
    caContent: 8.7,
    targetCa: 8.0,
  },
  {
    month: "Jul",
    feContent: 67.5,
    targetFe: 68.0,
    siContent: 13.1,
    targetSi: 12.0,
    caContent: 8.2,
    targetCa: 8.0,
  },
];

const XRFContentChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Oxide Content Analysis (XRF)
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={xrfData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" unit="%" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="feContent"
              name="Fe₂O₃ Measured"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="targetFe"
              name="Fe₂O₃ Target"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="siContent"
              name="SiO₂ Measured"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="targetSi"
              name="SiO₂ Target"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="caContent"
              name="CaO Measured"
              stroke="#EC4899"
              fill="#EC4899"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="targetCa"
              name="CaO Target"
              stroke="#F472B6"
              fill="#F472B6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default XRFContentChart;
