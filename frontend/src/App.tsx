import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import your Home component
import SignUpPage from "./pages/Sign-up"; // Adjust the import path as necessary
import UserPage from "./pages/User";
import LoginPage from "./pages/Login";
import MFAPage from "./pages/Mfa";
import ResetPasswordPage from "./pages/ResetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/user/*" element={<UserPage />} />{" "}
        {/* Use /* to catch all nested routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mfa" element={<MFAPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default App;
