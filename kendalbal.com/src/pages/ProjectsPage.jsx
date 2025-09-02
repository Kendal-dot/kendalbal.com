import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "GameGloom",
      status: "WIP",
      description: "Interactive platform for discovering video games with personalized recommendations based on user preferences.",
      image: "/projects/gamegloom.jpg",
      technologies: ["Python", "JavaScript", "React", "Tailwind CSS", "PostgreSQL"],
      links: {
        github: "https://github.com/yourusername/gamegloom",
        demo: "https://gamegloom.com"
      },
      featured: true
    },
    {
      id: 2,
      title: "Mental Health Dashboard",
      description: "Interactive data visualization tool analyzing mental health trends across demographics using Streamlit and Plotly.",
      image: "/projects/mental-health.jpg",
      technologies: ["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis"],
      links: {
        github: "https://github.com/yourusername/mental-health-dashboard",
        demo: "https://mental-health-dashboard.streamlit.app/"
      }
    },
    {
      id: 3,
      title: "DevOps-Enhanced Resume",
      description: "A modern resume website with comprehensive DevOps practices, automated CI/CD pipeline, and performance monitoring.",
      image: "/projects/resume-bg.svg",
      technologies: ["Jekyll", "GitHub Actions", "Docker", "CI/CD", "DevOps"],
      links: {
        github: "https://github.com/yourusername/resume",
        demo: "https://yourusername.github.io/resume/"
      }
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing capabilities for customer support automation.",
      image: "/projects/ai-chat.jpg",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "NLP"],
      links: {
        github: "https://github.com/yourusername/ai-chat-assistant",
        demo: "https://ai-chat-demo.com"
      }
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Vercel"],
      links: {
        github: "https://github.com/yourusername/ecommerce-platform",
        demo: "https://ecommerce-demo.vercel.app"
      }
    },
    {
      id: 6,
      title: "Weather Analytics App",
      description: "Real-time weather tracking with historical data analysis and predictive forecasting using ML models.",
      image: "/projects/weather-app.jpg",
      technologies: ["React", "Python", "FastAPI", "Machine Learning", "Charts.js"],
      links: {
        github: "https://github.com/yourusername/weather-analytics",
        demo: "https://weather-analytics.netlify.app"
      }
    }
  ];

  return (
    <section className="py-20 section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 px-4 transition-all duration-700 opacity-100 transform translate-y-0">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 dark:text-zinc-300">My Projects</h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient text-center leading-tight">
            Notable Projects
          </h3>
          
          <p className="text-stone-600 dark:text-zinc-400 text-center max-w-2xl mx-auto">
            Projects built with thoughtful code, clean structure, and a hint of creativity. Each one of these taught me something new and helped me grow as a developer.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {project.image && project.image !== "/projects/resume-bg.svg" ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white text-center">
                      <h4 className="text-xl font-bold">{project.title}</h4>
                    </div>
                  )}
                </div>
                
                {/* Status badges */}
                {project.status && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-medium rounded-md flex items-center gap-1 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3" fill="currentColor">
                      <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                    </svg>
                    {project.status}
                  </div>
                )}

                {project.featured && (
                  <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-medium rounded-md flex items-center gap-1 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
                    </svg>
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-500 dark:group-hover:from-indigo-400 dark:group-hover:to-indigo-500 group-hover:bg-clip-text transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="group inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm transition-all duration-300">
            View More Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}