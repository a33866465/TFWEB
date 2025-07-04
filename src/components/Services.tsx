import React from 'react';
import { Home, TreePine, Ruler, Briefcase, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  delay: string;
}

const ServiceCard = ({ icon, title, description, imageSrc, delay }: ServiceCardProps) => (
  <div className={`card group animate-fade-in-up ${delay}`}>
    <div className="relative h-64 overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-[150%] object-cover object-[50%_45%] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="flex items-center">
          {icon}
          <span className="text-gray-200 text-sm ml-2">Premium Craftsmanship</span>
        </div>
      </div>
    </div>
    
    <div className="p-6 bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200">
      <p className="text-gray-700 mb-4">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center text-navy font-medium group"
      >
        Learn More 
        <ChevronRight 
          size={16} 
          className="ml-1 transition-transform duration-300 group-hover:translate-x-1" 
        />
      </a>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Ruler className="text-wood" size={18} />,
      title: "Custom Wood Carpentry",
      description: "Premium wood framing and carpentry services with meticulous attention to detail for custom homes, remodels, and additions.",
      imageSrc: "/src/ASSETS/TNG97FCAB53-2F3F-48F4-9208-842039BB9743.png",
      delay: "delay-75",
    },
    {
      icon: <Home className="text-wood" size={18} />,
      title: "Custom Garages",
      description: "Stunning exposed beams, trusses, and timber accents that showcase the natural beauty of wood in your home or business.",
      imageSrc: "/src/ASSETS/IMG_5215 (2).jpg",
      delay: "delay-150",
    },
    {
      icon: <TreePine className="text-wood" size={18} />,
      title: "Decks, Cabins & Log Houses",
      description: "Custom-designed decks, authentic cabins, and log houses built with premium materials and expert craftsmanship.",
      imageSrc: "/src/ASSETS/cabin (3).jpg",
      delay: "delay-225",
    },
    {
      icon: <Briefcase className="text-wood" size={18} />,
      title: "Commercial & Residential Projects",
      description: "Full-service wood construction for both commercial buildings and residential homes, with personalized solutions.",
      imageSrc: "/src/ASSETS/IMG_1931 (1).jpg",
      delay: "delay-300",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Specialized Services</h2>
          <p className="section-subheading">
            With 25 years of experience, we deliver premium wood craftsmanship for residential and commercial projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;