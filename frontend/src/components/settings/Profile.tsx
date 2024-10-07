import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";

const Profile = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

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
      <div className="flex flex-col sm:flex-row items-center mb-6">
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
          </p>{" "}
          {/* Use the user's email or a fallback */}
        </div>
      </div>
    </SettingSection>
  );
};

export default Profile;
