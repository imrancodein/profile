// src/Hero.js
import React, { useState } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer'; // useInView इम्पोर्ट करें
import useTypingEffect from './useTypingEffect';
import imran from '../assets/imran.jpeg'
import Imran_Resume from '../assets/imran.pdf'

const Hero = () => {
  // Hero सेक्शन के लिए मुख्य ref
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // जब सेक्शन का 10% दिखाई दे
  });

  // 'Hi! I'm William Mark 👋' के लिए टाइपिंग इफ़ेक्ट
  const { typedText: greetingTyped, isTypingComplete: greetingTypingComplete } = useTypingEffect(
    "Hi! I'm Mohammad Imran 👋",
    70, // Typing speed (adjust as needed)
    500 // Initial delay before typing starts
  );

  // रेज़्यूमे डाउनलोड फंक्शन
  const handleDownloadResume = () => {
    const resumeUrl = Imran_Resume; // <--- इसे अपने रेज़्यूमे फाइल के नाम से बदलें
     const previewTab = window.open(resumeUrl, '_blank');

    if (!previewTab) {
      alert("Could not open the preview tab. Please check your browser's pop-up blocker settings.");
    }
// direct download resume code

    // const link = document.createElement('a');
    // link.href = resumeUrl;
    // link.download = 'Imran_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <Element name="home">
      <section
        ref={heroRef} // सेक्शन पर ref लगाएं
        className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4 py-25 text-center overflow-hidden"
      >
        {/* Profile Picture - Fade In */}
        <div
          className={`mb-6 transition-all duration-1000 ease-out ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '200ms' }} // 200ms delay for profile pic
        >
          <img
            src={imran} // <--- अपनी प्रोफ़ाइल पिक्चर का URL डालें
            alt="William Mark"
            className="w-36 h-36 rounded-full object-cover object-top  border-4 border-gray-200 shadow-lg"
          />
        </div>

        {/* Greeting - Typing Effect */}
        <p
          className="text-xl md:text-2xl text-gray-700 mb-2 font-light min-h-[1.5em]" // min-h ताकि टाइपिंग के दौरान जम्प न हो
        >
          {greetingTyped}
          {/* Blinking cursor for greeting */}
          <span className={`inline-block w-1 h-5 md:h-7 bg-gray-700 animate-blink ${greetingTypingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
        </p>

        {/* Main Heading - Fade In */}
        <h1
          className={`text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl mb-6
            transition-all duration-1000 ease-out ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          style={{ transitionDelay: '400ms' }} // 400ms delay for heading
        >
          Fullstack web developer based in MERN.
        </h1>

        {/* Short Description - Fade In */}
        <p
          className={`text-base md:text-lg text-gray-600 max-w-3xl mb-10 font-light
            transition-all duration-1000 ease-out ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          style={{ transitionDelay: '600ms' }} // 600ms delay for description
        >
           "Ideas ko code mein badalna aur users ke liye seamless web experience create karna — that’s what I do as a Full Stack Developer."
        </p>

        {/* Call-to-Action Buttons - Fade In */}
        <div
          className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4
            transition-all duration-1000 ease-out ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          style={{ transitionDelay: '800ms' }} // 800ms delay for buttons
        >
          <ScrollLink
            to="contact-me"
            smooth={true}
            duration={1000}
            offset={-70}
            className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-700 transition-colors duration-300 shadow-md cursor-pointer"
          >
            connect with me <FiArrowRight className="ml-2" />
          </ScrollLink>

          <button
            onClick={handleDownloadResume}
            className="flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-800 rounded-full text-lg font-medium hover:bg-gray-300 transition-colors duration-300 shadow-md cursor-pointer"
          >
            my resume <FiDownload className="ml-2" />
          </button>
        </div>
      </section>
    </Element>
  );
};

export default Hero;