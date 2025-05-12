"use client";

import React from 'react';
import Buttons from "@/components/Buttons";
import { cn } from "@/utils/cn";
import DisclaimerBanner from '@/components/DisclaimerBanner';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import DiscordWidget from '@/components/DiscordWidget';

export default function HomeContent() {
  return (
    <>
      <main
        className={cn(
          "flex justify-center items-center",
          "min-h-screen",
          "bg-[#121212]",
          "px-4 py-12 sm:py-16",
          "relative overflow-hidden"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[#1A1A1A] opacity-70"></div>
        
        <PageTransition>
          <div className="container max-w-6xl mx-auto pb-24">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left stagger-fade-in">
                <p className="font-medium text-md text-white mb-2">
                  Welcome To The
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold 
                  bg-gradient-to-r from-[#FFD54F] to-[#C8A93E] 
                  bg-clip-text text-transparent">
                  CECS Community
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold 
                  bg-gradient-to-r from-[#FFD54F] to-[#C8A93E] 
                  bg-clip-text text-transparent mb-4">
                  Discord
                </h1>
                <p className="text-gray-400 mb-8 max-w-lg text-sm">
                  Join our Discord server for the unofficial CECS student community. 
                  Connect with peers, share resources, and help build our knowledge base.
                </p>
                
                <div className="scale-in" style={{ animationDelay: '0.7s' }}>
                  <Buttons />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 fade-in">
                <div className="max-w-md mx-auto lg:ml-auto lg:mr-0">
                  <DiscordWidget height="480" />
                </div>
              </div>
            </div>
          </div>
        </PageTransition>
        <Footer />
      </main>
      <DisclaimerBanner />
    </>
  );
} 