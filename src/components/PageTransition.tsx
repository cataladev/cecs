import React, { useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    const page = document.getElementById("page");
    if (page) {
      setTimeout(() => {
        page.classList.remove('page-transition');
      }, 100); 
    }
  }, []);

  return (
    <div id="page" className="page-transition z-10 w-full max-w-md mx-auto">
      {children}
    </div>
  );
} 