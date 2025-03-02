// import React from 'react';
import { Menu, X } from 'lucide-react';

import companyLogo from './../assets/orpheusLogo.jpeg';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/50 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-black flex items-center space-x-2">
            <img 
              src={companyLogo}
              alt="Logo" 
              className="h-15 w-14 mr-2 inline-block
                border-2 border-blue-500 rounded-full
                shadow-md
                " 
            />
            Orpheus Sabha Foundation
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`
            md:flex items-center space-x-8
            ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white p-4 shadow-lg' : 'hidden md:flex'}
          `}>
            <a href="#about" className="nav-link" >About</a>
            <a href="#events" className="nav-link" >Events</a>
            <a href="#team" className="nav-link" >Team</a>
            <a href="#contact" className="nav-link" >Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;