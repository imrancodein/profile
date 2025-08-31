import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To show submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    // --- IMPORTANT: Replace with your Google Apps Script Web App URL ---
    // This is the URL you got after deploying your Apps Script
    const googleSheetScriptURL = 'https://script.google.com/macros/s/AKfycbx2yv8QAglEEvwkey1Dbgdz1SLp2UV3FfKhU2hOTpNPi3ivGECrZIFUyE3sXyyY7-a4nA/exec'; // <--- REPLACE THIS

    try {
      const response = await fetch(googleSheetScriptURL, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin requests to Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' mode is used, we cannot directly check response.ok or read response.json()
      // The request will succeed on the network level, but browser JS can't inspect the response.
      // We assume success if the fetch operation itself doesn't throw an error.
      // In a real-world scenario with a proper backend, you would check response.ok.

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  // Animation variants for section header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Animation variants for form/map sections
  const sectionVariants = {
    hidden: { opacity: 0, x: -50 }, // For left side (form)
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
    hiddenRight: { opacity: 0, x: 50 }, // For right side (map)
    visibleRight: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
  };


  return (
    <section id="contact-me" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 font-medium">Get in Touch</p>
          <h2 className="text-5xl font-serif text-gray-800 mt-2">
            Contact Me
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form or find me on the map!
          </p>
        </motion.div>

        {/* Content - Form and Map */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">

          {/* Left Side: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants} // Using sectionVariants for form
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'Submitting...'} // Disable button during submission
              >
                {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
              </motion.button>
              {status && (
                <p className={`mt-4 text-center text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          {/* Right Side: Google Map */}
          <motion.div
            initial="hiddenRight" // Using specific variant for right side
            whileInView="visibleRight"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants} // Applying the sectionVariants object
            className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <h3 className="text-3xl font-semibold text-gray-800 p-8 pb-0">Find Me Here</h3>
            <div className="p-8 pt-0">
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.673394661555!2d82.56330897506547!3d25.146730533743444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1d4ed11b039%3A0xd4ca8ceca09dada7!2sBLJ%20Rd%2C%20Paira%20Tola%2C%20Mirzapur%2C%20Mirzapur-cum-Vindhyachal%2C%20Uttar%20Pradesh%20231001!5e0!3m2!1sen!2sin!4v1753715963320!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Mirzapur"
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                * Location displayed is an example (Mirzapur, India). Please update with your actual location.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;