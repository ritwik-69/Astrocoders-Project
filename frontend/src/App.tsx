// src/App.tsx
import { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <div>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
          </button>

          {isSignUp ? (
            <SignUp />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
