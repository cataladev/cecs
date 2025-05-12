import React from 'react';

const DisclaimerBanner = () => {
  return (
    <div className="bg-[#222222] py-2.5 text-center fixed bottom-0 w-full z-20 backdrop-blur-sm bg-opacity-90 border-t border-gray-800">
      <p className="text-xs text-gray-300">
        Unofficial community resource • Not affiliated with UCF
      </p>
    </div>
  );
};

export default DisclaimerBanner; 