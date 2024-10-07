import { useState } from "react";
import { Login } from "../components/Login";
import {
  login,
  signInWithGithub,
  signInWithGoogle,
  verifyUserMFA,
} from "../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { notify } from "../utils/notify";
import { useRecaptcha } from "../hooks/useRecaptcha";
import { MultiFactorResolver } from "firebase/auth";
import { CodeSignIn } from "../components/CodeSignIn";

export default function LoginPage() {
  const navigate = useNavigate();
  const recaptcha = useRecaptcha("sign-in");
  const [verificationId, setVerificationId] = useState<string>();
  const [resolver, setResolver] = useState<MultiFactorResolver>();

  async function loginWithGoogle() {
    const response = await signInWithGoogle();
    if (response === true) {
      await navigate("/mfa");
    } else {
      await handleMFA(response);
    }
  }

  async function loginWithEmailAndPassword(email: string, password: string) {
    const response = await login(email, password);
    if (response === true) {
      await navigate("/mfa");
    } else {
      await handleMFA(response);
    }
  }

  async function handleMFA(response: any) {
    if (response.code === "auth/multi-factor-auth-required" && recaptcha) {
      const data = await verifyUserMFA(response, recaptcha, 0);
      if (!data) {
        notify("Something went wrong.");
      } else {
        const { verificationId, resolver } = data;
        setVerificationId(verificationId);
        setResolver(resolver);
      }
    } else {
      notify("Something went wrong");
    }
  }

  return (
    <>
      {!verificationId && !resolver && (
        <Login
          loginWithGoogle={loginWithGoogle}
          loginWithGithub={signInWithGithub}
          loginWithEmailAndPassword={loginWithEmailAndPassword}
        />
      )}
      {verificationId && resolver && (
        <CodeSignIn verificationId={verificationId} resolver={resolver} />
      )}
      <div id="sign-in"></div>
    </>
  );
}
