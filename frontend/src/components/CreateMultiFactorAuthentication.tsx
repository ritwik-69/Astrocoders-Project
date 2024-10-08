import { User } from "@firebase/auth";
import { useRecaptcha } from "../hooks/useRecaptcha";
import { PhoneRegistration } from "../components/PhoneRegistration";
import { verifyPhoneNumber } from "../firebase/authentication";
import { useState } from "react";
import { CodeSignup } from "../components/CodeSignup";

type Props = {
  currentUser: User | null;
};
export function CreateMultiFactorAuthentication({ currentUser }: Props) {
  const recaptcha = useRecaptcha("sign-up");
  const [verificationCodeId, setVerificationCodeId] = useState<string | null>(
    null,
  );

  async function getPhoneNumber(phoneNumber: string) {
    if (!currentUser || !recaptcha) {
      return;
    }

    const verificationId = await verifyPhoneNumber(
      currentUser,
      phoneNumber,
      recaptcha,
    );
    // sms limitation exceded so had to do make some changes to make it functional :(
    if (!verificationId) {
      setVerificationCodeId("true");
    } else {
      setVerificationCodeId(verificationId);
      console.log(verificationId);
    }
  }

  return (
    <>
      {!verificationCodeId && (
        <PhoneRegistration getPhoneNumber={getPhoneNumber} />
      )}
      {verificationCodeId && currentUser && (
        <CodeSignup
          currentUser={currentUser}
          verificationCodeId={verificationCodeId}
        />
      )}
      <div id="sign-up"></div>
    </>
  );
}
