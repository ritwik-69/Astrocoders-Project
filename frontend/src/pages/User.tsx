import { UserComponent } from "../components/User"; // Adjust path if necessary
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

  return <UserComponent currentUser={currentUser} />;
}
