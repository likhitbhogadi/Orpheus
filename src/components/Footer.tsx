// import React from 'react';
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Mail size={20} />
              <a
                href="mailto:orpheussabhafoundation@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                orpheussabhafoundation@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a> */}
              {/* <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a> */}
              <a href="https://www.instagram.com/orpheus_sabha_foundation/" className="hover:text-blue-400 transition-colors" target="_blank">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/orpheus-sabha-foundation-b3a671256/?originalSubdomain=in" className="hover:text-blue-400 transition-colors" target="_blank">
                <LinkedIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MyOrpheusSabhaWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
