import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase'; // Adjusted path

const Contact = () => {
  const [formState, setFormState] = useState<Omit<ContactSubmission, 'id' | 'created_at' | 'status'>>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const submission: ContactSubmission = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        service: formState.service,
        message: formState.message,
      };

      // Using 'contact_submissions' as the table name as confirmed by the user.
      const { error } = await supabase
        .from('contact_submissions') // <<<< CHANGED TO 'contact_submissions'
        .insert([submission]);

      if (error) {
        console.error('Supabase error details:', error);
        throw error;
      }

      setIsSubmitted(true);
      // Reset form fields
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      let errorMessage = 'There was an error submitting your message. Please try again or call us directly.';
      if (error instanceof Error && 'message' in error) {
        // Check if Supabase provided a more specific message
        if (error.message.includes('permission denied') || error.message.includes('policy')) {
            errorMessage = 'There was a problem with saving your submission. Please check your details or contact support if the issue persists (Policy Error).';
        } else if (error.message.includes('table') && error.message.includes('does not exist')) {
            errorMessage = 'The submissions system is temporarily unavailable. Please try again later (Table Error).';
        }
      }
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">
            Ready to start your project? Contact us for a free consultation and estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been received. We'll get back to you within 24-48 hours.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError(null); // Also reset error on sending another message
                  }}
                  className="btn-primary bg-navy"
                  type="button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
                    <p className="font-medium">Submission Error</p>
                    <p className="text-sm">{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="(602) 349-8821"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                    >
                      <option value="">Select a Service</option>
                      <option value="carpentry">Custom Wood Carpentry</option>
                      <option value="exposed">Luxurious Exposed Woodwork</option>
                      <option value="decks">Decks</option>
                      <option value="cabins">Cabins & Log Houses</option>
                      <option value="commercial">Commercial Projects</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary bg-navy flex items-center justify-center w-full md:w-auto ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-opacity-90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div role="status" className="inline-block h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin">
                        <span className="sr-only">Loading...</span>
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Information and Business Hours side panel remains the same */}
          <div>
            <div className="bg-navy text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 text-wood mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href="tel:+16023498821" className="text-gray-300 hover:text-white transition-colors duration-300">
                      (602) 349-8821
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-wood mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:info@talaverasframing.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                      info@talaverasframing.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 text-wood mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Service Area</h4>
                    <address className="text-gray-300 not-italic">
                      Phoenix, AZ<br />
                      & Surrounding Areas
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy mb-4">Business Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;