// component/Home.tsx
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../firebase/firebaseConfig"; // Import the initialized app

function Home() {
  const auth = getAuth(app); // Use getAuth(app) to initialize the auth instance
  const [email, setEmail] = useState<string>("");
  const [displayName, setDisplayName] = useState<string | null>(null);

  // Fetch the user's information when the component is mounted
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || "User");
      setEmail(user.email || "");
    }
  }, [auth]);

  // Function to handle password reset
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div>
      <h2>Welcome, {displayName}!</h2> {/* Display user's name */}
      <p>Your email: {email}</p>
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
}

export default Home;
