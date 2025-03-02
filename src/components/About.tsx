import React from 'react';
import { Speech } from 'lucide-react';

import companyLogo from './../assets/orpheusLogo.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            {/* <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
              <Speech size={64} className="text-blue-600" />
            </div> */}
              <img 
                src={companyLogo}
                alt="Logo" 
                className="h-24 w-24 mr-2 mt-8 inline-block
                  border-2 border-blue-500 rounded-full
                  shadow-md
                  "
              />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 mt-12 animate-glow">About Us</h2>
            <p className="text-gray-700 mb-4">
              Orpheus Sabha Foundation is dedicated to empowering India's youth through public speaking,
              debate, and leadership development. We provide a vibrant platform where young minds can
              express their views, enhance their research capabilities, and develop essential skills.
            </p>
            <p className="text-gray-700">
              Our mission focuses on fostering a holistic, inclusive, and diverse community where
              tomorrow's leaders can develop crucial abilities in strategy-making, negotiation,
              decision-making, and diplomacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;