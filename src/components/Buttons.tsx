"use client";

import React from 'react';
import { FaDiscord } from 'react-icons/fa';

export default function Buttons() {
  const buttons = [
    {
      href: 'https://discord.gg/sWCNrnFxq5',
      label: 'Join Discord',
      className: 'bg-[#5865F2] hover:bg-[#4752C4]',
      icon: <FaDiscord className="w-5 h-5 mr-2" />,
      isExternal: true
    }
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center mt-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => {
            window.open(button.href, '_blank', 'noopener,noreferrer');
          }}
          className={`${button.className} px-8 py-3 rounded-md font-medium transition-all duration-300 text-white text-base
            flex items-center justify-center hover:scale-105 shadow-lg hover:shadow-xl`}
        >
          {button.icon}
          {button.label}
        </button>
      ))}
    </div>
  );
}