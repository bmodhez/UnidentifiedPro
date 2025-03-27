import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Video Platform</h1>
      <p className="text-lg text-gray-300">This is a starting point for your platform.</p>
      
      <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold">
        Explore Videos
      </button>
    </div>
  );
};

export default App;
