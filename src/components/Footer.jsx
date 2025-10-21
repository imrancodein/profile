import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Section 1: Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Info</h3>
          <p className="mb-2">
            <span className="font-medium">Name:</span> Imran {/* Replace with your name */}
          </p>
          <p className="mb-2">
            <span className="font-medium">Mobile:</span> +91 9026579399 {/* Replace with your mobile number */}
          </p>
          <p>
            <span className="font-medium">Email:</span> codesimran.web@gmail.com {/* Replace with your email */}
          </p>
        </div>

        {/* Section 2: Social Links */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Connect With Me</h3>
          <div className="flex space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/imrancode/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">LinkedIn</span> {/* Screen reader text */}
            </motion.a>

            <motion.a
              href="https://github.com/imrancodein" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.702-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.072 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.935 0-1.093.39-1.988 1.029-2.681-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.099 2.651.64.693 1.029 1.578 1.029 2.681 0 3.832-2.339 4.68-4.566 4.922.359.31.678.921.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.482C20.137 20.218 23 16.463 23 12.017 23 6.484 18.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="https://wa.me/919026579399" // Replace with your WhatsApp number (include country code)
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.77.46 3.45 1.35 4.93L2.05 22l5.03-1.33c1.47.88 3.16 1.35 4.93 1.35 5.46 0 9.9-4.44 9.9-9.9s-4.44-9.9-9.9-9.9zm.04 1.5c4.68 0 8.49 3.81 8.49 8.49s-3.81 8.49-8.49 8.49c-1.63 0-3.2-.46-4.55-1.25l-.32-.19-3.25.86.87-3.16-.21-.33c-.8-1.35-1.25-2.92-1.25-4.55 0-4.68 3.81-8.49 8.49-8.49zm-1.49 3.6c-.23 0-.46.06-.66.17-.68.39-1.12.91-1.46 1.63-.3.63-.4 1.33-.29 2.05.12.7.42 1.35.8 1.85l.09.11.02.03.4.4.08.08c1.39 1.26 3.1 2.07 4.95 2.07 1.8 0 3.32-.57 4.67-1.66.52-.43.89-.96 1.15-1.66.27-.68.32-1.4.15-2.12-.18-.7-.6-1.28-1.2-1.7-.58-.4-1.27-.6-1.99-.6-.73 0-1.37.12-1.92.35-.4.17-.74.39-.99.64-.09.09-.16.18-.2.24l-.06.09-.07.1c-.24.32-.4.7-.5 1.1-.1.43-.1.87-.04 1.27.06.4.2.78.4 1.09.18.25.4.45.65.61.27.17.57.26.88.26.3 0 .59-.05.86-.14.23-.07.45-.16.65-.29.2-.12.39-.28.53-.45.16-.19.29-.4.4-.64.1-.24.16-.5.16-.76 0-.27-.06-.52-.16-.76-.1-.23-.25-.44-.43-.6-.18-.16-.38-.28-.59-.36-.2-.08-.41-.12-.62-.12z"/>
              </svg>
              <span className="sr-only">WhatsApp</span>
            </motion.a>
          </div>
        </div>

        {/* Section 3: Additional Info / Copyright */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">More Info</h3>
          <p className="mb-2 text-gray-400">
            Dedicated to crafting modern web experiences.
          </p>
          <p className="text-gray-400">
            Based in Mirzapur, Uttar Pradesh, India.
          </p>
          <p className="mt-6 text-gray-400 text-sm">
            © {new Date().getFullYear()} Imran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;