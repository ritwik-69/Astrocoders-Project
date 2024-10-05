import { useEffect } from "react";

import { useCurrentUser } from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { SignUp } from "../components/SignUp";

const SignUpPage = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser !== "loading") {
      navigate("/user");
    }
  }, [currentUser, navigate]);

  if (currentUser === "loading") {
    return <Loading />;
  }

  return <SignUp />;
};

export default SignUpPage;
