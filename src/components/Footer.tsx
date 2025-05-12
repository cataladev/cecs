"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-10 w-full text-center">
      <p className="text-gray-400 text-sm">
        Made with ❤️ by <a 
          href="https://catala.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          Carlos
        </a>
      </p>
    </footer>
  );
};

export default Footer; 