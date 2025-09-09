import React from 'react';
import { motion } from 'framer-motion';
import web from '../assets/web.PNG'
import portfolio from '../assets/portfolio.PNG'
import weather from '../assets/weather.PNG'
import webdev from '../assets/webdev.PNG'

// --- Placeholder Project Data ---
const projectsData = [
  {
    id: 1,
    image: web,
    title: ' Computer Institute Website',
    description: 'Developed a responsive Computer Institute Website with course details, admission form, and faculty info — built using MERN stack for a smooth digital experience.',
    liveLink: 'https://realcomputers-1.onrender.com/',
  },
  {
    id: 2,
    image: portfolio,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing web development skills and previous projects built with React.',
    liveLink: 'https://profile-fawn-sigma.vercel.app/',
  },
  {
    id: 3,
    image: webdev,
    title: 'Modern Web Development Showcase',
    description: 'A responsive and interactive web application built with React, Tailwind CSS, and modern web technologies.',
    liveLink: 'https://webdev-imran.vercel.app/',
  },
  {
    id: 4,
    image: '/images/project4.png',
    title: 'Blog Platform',
    description: 'A simple blog platform allowing users to create, read, update, and delete posts.',
    liveLink: 'https://www.example-blog.com',
  },
  {
    id: 5,
    image: weather,
    title: 'Weather Dashboard',
    description: 'An interactive weather application fetching data from a third-party API to display forecasts.',
    liveLink: 'https://imran2454.github.io/weatherApplication/',
  },
  {
    id: 6,
    image: '/images/project6.png',
    title: 'Recipe Finder',
    description: 'A web app to search for recipes based on ingredients using an external API.',
    liveLink: 'https://www.example-recipe.com',
  },
];

const MyWork = () => {
  // Define animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="my-work" className="py-16 px-4 md:px-8 lg:px-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Can also be animated on scroll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // once: true means animate only once
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 font-medium">My Recent Work</p>
          <h2 className="text-5xl font-serif text-gray-800 mt-2">
            Portfolio
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Click to explore the live versions!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block bg-gray-50 rounded-lg shadow-md overflow-hidden
                hover:shadow-xl transition-shadow duration-300 ease-in-out
                cursor-pointer
              "
              // Scroll-based animation props
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Animate when 20% of card is visible
              variants={cardVariants}
              transition={{ delay: index * 0.1 }} // Staggered animation
              // Hover animation props (these are independent of scroll animation)
              whileHover={{ scale: 1.03, y: -5 }} // Slight lift on hover
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-left">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  <span className="text-lg font-medium">View Live</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;