import React from "react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      skills: ["Python", "JavaScript", "React", "Tailwind CSS", "FastAPI"]
    },
    {
      title: "Database & Data Analysis", 
      skills: ["PostgreSQL", "SQLAlchemy", "Alembic", "Pandas / NumPy", "Database Design"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "GitHub Actions", "AWS (EC2, RDS, S3)", "Ansible / Terraform", "Linux & Bash"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "Scikit-learn", "Matplotlib / Seaborn", "Hugging Face", "Generative AI (RAG / LLMs)"]
    }
  ];

  const additionalSkills = [
    {
      category: "Frontend Technologies",
      items: ["React", "Next.js", "Vue.js", "TypeScript", "HTML5/CSS3", "Responsive Design"]
    },
    {
      category: "Backend Technologies", 
      items: ["Node.js", "Python", "FastAPI", "Express.js", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "Database Design"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "VS Code", "Figma", "Postman", "Jest", "Agile/Scrum"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "🏆"
    },
    {
      name: "Machine Learning Specialization", 
      issuer: "Stanford University",
      date: "2023",
      icon: "🎓"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023", 
      icon: "⚛️"
    }
  ];

  return (
    <section className="py-24 section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in opacity-0 px-4">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 dark:text-zinc-300">My Skills</h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient">Skills & Tools</h3>
          
          <p className="text-stone-600 dark:text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Here's what I've been working with lately. These are the tools and technologies I use to build full-stack applications, automate workflows, and explore AI.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white dark:bg-zinc-900/90 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 relative z-40"
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-500 bg-clip-text text-transparent">
                {category.title}
              </h4>
              
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 dark:text-green-400 w-4 h-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extended Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Complete Technology Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((category, index) => (
              <div 
                key={category.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Professional Experience
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Senior Full-Stack Developer",
                    company: "Tech Company",
                    period: "2023 - Present",
                    description: "Leading development of AI-powered applications and managing cloud infrastructure."
                  },
                  {
                    title: "DevOps Engineer", 
                    company: "Previous Company",
                    period: "2022 - 2023",
                    description: "Implemented CI/CD pipelines and managed AWS infrastructure for scalable applications."
                  },
                  {
                    title: "Software Developer",
                    company: "Startup",
                    period: "2021 - 2022", 
                    description: "Built full-stack web applications using React, Node.js, and PostgreSQL."
                  }
                ].map((job, index) => (
                  <div key={job.title} className="relative flex items-center">
                    <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full transform md:-translate-x-1/2 border-4 border-white dark:border-gray-900"></div>
                    <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'} bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? 'md:mr-1/2' : ''}`}>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {job.company} • {job.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Get In Touch
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/Kendal_Bal_CV_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-400 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors duration-200"
            >
              Download Resume
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}