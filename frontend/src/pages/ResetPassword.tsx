import { useCurrentUser } from "../hooks/useCurrentUser";
import { Loading } from "../components/Loading";
import { ResetPassword } from "../components/ResetPassword";

export default function ResetPasswordPage() {
  const currentUser = useCurrentUser();

  if (currentUser === "loading") {
    return <Loading />;
  }

  return <ResetPassword />;
}
