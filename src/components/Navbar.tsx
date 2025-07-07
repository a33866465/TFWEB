import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Talaveras Framing LLC
          </span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`${
                isScrolled ? 'text-gray-800 hover:text-navy' : 'text-white hover:text-gray-200'
              } font-medium transition-colors duration-300`}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="tel:+16023498821" 
            className="flex items-center space-x-2 bg-wood text-white py-2 px-4 rounded-md font-medium transition-all duration-300 hover:bg-wood-dark"
          >
            <Phone size={18} />
            <span className="hidden xl:inline">Get a Quote</span>
          </a>
        </div>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className={`p-2 ${isScrolled ? 'text-navy' : 'text-white'} z-50 relative`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      ></div>
      
      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-navy z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-white text-xl font-medium py-3 border-b border-gray-700 transition-colors duration-300 hover:text-wood"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="tel:+16023498821" 
              className="flex items-center justify-center space-x-2 bg-wood text-white py-3 px-6 rounded-md font-medium mt-6 transition-colors duration-300 hover:bg-wood-dark"
              onClick={closeMenu}
            >
              <Phone size={18} />
              <span>Call for a Quote</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;