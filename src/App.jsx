import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#090E1A] relative text-gray-300 antialiased font-sans">
      {/* Background glowing decorations */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
