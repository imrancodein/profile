// src/components/SkillsPage.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SkillsPage = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.1,    // When 10% of the section is visible
  });

  // Array of skills with their names and icon URLs
  // REMINDER: Replace these placeholder URLs with actual URLs to your skill icons
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    // Add more skills as needed
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    {name: 'Generative AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'},
    {name: 'DSA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'}
  ];

  return (
    
    <section name="skills"
      ref={sectionRef} // Section ref for overall animation
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 py-16 px-4 md:px-8"
    >
      {/* Section Heading */}
      <h2
        className={`text-4xl md:text-5xl font-bold font-serif mb-12 text-center
          transition-all duration-700 ease-out delay-100
          ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-md
              transition-all duration-700 ease-out transform hover:scale-105
              ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            // Stagger animation delay for each skill item
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3 object-contain" />
            <p className="text-lg font-medium text-gray-700 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;