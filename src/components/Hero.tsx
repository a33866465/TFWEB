import React, { useEffect, useState } from 'react';
import { ChevronRight, Award, Shield, Clock } from 'lucide-react';
import heroLogo from '/src/ASSETS/04A49A2A-F9DC-4BEC-B3D3-FD88BACB52E4.PNG';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/1388944/pexels-photo-1388944.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Premium Wood <span className="text-wood">Craftsmanship</span> for Your Vision
            </h1>
            
            <p 
              className={`text-lg md:text-xl mb-8 text-gray-200 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Specialized in luxury exposed woodwork, cabins, decks, and custom carpentry
              with 25 years of experience in residential and commercial projects.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a 
                href="#contact" 
                className="btn-primary bg-wood hover:bg-wood-dark flex items-center justify-center sm:justify-start"
              >
                Request a Quote
                <ChevronRight className="ml-2" size={18} />
              </a>
              
              <a 
                href="#projects" 
                className="btn-secondary border-white text-white hover:bg-white hover:text-navy flex items-center justify-center sm:justify-start"
              >
                View Our Projects
              </a>
            </div>

            <div 
              className={`text-center sm:text-left mt-4 transition-all duration-700 delay-250 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-wood font-semibold text-lg">ROC #344290</p>
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center">
                <Shield className="text-wood mr-2" size={20} />
                <span className="text-gray-200">Licensed & Insured</span>
              </div>
              
              <div className="flex items-center">
                <Award className="text-wood mr-2" size={20} />
                <span className="text-gray-200">5 Years in Business</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="text-wood mr-2" size={20} />
                <span className="text-gray-200">25 Years Experience</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`hidden lg:flex justify-center items-center transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex justify-center items-center">
              <img 
                src={heroLogo}
                alt="Talaveras Framing LLC Logo" 
                className="w-full max-w-lg h-auto object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;