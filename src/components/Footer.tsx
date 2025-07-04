import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Talaveras Framing</h3>
            <p className="text-gray-300 mb-6">
              Premium wood carpentry and construction services with 25 years of experience. Licensed, bonded, and insured.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-light hover:bg-wood text-white p-2 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-navy-light hover:bg-wood text-white p-2 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-navy-light hover:bg-wood text-white p-2 rounded-full transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-navy-light hover:bg-wood text-white p-2 rounded-full transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Custom Wood Carpentry',
                'Luxurious Exposed Woodwork',
                'Decks & Outdoor Spaces',
                'Cabins & Log Houses',
                'Commercial Projects',
                'Residential Construction'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-gray-300">
                Phoenix, AZ<br />
                & Surrounding Areas
              </p>
              <p className="text-gray-300">
                <strong>Phone:</strong> (602) 349-8821
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong> info@talaverasframing.com
              </p>
              <p className="text-gray-300">
                <strong>Hours:</strong> Mon-Fri: 6am-6pm<br />
                Sat: 8am-4pm
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-navy-dark py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Talaveras Framing LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;