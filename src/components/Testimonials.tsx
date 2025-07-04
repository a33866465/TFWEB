import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Thompson",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Talaveras Framing built our dream cabin with exceptional craftsmanship. Their attention to detail with the exposed wood beams is incredible. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "We hired Talaveras to create custom wood elements for our restaurant. The result was stunning and completed on time and budget. Our customers love the ambiance!",
      rating: 5,
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Property Developer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Having worked with many contractors, I can say that Talaveras Framing stands out for their expertise in wood construction. Professional, reliable, and exceptional quality.",
      rating: 5,
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with Talaveras Framing.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-xl p-8 md:p-12 shadow-md">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  className={i < testimonials[activeIndex].rating ? "text-wood fill-wood" : "text-gray-300"} 
                />
              ))}
            </div>
            
            <div className="relative mb-8">
              <span className="text-9xl font-serif text-wood opacity-10 absolute -top-10 left-0">"</span>
              <p className="text-xl md:text-2xl text-gray-700 text-center relative z-10 italic">
                {testimonials[activeIndex].quote}
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-navy">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button 
                onClick={prevTestimonial}
                className="bg-white text-navy rounded-full p-2 shadow-md hover:bg-navy hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button 
                onClick={nextTestimonial}
                className="bg-white text-navy rounded-full p-2 shadow-md hover:bg-navy hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                  index === activeIndex ? 'bg-navy' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;