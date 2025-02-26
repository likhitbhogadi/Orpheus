import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="relative">
        <div className="absolute -inset-10 bg-blue-500/30 blur-3xl rounded-full animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold text-black relative animate-fade-in">
          Orpheus Sabha Foundation
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;