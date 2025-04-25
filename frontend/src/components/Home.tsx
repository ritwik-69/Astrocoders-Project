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
        src="/geotech.jpeg"
        alt="Black Hole"
        className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10"
      />

      {/* Main content area */}
      <Navbar />

      {/* Main content that grows to fill available space */}
      <main className="flex-grow flex justify-center items-center py-20">
        <div className="text-center text-Black max-w-2xl px-4">
          <h1 className="text-4xl font-black mb-8 uppercase tracking-wide">
            X-ray Fluorescence (XRF) analysis
          </h1>
          <p className="text-xl font-semibold leading-relaxed mb-6">
            X-ray Fluorescence (XRF) analysis is a widely used technique for
            elemental identification and quantification in geological studies.
            It operates by bombarding a sample with high-energy X-rays, which
            causes the atoms in the material to emit secondary (fluorescent)
            X-rays. These emitted X-rays are characteristic of the elements in
            the sample, allowing for a precise elemental breakdown
          </p>
          <p className="text-xl font-medium italic opacity-90 mt-10">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Upload XRF Data file
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
