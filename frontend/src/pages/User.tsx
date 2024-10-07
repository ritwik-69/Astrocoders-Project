import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import OverviewPage from "./OverviewPage";
import OrdersPage from "./OrdersPage";
import AnalyticsPage from "./AnalyticsPage";
import SettingsPage from "./SettingsPage";
import { useCurrentUser } from "../hooks/useCurrentUser"; // Adjust path if necessary
import { Loading } from "../components/Loading"; // Adjust path if necessary
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  if (currentUser === "loading") {
    return <Loading />;
  }

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <div className="flex flex-grow">
        {/* Main content area for nested routes */}
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}
