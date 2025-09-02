import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background blur effect
      setScrolled(currentScrollY > 50);
      
      // Header visibility logic
      if (currentScrollY < 100) {
        // Always show header at top of page
        setHeaderVisible(true);
      } else if (Math.abs(currentScrollY - lastScrollY) > 10) {
        // Only react to significant scroll movements
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          setHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setHeaderVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      setShowMenu(true);
    } else {
      const timeout = setTimeout(() => {
        setShowMenu(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest("#menu-burger") &&
        !event.target.closest("#sideMenu")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      // Always show header when navigating
      setHeaderVisible(true);
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90' : 'bg-transparent'
      } ${headerVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">N</span>
              </div>
            </Link>
          </div>

          {/* Spacer to push navigation to the right */}
          <div className="flex-1"></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mr-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-purple-400"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-4">
            <button
              id="menu-burger"
              onClick={toggleMenu}
              className="relative flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {showMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" />
          <div
            id="sideMenu"
            className={`absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              <nav className="flex-1 space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href.substring(1));
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}