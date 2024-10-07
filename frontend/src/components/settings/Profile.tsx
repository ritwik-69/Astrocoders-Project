import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";
import { logout } from "../../firebase/authentication";

const Profile = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate("/"); // Redirect to login after successful logout
    } else {
      console.error("Error logging out");
    }
  };

  // Check if the current user is still loading or null
  if (currentUser === "loading") {
    return <Loading />; // Optionally show a loading state
  }

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 w-full">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            src={
              currentUser.photoURL ||
              "https://randomuser.me/api/portraits/men/3.jpg"
            } // Use the user's profile picture or a fallback
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-100">
              {currentUser.displayName || "John Doe"}
            </h3>{" "}
            {/* Use the user's name or a fallback */}
            <p className="text-gray-400">
              {currentUser.email || "john.doe@example.com"}
            </p>
          </div>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
          transition duration-200 sm:ml-4 mt-4 sm:mt-0"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </SettingSection>
  );
};

export default Profile;
