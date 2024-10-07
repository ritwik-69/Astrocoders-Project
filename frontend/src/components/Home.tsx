// src/App.tsx
import React from "react";
import Navbar from "../components/Navbar";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

const App: React.FC = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  if (currentUser === "loading") {
    return <Loading />;
  }

  if (currentUser) {
    navigate("/user");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background image */}
      <img
        src="/blackhole.jpg"
        alt="Black Hole"
        className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10"
      />

      {/* Main content area */}
      <Navbar />

      {/* Main content that grows to fill available space */}
      <main className="flex-grow flex justify-center items-center py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Your Project</h1>
        </div>
      </main>
    </div>
  );
};

export default App;
