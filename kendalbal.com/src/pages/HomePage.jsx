import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const foodiSaveImages = [
    { src: "/foodisave/foodisave_startsida.png", title: "FoodiSave - Startsida" },
    { src: "/foodisave/foodisave_minarecept.png", title: "FoodiSave - Mina Recept" },
    { src: "/foodisave/foodisave_digitalakocken.png", title: "FoodiSave - Digitala Kocken" },
    { src: "/foodisave/foodisave_provagratis.png", title: "FoodiSave - Prova Gratis" }
  ];
  const totalImages = foodiSaveImages.length;

  // Mouse move listener (for flashlight)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Carousel progress & auto-advance
  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
          return 0;
        }
        return prev + 100 / 30; // 3000ms / 100ms = 30 steps
      });
    }, 100);
    return () => clearInterval(progressInterval);
  }, [currentImageIndex, totalImages]);

  // Simulate initial loading spinner
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative z-0 bg-gray-950 text-white">
      {/* Inline CSS for effects (no external file needed) */}
      <style>{`
        .mouse-flashlight {
          pointer-events: none;
          position: fixed;
          width: 1200px;
          height: 1200px;
          margin-left: -600px;
          margin-top: -600px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(120, 119, 198, 0.18), rgba(120, 119, 198, 0) 70%);
          mix-blend-mode: screen;
          transition: transform 0.04s linear;
          z-index: 0;
        }
        .text-gradient {
          background-image: linear-gradient(90deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s forwards ease;
        }
        @keyframes fadeIn {
          to { opacity: 1; transform: none; }
        }
        .hover-lift { transform: translateY(0); }
        .hover-lift:hover { transform: translateY(-2px); }
      `}</style>

      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-30 transition duration-300"
        style={{
          background:
            "radial-gradient(600px at 864px 322px, rgba(139, 92, 246, 0.15), transparent 80%)",
        }}
      />

      {/* Mouse flashlight effect */}
      <div
        className="mouse-flashlight"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p
                className="text-lg font-medium text-indigo-400 mb-4 animate-fade-in opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                Hello, World! I'm
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="inline-block text-gradient leading-tight">
                  Kendal Bal
                </span>
              </h1>

              <h2
                className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-8 animate-fade-in opacity-0 font-normal"
                style={{ animationDelay: "0.6s" }}
              >
                AI Developer & Creative Problem Solver
              </h2>

              <p
                className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in opacity-0"
                style={{ animationDelay: "0.8s" }}
              >
                I build systems that simplify complexity. Through automation, web development,
                and AI, I make technology smarter and life easier.
              </p>

              {/* Social Links */}
              <div
                className="flex justify-center lg:justify-start gap-5 mb-10 animate-fade-in opacity-0"
                style={{ animationDelay: "0.9s" }}
              >
                <a
                  href="https://github.com/kendal-dot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  {/* GitHub icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-6 h-6 fill-current">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/kendal-bal-bb0841176/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>

                <div className="w-px h-6 bg-zinc-700"></div>

                <a
                  href="/Kendal_Bal_CV_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  {/* File icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                  </svg>
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* FoodiSave Project Showcase with Image Carousel */}
            <div
              className="w-full lg:w-1/2 lg:flex-1 animate-fade-in opacity-0"
              style={{ animationDelay: "1.2s" }}
            >
              <div
                className="relative h-[320px] sm:h-[360px] md:h-[400px] w-full mx-auto mb-12"
                style={{ perspective: "1000px" }}
              >
                {/* Image Carousel with Card Stack Effect */}
                <div className="relative h-full w-full">
                  {foodiSaveImages.map((image, index) => {
                    const isActive = index === currentImageIndex;
                    const isNext = index === (currentImageIndex + 1) % totalImages;
                    const isPrev = index === (currentImageIndex - 1 + totalImages) % totalImages;

                    let zIndex, transform, opacity, filter;
                    if (isActive) {
                      zIndex = 40;
                      transform = "translateY(0px) translateX(0px) scale(1) rotate(0deg)";
                      opacity = 1;
                      filter = "blur(0px)";
                    } else if (isNext) {
                      zIndex = 30;
                      transform = "translateY(8px) translateX(24px) scale(0.95) rotate(3deg)";
                      opacity = 0.8;
                      filter = "blur(1px)";
                    } else if (isPrev) {
                      zIndex = 20;
                      transform = "translateY(16px) translateX(-20px) scale(0.9) rotate(-2deg)";
                      opacity = 0.6;
                      filter = "blur(1.5px)";
                    } else {
                      zIndex = 10;
                      transform = "translateY(24px) translateX(12px) scale(0.85) rotate(1deg)";
                      opacity = 0.4;
                      filter = "blur(2px)";
                    }

                    return (
                      <div
                        key={index}
                        className="absolute inset-0 transition-all duration-700 ease-in-out rounded-xl overflow-hidden shadow-lg"
                        style={{
                          zIndex,
                          transform,
                          opacity,
                          filter,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-full rounded-xl relative overflow-hidden border border-gray-700 group">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover rounded-xl"
                            loading="lazy"
                          />

                          {/* Featured badge - only show on active image */}
                          {isActive && (
                            <div className="absolute top-0 right-0 z-50">
                              <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-medium rounded-md flex items-center gap-1 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-xs font-medium text-yellow-900">Featured Project</span>
                              </div>
                            </div>
                          )}

                          {/* View Project hover overlay */}
                          <div className="absolute inset-0 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <a
                              href="https://www.foodisave.se"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-4 left-4 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20"
                            >
                              <span className="text-white font-medium">View Project</span>
                              <svg
                                className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Loading Spinner */}
                {isLoading && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-500">
                    <div className="w-6 h-6 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-50">
                  <div className="h-1 bg-white/20 rounded-b-xl overflow-hidden">
                    <div
                      className="h-full bg-purple-500 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                {/* Previous */}
                <button
                  onClick={() => {
                    const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
                    setCurrentImageIndex(prevIndex);
                    setProgress(0);
                  }}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-1.5">
                  {foodiSaveImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setProgress(0);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-purple-500" : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={() => {
                    const nextIndex = (currentImageIndex + 1) % totalImages;
                    setCurrentImageIndex(nextIndex);
                    setProgress(0);
                  }}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 section-padding relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div
              className="w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3 max-w-xs animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative z-40">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-500">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                      <img
                        src="/kendal_bal.jpg"
                        alt="Kendal Bal - Profile Picture"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="lg:w-3/5 animate-fade-in opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
                <span className="text-zinc-300">About Me</span>
              </h2>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient leading-tight">
                Where Logic Meets Creativity
              </h3>

              <div className="text-zinc-400 space-y-4 mb-10 text-lg leading-relaxed">
                <p>
                  I'm a developer who enjoys the sweet spot between logic and creativity, where thoughtful code meets meaningful design.
                  I like architecting clear backends, shaping clean user flows, and exploring how AI can make products both
                  intelligent and intuitive.
                </p>
                <p>
                  I'm currently in the Python Developer in AI program at Nackademin (2024–2026), where I earned top grades (VG) in my
                  first year. I'm diving deeper into AI and machine learning, continuously adding intelligence to my skill set and
                  exploring how these tools can enhance the products I build. I also serve as the student representative on the
                  program's management board.
                </p>
                <p>
                  Before tech, I led teams at IKEA (2018–2024), finishing as Department Manager. That gave me real experience in operations,
                  HR processes, and building high-performing, people-first teams, skills I now bring to product and engineering work.
                </p>
                <p>
                  I'm looking for an AI Developer internship from Oct 27, 2025 – Apr 26, 2026, in a collaborative environment that values
                  creativity and technical rigor. I'll contribute with curiosity, humility, and fresh AI knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (compact list) */}
      <section id="projects" className="py-20 section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 px-4">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300">My Projects</h2>
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient text-center leading-tight">
              Notable Projects
            </h3>

            <p className="text-zinc-400 text-center max-w-2xl mx-auto">
              Projects built with thoughtful code, clean structure, and a hint of creativity.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {[
              {
                id: 1,
                title: "Foodisave",
                description:
                  "AI-Powered Recipe Management Platform. A full-stack web application that helps reduce food waste by suggesting recipes based on ingredient detection from images, featuring AI-powered recipe generation, smart shopping list creation, and a chatbot for recipe questions.",
                technologies: ["Python", "JavaScript", "React", "Tailwind CSS", "PostgreSQL"],
                featured: true,
              },
              {
                id: 2,
                title: "Mental Health Dashboard",
                description:
                  "Interactive data visualization tool analyzing mental health trends across demographics using Streamlit and Plotly.",
                technologies: ["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis"],
              },
              {
                id: 3,
                title: "AI Chat Assistant",
                description:
                  "Intelligent chatbot with natural language processing capabilities for customer support automation.",
                technologies: ["Python", "TensorFlow", "React", "Node.js", "NLP"],
              },
            ].map((project, index) => (
              <div
                key={project.id}
                className="group relative flex flex-row gap-8 items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Preview */}
                <div className="relative w-80 h-48 overflow-hidden rounded-xl flex-shrink-0">
                  {project.id === 1 ? (
                    <img 
                      src="/foodisave/foodisave_startsida.png" 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-purple-600 to-blue-500 w-full h-full flex items-center justify-center rounded-xl">
                      <div className="text-white text-center">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        {project.status && <p className="text-sm text-purple-100 mt-1">{project.status}</p>}
                      </div>
                    </div>
                  )}

                  {project.featured && (
                    <div className="absolute top-0 left-0 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-medium rounded-md flex items-center gap-1 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-md border border-purple-400/30 bg-transparent text-purple-400 shadow-[0_0_8px_rgba(147,51,234,0.6)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/Kendal-dot/foodisave" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>

                    <a 
                      href="https://www.foodisave.se" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 section-padding relative overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in opacity-0 px-4">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300">My Skills</h2>
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient">Skills & Tools</h3>

            <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
              Here's what I've been working with lately. These are the tools and technologies I use to build full-stack applications,
              automate workflows, and explore AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-16">
            {[
              {
                title: "Full-Stack Development",
                skills: ["Python", "JavaScript", "React", "Tailwind CSS", "FastAPI"],
              },
              {
                title: "Database & Data Analysis",
                skills: ["PostgreSQL", "SQLAlchemy", "Alembic", "Pandas / NumPy", "Database Design"],
              },
              {
                title: "DevOps & Cloud",
                skills: ["Docker", "GitHub Actions", "AWS (EC2, RDS, S3)", "Ansible / Terraform", "Linux & Bash"],
              },
              {
                title: "AI & Machine Learning",
                skills: ["PyTorch", "Scikit-learn", "Matplotlib / Seaborn", "Hugging Face", "Generative AI (RAG / LLMs)"],
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className="bg-gray-900/90 rounded-2xl p-5 border border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 relative z-40"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                  {category.title}
                </h4>

                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-green-400 w-4 h-4 flex-shrink-0 mt-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300">Contact Me</h2>
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-gradient leading-tight">
              Let's Work Together
            </h3>

            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Have a project in mind, something you want to build together, or simply want to connect? Feel free to reach out! I'm always open to a good conversation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid gap-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email",
                    detail: "nabilelbajdii@gmail.com",
                    link: "mailto:nabilelbajdii@gmail.com",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Location",
                    detail: "Stockholm, Sweden",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-400">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      {item.link ? (
                        <a href={item.link} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h4 className="text-2xl font-bold text-white mb-6">Ready to start a conversation?</h4>
                <p className="text-gray-300 mb-8">
                  I'm currently available for freelance work and open to discussing new opportunities. Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
                <a
                  href="mailto:nabilelbajdii@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 font-medium"
                >
                  Say Hello!
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
