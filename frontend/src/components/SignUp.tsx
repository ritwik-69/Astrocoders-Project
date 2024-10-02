// src/component/SignUp.tsx
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { app } from "../firebaseConfig";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName: displayName });
      setUser(userCredential.user);
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log("User signed up with Google:", result.user);
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <div>
      {user ? (
        <h2>Welcome {user.displayName || "User"}</h2>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
        </div>
      )}
    </div>
  );
}

export default SignUp;
