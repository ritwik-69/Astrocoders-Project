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
        <div className="text-center text-Black max-w-2xl px-4">
          <h1 className="text-4xl font-black mb-8 uppercase tracking-wide">
            X-ray Burst Detection & Classification
          </h1>
          <p className="text-xl font-semibold leading-relaxed mb-6">
            Pushing the boundaries of astrophysical research by creating a
            cutting-edge model to detect, classify, and visualize X-ray bursts.
            We’re tackling the most extreme cosmic events, from Type I and II
            bursts to superbursts and solar flares.
          </p>
          <p className="text-xl font-medium italic opacity-90">
            Our mission: To unlock new insights into the universe’s most
            powerful phenomena.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
