
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center font-sans antialiased">
      <div className="relative w-full max-w-lg p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            Hello World
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Your live page is up and running successfully!
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
