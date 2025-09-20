// src/About.js
import React from 'react';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import imran from '../assets/imran.jpeg'
const About = () => {
  // useInView hook to control animation
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.1,    // When 10% of the section is visible
  });

  // Individual refs for staggered animations
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: box1Ref, inView: box1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: box2Ref, inView: box2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: box3Ref, inView: box3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: toolsRef, inView: toolsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Element name="about">
      <section
        ref={sectionRef} // Main section ref for image and overall content
        className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white text-gray-900 py-16 px-4 md:px-8"
      >
        {/* Left Side: Image */}
        <div
          className={`lg:w-1/3 flex justify-center mb-8 lg:mb-0 lg:mr-12
            transition-all duration-1000 ease-out
            ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <img
            src={imran} // <--- अपनी इमेज का URL यहाँ डालें (थोड़ा लंबा)
            alt="Profile"
            className="w-full max-w-sm rounded-lg shadow-xl" // Rounded corners on left and right sides
            style={{ borderRadius: '20px' }} // Custom border-radius to match image
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-2/3 text-center lg:text-left">
          {/* Introduction */}
          <p
            ref={textRef} // Ref for introductory text
            className={`text-sm md:text-base text-gray-600 font-medium mb-2
              transition-all duration-700 ease-out delay-200
              ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Introduction
          </p>
          {/* About Me Heading */}
          <h2
            className={`text-4xl md:text-5xl font-bold font-serif mb-8
              transition-all duration-700 ease-out delay-300
              ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            About me
          </h2>
          {/* Main Description */}
          <p
            className={`text-base md:text-lg text-gray-700 max-w-3xl mb-12 mx-auto lg:mx-0
              transition-all duration-700 ease-out delay-400
              ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Hi, I’m Imran, a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I love building scalable, user-friendly, and modern web applications that solve real-world problems.

              Along with web development, I also practice Data Structures & Algorithms (DSA) to strengthen my problem-solving and logical thinking skills. This helps me write efficient code and design optimized solutions.

              My goal is to combine creativity with logic — crafting applications that are not only visually appealing but also robust and high-performing.
          </p>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto lg:mx-0 mb-12">
            {/* Box 1: Languages */}
            <div
              ref={box1Ref}
              className={`bg-white p-6 rounded-lg shadow-lg flex flex-col items-center lg:items-start
                transition-all duration-700 ease-out delay-500 border border-gray-100
                ${box1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              {/* Icon Placeholder - Using an SVG-like text or simple character */}
              <span className="text-blue-500 text-3xl mb-3">{`</>`}</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Languages</h3>
              <p className="text-gray-700 text-center lg:text-left">HTML, CSS, JavaScript</p>
              <p className="text-gray-700 text-center lg:text-left">React Js, Next Js</p>
            </div>

            {/* Box 2: Education */}
            <div
              ref={box2Ref}
              className={`bg-white p-6 rounded-lg shadow-lg flex flex-col items-center lg:items-start
                transition-all duration-700 ease-out delay-600 border border-gray-100
                ${box2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              {/* Icon Placeholder */}
              <span className="text-green-500 text-3xl mb-3">🎓</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Education</h3>
              <p className="text-gray-700">Master of Computer Applications (MCA)</p>
            </div>

            {/* Box 3: Projects */}
            <div
              ref={box3Ref}
              className={`bg-white p-6 rounded-lg shadow-lg flex flex-col items-center lg:items-start
                transition-all duration-700 ease-out delay-700 border border-gray-100
                ${box3InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              {/* Icon Placeholder */}
              <span className="text-purple-500 text-3xl mb-3">💼</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Projects</h3>
              <p className="text-gray-700">Built more than 5 projects</p>
            </div>
          </div>

          {/* Tools I Use Section */}
          <div
            ref={toolsRef} // Ref for tools section animation
            className={`transition-all duration-700 ease-out delay-800
              ${toolsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Tools I use</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {/* Tool Icons - Replace src with actual paths to your tool icon images */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <img src="https://1000logos.net/wp-content/uploads/2024/08/Vercel-Logo.png" alt="Vercel" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              {/* Add more tool icons as needed */}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;