"use client";

import React from 'react';
import Buttons from "@/components/Buttons";
import { cn } from "@/utils/cn";
import DisclaimerBanner from '@/components/DisclaimerBanner';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export default function HomeContent() {
  return (
    <>
      <main
        className={cn(
          "flex justify-center items-center",
          "min-h-screen",
          "bg-[#121212]",
          "p-4 sm:p-6",
          "relative overflow-hidden"
        )}
      >
        {/* Background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[#1A1A1A] opacity-70"></div>
        
        {/* Content */}
        <PageTransition>
          <div className="text-center stagger-fade-in">
            <p className="font-medium text-md text-white mb-2">
              welcome to
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold 
              bg-gradient-to-r from-[#FFD54F] to-[#C8A93E] 
              bg-clip-text text-transparent
              px-4 sm:px-0">
              CECS Community
            </h1>
            <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm px-4 sm:px-0">
              Join our Discord server for the unofficial CECS student community. 
              Connect with peers, share resources, and help build our knowledge base.
            </p>
          </div>
          <div className="mt-8 scale-in">
            <Buttons />
          </div>
        </PageTransition>
        <Footer />
      </main>
      <DisclaimerBanner />
    </>
  );
} 