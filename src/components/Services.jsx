import React from 'react';
import { motion } from 'framer-motion';

// Define the services data
const servicesData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-pink-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 8.25h-6a2.25 2.25 0 0 0-2.25 2.25v2.25a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25ZM17.25 8.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v2.25a2.25 2.25 0 0 0 2.25 2.25H17.25a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25Z"
        />
      </svg>
    ),
    title: 'Web design',
    description: 'Web development is the process of building, programming...',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-pink-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3.75m3-2.25V3.75M10.5 3.75H8.25m0 0H6m0 0H3.75M6 3.75V1.5m-2.25 0h-1.5a2.25 2.25 0 0 0-2.25 2.25v16.5a2.25 2.25 0 0 0 2.25 2.25H6m0-2.25H3.75m0 0H1.5a2.25 2.25 0 0 1-2.25-2.25v-1.5a2.25 2.25 0 0 1 2.25-2.25H3.75"
        />
      </svg>
    ),
    title: 'Mobile app',
    description: 'Web development is the process of building, programming...',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-pink-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM13.5 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM19.5 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
    title: 'UI/ UX design',
    description: 'Web development is the process of building, programming...',
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-pink-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 8.25h-6a2.25 2.25 0 0 0-2.25 2.25v2.25a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25ZM17.25 8.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v2.25a2.25 2.25 0 0 0 2.25 2.25H17.25a2.25 2.25 0 0 0 2.25-2.25v-2.25a2.25 2.25 0 0 0-2.25-2.25Z"
        />
      </svg>
    ),
    title: 'Graphics design',
    description: 'Web development is the process of building, programming...',
  },
];

const Services = () => {
  // Define animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // How long the animation takes
        ease: "easeOut" // Animation easing function
      }
    },
  };

  return (
    <section name="services"
     className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Animated on scroll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible position when in view
          viewport={{ once: true, amount: 0.5 }} // Animate once when 50% of div is in view
          transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and a slight delay
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 font-medium">What i offers</p>
          <h2 className="text-5xl font-serif text-gray-800 mt-2">
            My services
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I am a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I love building scalable, user-friendly, and modern web applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div // Use motion.div for framer-motion animations
              key={service.id}
              className={`
                bg-white p-8 rounded-lg shadow-md flex flex-col items-start
                cursor-default
                transition-shadow duration-300 ease-in-out
              `}
              // Scroll-based animation props for each card
              initial="hidden" // Start with the hidden state from cardVariants
              whileInView="visible" // Animate to the visible state when in view
              viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of card is in view
              variants={cardVariants} // Apply the defined variants
              transition={{ delay: index * 0.15 }} // Staggered animation (each card delays slightly more)
              // Hover animation props (these work independently of scroll animation)
              whileHover={{ scale: 1.05, y: -5 }} // Slightly larger scale and lift on hover
            >
              <div
                className={`
                  p-3 rounded-full mb-4 bg-pink-100
                `}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-left flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;