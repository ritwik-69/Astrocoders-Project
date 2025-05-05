import { motion } from "framer-motion";
import { BarChart, Layers, FileText, Activity } from "lucide-react";

const XRF_INSIGHTS = [
  {
    icon: BarChart,
    color: "text-green-500",
    insight:
      "Iron (Fe) concentration has increased by 10% in Sample 2 compared to Sample 1, suggesting higher iron ore content.",
  },
  {
    icon: Layers,
    color: "text-blue-500",
    insight:
      "Silicon (Si) levels in Sample 1 are significantly higher than in Sample 2, indicating a difference in mineral composition.",
  },
  {
    icon: FileText,
    color: "text-purple-500",
    insight:
      "Calcium (Ca) shows a steady increase across all samples, potentially indicating an increase in carbonate minerals.",
  },
  {
    icon: Activity,
    color: "text-yellow-500",
    insight:
      "Magnesium (Mg) concentrations are lower in Sample 2, suggesting a difference in rock weathering processes.",
  },
];

const XRFAnalysisInsights = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        XRF Analysis Insights
      </h2>
      <div className="space-y-4">
        {XRF_INSIGHTS.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>
            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default XRFAnalysisInsights;
