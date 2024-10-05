import { MultiFactorResolver } from "@firebase/auth";
import { Code } from "../components/Code";
import { verifyUserEnrolled } from "../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { notify } from "../utils/notify";

type Props = {
  verificationId: string;
  resolver: MultiFactorResolver;
};

export function CodeSignIn({ verificationId, resolver }: Props) {
  const navigate = useNavigate();

  async function getCode(code: string) {
    const response = await verifyUserEnrolled(
      {
        verificationId,
        resolver,
      },
      code,
    );

    if (response) {
      await navigate("/user");
    } else {
      notify("Something went wrong.");
    }
  }

  return <Code getCode={getCode} />;
}
