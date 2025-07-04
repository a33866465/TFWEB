import React from 'react';
import { CheckCircle, Award, Building as FactoryBuilding, Users, User as UserHard } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Award size={20} />, count: '5+', label: 'Years in Business' },
    { icon: <UserHard size={20} />, count: '25+', label: 'Years Experience' },
    { icon: <FactoryBuilding size={20} />, count: '100+', label: 'Projects Completed' },
    { icon: <Users size={20} />, count: '100+', label: 'Happy Clients' },
  ];

  const keyPoints = [
    "Licensed, bonded and insured for your peace of mind",
    "Specialized in luxury wood craftsmanship and custom designs",
    "Residential and commercial projects of all sizes",
    "Commitment to quality, durability, and aesthetic excellence",
    "Personalized service from concept to completion",
    "Using premium materials and sustainable practices",
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/src/ASSETS/NARIMG_1944.JPG" 
                  alt="Craftsman working with wood" 
                  className="rounded-lg object-cover h-64 w-full shadow-md"
                  loading="lazy"
                />
                <img 
                  src="/src/ASSETS/tng2image0 (2).png" 
                  alt="Woodworking detail" 
                  className="rounded-lg object-cover h-48 w-full shadow-md"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 space-y-4">
                <img 
                  src="/src/ASSETS/logcabinIMG_2435.jpg" 
                  alt="Cabin exterior" 
                  className="rounded-lg object-cover h-48 w-full shadow-md"
                  loading="lazy"
                />
                <img 
                  src="/src/ASSETS/stairBB51B454-D8E1-419B-A1C1-4E9B4918F82E.png" 
                  alt="Wood beam interior" 
                  className="rounded-lg object-cover h-64 w-full shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="section-heading text-left">About Talaveras Framing LLC</h2>
            <p className="text-gray-600 mb-6">
              Founded on a passion for exceptional woodwork, Talaveras Framing has been delivering premium carpentry and construction services for 5 years, backed by 25 years of industry experience.
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in luxurious exposed woodwork, custom decks, cabins, and log houses that showcase the natural beauty of wood while meeting the highest standards of craftsmanship and durability.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-navy">Why Choose Us</h3>
              <ul className="space-y-3">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-wood mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
                  <div className="text-wood inline-block mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-navy">{item.count}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;