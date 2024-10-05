import { useCurrentUser } from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { CreateMultiFactorAuthentication } from "../components/CreateMultiFactorAuthentication";

export default function MFAPage() {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  if (currentUser === "loading") {
    return <Loading />;
  }

  if (!currentUser) {
    navigate("/login");
  }

  return <CreateMultiFactorAuthentication currentUser={currentUser} />;
}
