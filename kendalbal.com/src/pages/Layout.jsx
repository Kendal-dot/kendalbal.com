import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  const [fadeValue, setFadeValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200;
      const scrollTop = window.scrollY;
      const newFade = Math.min(scrollTop / maxScroll, 1);
      setFadeValue(newFade);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayStyle = {
    background: `linear-gradient(
      to bottom, 
      rgba(15,23,42,${0.8 * fadeValue}) 0%, 
      transparent 100%
    )`,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-zinc-900/90 font-inter">
      <Header />
      
      {/* Gradient overlays for visual effects */}
      <div className="fixed top-[-30%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl opacity-60 dark:opacity-30 -z-40"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-400/20 blur-3xl opacity-60 dark:opacity-30 -z-40"></div>
      
      <div id="main-content" className="relative flex-1">
        {/* Overlay that appears on scroll */}
        <div 
          className="pointer-events-none fixed top-0 left-0 w-full h-20 z-40"
          style={overlayStyle}
        />
        
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;