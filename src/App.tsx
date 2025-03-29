import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Your Video Platform
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-lg">
        This is a starting point for your platform. Enjoy a seamless video experience.
      </p>

      <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
        Explore Videos
      </button>
    </div>
  );
};

export default App;
