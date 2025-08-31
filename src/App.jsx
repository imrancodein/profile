// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Element } from 'react-scroll';
import About from './components/About';
import SkillsPage from './components/SkillsPage';
import Services from './components/Services';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import useDarkMode from './components/useDarkMode';


function App() {
  const [colorTheme, toggleTheme] = useDarkMode();
  return (

    
    // 'dark:bg-gray-900' और 'dark:text-gray-100' क्लासेस को
    // यहां `div` पर लागू किया जा रहा है ताकि पूरी ऐप का डिफ़ॉल्ट डार्क मोड स्टाइल सेट हो जाए।
    <div className='app' >
      
      
     {/* Navbar section */}
      <Navbar  />
    

      {/* Hero Section */}
      <Hero/>
      

      {/* About Section */}
      
        <About />
      
      

      {/* Skills Section */}
      <SkillsPage/>
      

      {/* Services Section */}
      <Services/>

      {/* My Work Section */}
      <MyWork/>

      {/* Contact Me Section */}
   <ContactMe/>
{/* Footer section */}
<Footer/>

      
    </div>
  );
}

export default App;