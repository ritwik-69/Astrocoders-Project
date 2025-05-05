import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

// Sample XRF data: Element concentrations (in %)
const xrfData = [
  {
    id: "SMP001",
    sample: "Sample 1",
    Fe: 7.2,
    Ca: 9.5,
    Mg: 5.6,
    status: "Analyzed",
    date: "2023-07-01",
  },
  {
    id: "SMP002",
    sample: "Sample 2",
    Fe: 6.9,
    Ca: 9.8,
    Mg: 5.3,
    status: "Pending",
    date: "2023-07-02",
  },
  {
    id: "SMP003",
    sample: "Sample 3",
    Fe: 7.5,
    Ca: 9.3,
    Mg: 5.9,
    status: "Analyzed",
    date: "2023-07-03",
  },
  {
    id: "SMP004",
    sample: "Sample 4",
    Fe: 7.1,
    Ca: 9.7,
    Mg: 5.7,
    status: "Pending",
    date: "2023-07-04",
  },
  {
    id: "SMP005",
    sample: "Sample 5",
    Fe: 7.3,
    Ca: 9.4,
    Mg: 5.8,
    status: "Analyzed",
    date: "2023-07-05",
  },
  {
    id: "SMP006",
    sample: "Sample 6",
    Fe: 7.0,
    Ca: 9.6,
    Mg: 5.5,
    status: "Pending",
    date: "2023-07-06",
  },
  {
    id: "SMP007",
    sample: "Sample 7",
    Fe: 7.4,
    Ca: 9.2,
    Mg: 5.8,
    status: "Analyzed",
    date: "2023-07-07",
  },
  {
    id: "SMP008",
    sample: "Sample 8",
    Fe: 7.1,
    Ca: 9.5,
    Mg: 5.7,
    status: "Pending",
    date: "2023-07-08",
  },
];

const XRFDataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSamples, setFilteredSamples] = useState(xrfData);

  const handleSearch = (e: any) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = xrfData.filter(
      (sample) =>
        sample.id.toLowerCase().includes(term) ||
        sample.sample.toLowerCase().includes(term),
    );
    setFilteredSamples(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          XRF Analysis Data
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search samples..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sample ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sample Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Fe (%)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ca (%)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Mg (%)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide divide-gray-700">
            {filteredSamples.map((sample) => (
              <motion.tr
                key={sample.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sample.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sample.sample}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sample.Fe.toFixed(2)}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sample.Ca.toFixed(2)}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {sample.Mg.toFixed(2)}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      sample.status === "Analyzed"
                        ? "bg-green-100 text-green-800"
                        : sample.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {sample.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {sample.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default XRFDataTable;
