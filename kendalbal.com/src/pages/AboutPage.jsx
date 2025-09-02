import React from "react";

export default function AboutPage() {
  return (
    <section className="py-24 section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-3/4 sm:w-3/5 md:w-1/2 lg:w-2/5 max-w-md animate-fade-in opacity-0" 
               style={{animationDelay: '0.2s'}}>
            <div className="relative z-40">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600">
                  <img 
                    alt="Profile" 
                    className="rounded-xl object-cover w-full aspect-square md:aspect-auto" 
                    src="/profile.jpg" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 animate-fade-in opacity-0" 
               style={{animationDelay: '0.3s'}}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
              <span className="text-stone-700 dark:text-zinc-300">About Me</span>
            </h2>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient leading-tight">
              Where Logic Meets Creativity
            </h3>
            
            <div className="text-stone-600 dark:text-zinc-400 space-y-4 mb-10">
              <p>
                I'm a developer who enjoys the sweet spot between <span className="font-semibold">logic</span> and <span className="font-semibold">creativity</span>, 
                where thoughtful code meets meaningful design. Whether it's architecting <span className="font-semibold">backend systems</span>, 
                shaping <span className="font-semibold">clean user flows</span>, or experimenting with <span className="font-semibold">AI</span>, 
                I find joy in building systems that are both <span className="font-semibold">intelligent</span> and <span className="font-semibold">intuitive</span>.
              </p>
              
              <p>
                I have a background in <span className="font-semibold">DevOps</span>, including experience as a DevOps engineer, 
                where I developed a strong foundation in <span className="font-semibold">automation</span>, 
                <span className="font-semibold">infrastructure</span>, and <span className="font-semibold">deployment workflows</span>. 
                Right now, I'm diving deeper into <span className="font-semibold">AI</span> and 
                <span className="font-semibold">Machine Learning</span> through ongoing studies, adding more intelligence to my skill set, 
                and exploring how these tools can enhance the products I build.
              </p>
              
              <p>
                One project I'm especially proud of is <span className="font-semibold">GameGloom</span>, 
                a full-stack web app I created to explore the intersection of <span className="font-semibold">gaming</span>, 
                <span className="font-semibold">data</span>, and <span className="font-semibold">AI</span>. 
                Starting with a simple concept, I developed it into something <span className="font-semibold">real</span>, 
                <span className="font-semibold">usable</span>, and <span className="font-semibold">polished</span>. 
                This experience deepened my interest in creating tools that deliver genuine value to users.
              </p>
              
              <p>
                Outside of coding, I'm into <span className="font-semibold">gaming</span>, 
                <span className="font-semibold">fitness</span>, and exploring new <span className="font-semibold">cultures</span>. 
                These help me stay inspired and keep growing, both as a person and a developer.
              </p>
            </div>
            
            {/* Skills preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'JavaScript/TypeScript',
                'React/Next.js',
                'Python',
                'Node.js',
                'AWS/Docker',
                'Machine Learning'
              ].map((skill, index) => (
                <div key={skill} className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}