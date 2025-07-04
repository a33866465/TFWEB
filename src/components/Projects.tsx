import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'carpentry', label: 'Carpentry' },
    { id: 'decks', label: 'Decks' },
    { id: 'cabins', label: 'Cabins & Log Houses' },
    { id: 'commercial', label: 'Commercial' },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Log Cabin",
      category: "cabins",
      imageSrc: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Custom log cabin with exposed beams and premium wood finishes.",
    },
    {
      id: 2,
      title: "Restaurant Wood Interior",
      category: "commercial",
      imageSrc: "https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Commercial restaurant featuring custom wood panels and beams.",
    },
    {
      id: 3,
      title: "Custom Deck with Pergola",
      category: "decks",
      imageSrc: "https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Multi-level deck with custom pergola and built-in seating.",
    },
    {
      id: 4,
      title: "Exposed Beam Living Room",
      category: "carpentry",
      imageSrc: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Residential living room with exposed beams and wood accents.",
    },
    {
      id: 5,
      title: "Luxury Timber Frame Home",
      category: "cabins",
      imageSrc: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Custom timber frame home with premium wood finishes.",
    },
    {
      id: 6,
      title: "Office Wood Paneling",
      category: "commercial",
      imageSrc: "https://images.pexels.com/photos/7746584/pexels-photo-7746584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Corporate office with custom wood wall paneling and details.",
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Featured Projects</h2>
          <p className="section-subheading">
            Browse our portfolio of premium wood craftsmanship across residential and commercial projects.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-navy text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-navy rounded-full p-3">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <div className="mb-3">
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 py-1 px-2 rounded">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;