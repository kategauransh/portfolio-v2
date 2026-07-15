import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-white group">
          <div className="bg-primary/20 p-2 rounded-lg border border-primary/30 group-hover:border-primary/60 transition-colors">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gradient bg-gradient-to-r from-white to-gray-400 group-hover:from-primary group-hover:to-cyan-400 transition-colors duration-300">
            Gauransh.dev
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-600 shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-dark-bg/95 backdrop-blur-xl border-l border-dark-border p-6 shadow-2xl transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-10">
          <span className="text-lg font-bold text-white">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-300 hover:text-white hover:pl-2 transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-dark-border pt-6">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center px-5 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
