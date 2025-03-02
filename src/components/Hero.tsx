// import React from 'react';
import mun3 from "./../assets/mun3.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={mun3}
          // src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
          
          alt="Students speaking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Welcome to Orpheus Sabha Foundation
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
          Empowering youth through public speaking, debate, and leadership development
        </p>
        <a
          href="#about"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-all duration-300 animate-fade-in-delay-2"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;