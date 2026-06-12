import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaPaw } from 'react-icons/fa';

export default function VolunteerSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const volunteerRoles = [
    { title: "Feeding Coordinator", desc: "Help organize and manage daily feeding runs and local kitchen support." },
    { title: "Rescue Coordinator", desc: "Assist in coordinates, emergency transport, and first-aid response." },
    { title: "Foster Parent", desc: "Provide temporary shelter and healing spaces for senior or convalescing strays." },
    { title: "Awareness Advocate", desc: "Engage neighbors and schools to spread empathy and legal awareness." }
  ];

  return (
    <section id="volunteer" className="py-24 bg-light-bg relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Roles list (Clean, borderless, text items) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block">
              join the movement
            </span>
            <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth leading-tight">
              become a volunteer
            </h2>
            <p className="font-sans text-xs sm:text-sm text-earth/75 font-light leading-relaxed">
              Real change happens on the ground, mohalla by mohalla. Our volunteers are the primary responders who make coexistence a daily reality.
            </p>
            
            {/* Roles - Clean spacing, borderless layout */}
            <div className="space-y-6 pt-6 border-t border-earth/10">
              {volunteerRoles.map((role, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 rounded-full border border-earth/10 text-sage flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <FaPaw className="text-xs" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-normal text-earth">{role.title}</h4>
                    <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Registration Form - Clean frame, borderless inputs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-cream border border-earth/10 rounded-2xl p-8 md:p-12 relative"
          >
            <div className="relative z-10 text-left">
              <h3 className="font-serif font-light text-2.5xl text-earth mb-2">
                Sign up today
              </h3>
              <p className="font-sans text-xs sm:text-sm text-earth/60 font-light mb-8">
                Send your details below, and our coordinator will get in touch with you shortly.
              </p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="volunteer-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="form-name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm text-earth bg-transparent border border-earth/15 rounded focus:outline-none focus:border-earth font-sans transition-colors duration-200"
                        placeholder="Full Name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="form-email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm text-earth bg-transparent border border-earth/15 rounded focus:outline-none focus:border-earth font-sans transition-colors duration-200"
                        placeholder="Email Address"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        id="form-phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm text-earth bg-transparent border border-earth/15 rounded focus:outline-none focus:border-earth font-sans transition-colors duration-200"
                        placeholder="Phone Number"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        name="message"
                        id="form-message"
                        rows="3"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-sm text-earth bg-transparent border border-earth/15 rounded focus:outline-none focus:border-earth font-sans transition-colors duration-200"
                        placeholder="Why do you want to join Mohalle Mastane?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-earth text-cream hover:bg-light-brown font-sans text-xs font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? "Processing..." : "Submit Application"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-sage/30 text-sage flex items-center justify-center mx-auto text-xl">
                      <FaHeart />
                    </div>
                    <h4 className="font-serif font-light text-2xl text-earth">Application received</h4>
                    <p className="font-sans text-xs sm:text-sm text-earth/75 font-light leading-relaxed max-w-sm mx-auto">
                      Thank you for stepping forward. Our volunteer team will review your application and contact you in the next 48 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
