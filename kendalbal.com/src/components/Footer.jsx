import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Uppdaterade sociala länkar (utan Twitter)
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/kendal-dot",
      ariaLabel: "Kendal Bal på GitHub",
      title: "GitHub – kendal-dot",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kendal-bal-bb0841176/",
      ariaLabel: "Kendal Bal på LinkedIn",
      title: "LinkedIn – Kendal Bal",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className={`font-inter transition-colors duration-300 ${
        isDarkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-12 pb-16">
        {/* Sociala länkar */}
        <nav
          className="mb-6 flex items-center justify-center gap-6"
          aria-label="Social links"
        >
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              title={item.title}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:text-purple-400 ${
                isDarkMode ? "text-gray-400 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="text-center">
          <p
            className={`text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto tracking-wide ${
              isDarkMode ? "text-gray-400" : "text-gray-800"
            }`}
          >
            Built in{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold hover:text-purple-400 hover:text-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
              title="Visual Studio Code"
            >
              Visual Studio Code
            </a>{" "}
            with a focus on quality and ❤️
            <br />
            Powered by{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold hover:text-purple-400 hover:text-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
              title="React"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold hover:text-purple-400 hover:text-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
              title="Vite"
            >
              Vite
            </a>
            , and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold hover:text-purple-400 hover:text-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
              title="Tailwind CSS"
            >
              Tailwind
            </a>
            , and deployed with{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold hover:text-purple-400 hover:text-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
              title="Vercel"
            >
              Vercel
            </a>
            .
            <br />
            Set in the{" "}
            <a
              href="https://rsms.me/inter/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold hover:text-purple-400 hover:text-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
              title="Inter typeface"
            >
              Inter
            </a>{" "}
            typeface, because it simply looks right.
          </p>
        </div>
      </div>
    </footer>
  );
}
