import { Code } from "../components/Code";
import { User } from "@firebase/auth";
import { enrollUser } from "../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { notify } from "../utils/notify";

type Props = {
  currentUser: User;
  verificationCodeId: string;
};

export function CodeSignup({ currentUser, verificationCodeId }: Props) {
  const navigate = useNavigate();

  async function getCode(code: string) {
    const response = await enrollUser(currentUser, verificationCodeId, code);

    if (response) {
      navigate("/user");
    } else {
      notify("Something went wrong.");
    }
  }

  return <Code getCode={getCode} />;
}
