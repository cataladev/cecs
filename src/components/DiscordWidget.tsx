"use client";

import React, { useRef, useEffect } from 'react';

interface DiscordWidgetProps {
  serverId?: string;
  inviteCode?: string;
  theme?: 'dark' | 'light';
  width?: number | string;
  height?: number | string;
}

export default function DiscordWidget({
  serverId = '1371563000791564331',
  theme = 'dark',
  width = '100%',
  height = '480'
}: DiscordWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.setAttribute('allowtransparency', 'true');
    }
  }, []);

  return (
    <div className="scale-in w-full rounded-lg overflow-hidden shadow-xl bg-[#2c2f33]">
      <iframe
        ref={iframeRef}
        src={`https://discord.com/widget?id=${serverId}&theme=${theme}`}
        width={width}
        height={height}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        title="Discord Widget"
        className="mx-auto"
      ></iframe>
    </div>
  );
} 