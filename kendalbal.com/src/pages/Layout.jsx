import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  const [fadeValue, setFadeValue] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const update = () => {
        const maxScroll = 200;
        const scrollTop = window.scrollY || 0;
        const newFade = Math.min(scrollTop / maxScroll, 1);
        setFadeValue(newFade);
        ticking = false;
      };

      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Passive scroll listener for better input performance (INP)
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
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
      {/* Skip link to main content for accessibility (helps overall quality signals) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] px-3 py-2 rounded-md bg-black/80 text-white dark:bg-white/90 dark:text-black"
      >
        Skip to content
      </a>

      <Header />

      {/* Decorative gradients (hidden from assistive tech) */}
      <div
        aria-hidden="true"
        className="fixed top-[-30%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl opacity-60 dark:opacity-30 -z-40"
      />
      <div
        aria-hidden="true"
        className="fixed bottom-[-10%] left-[-5%] w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-400/20 blur-3xl opacity-60 dark:opacity-30 -z-40"
      />

      {/* Main landmark improves document structure comprehension */}
      <main id="main-content" role="main" aria-label="Main content" className="relative flex-1">
        {/* Overlay that appears on scroll (decorative) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 w-full h-20 z-40"
          style={overlayStyle}
        />

        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
