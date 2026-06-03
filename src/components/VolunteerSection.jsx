import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaw, FaHandHoldingHeart, FaUserPlus, FaHeart, FaHandsHelping } from 'react-icons/fa';

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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Reset success message after 5 seconds
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
    { title: "Animal Feeding Coordinator", desc: "Help manage daily feeding schedules and routes in your area." },
    { title: "Rescue Coordinator", desc: "Assist in emergency transport and primary care response during rescues." },
    { title: "Foster Parent", desc: "Open your home to recovering, orphaned, or senior street animals temporarily." },
    { title: "Awareness Advocate", desc: "Spread empathy by speaking at schools, parks, and housing societies." }
  ];

  return (
    <section id="volunteer" className="py-20 bg-beige/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Role Details & Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5E3C]/10 text-[#8B5E3C] rounded-full text-sm font-semibold">
              <FaHandsHelping />
              Join the Pack
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
              Become a Volunteer
            </h2>
            <p className="text-lg text-primary-brown/85 font-sans leading-relaxed">
              We believe change begins in our own neighborhoods. At Mohalle Mastane, our volunteers are the lifelines of all rescue, feeding, and healing programs.
            </p>
            
            {/* Volunteer Roles Stack */}
            <div className="space-y-4 pt-4">
              {volunteerRoles.map((role, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-cream/60 border border-beige/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center flex-shrink-0 text-lg">
                    <FaPaw />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary-brown">{role.title}</h4>
                    <p className="text-sm text-primary-brown/80 font-sans mt-0.5">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Registration Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-cream rounded-3xl p-8 md:p-12 shadow-2xl border border-beige/40 relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-brown mb-2 flex items-center gap-3">
                <FaUserPlus className="text-accent-gold" />
                Sign Up Today
              </h3>
              <p className="text-sm md:text-base text-primary-brown/70 mb-8 font-sans">
                Fill in the form below. Our volunteer coordination team will get in touch with you shortly.
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
                        className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown focus:ring-0 peer placeholder-transparent transition-colors duration-200"
                        placeholder="Name"
                      />
                      <label 
                        htmlFor="form-name"
                        className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                      >
                        Full Name
                      </label>
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
                        className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown focus:ring-0 peer placeholder-transparent transition-colors duration-200"
                        placeholder="Email"
                      />
                      <label 
                        htmlFor="form-email"
                        className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                      >
                        Email Address
                      </label>
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
                        className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown focus:ring-0 peer placeholder-transparent transition-colors duration-200"
                        placeholder="Phone"
                      />
                      <label 
                        htmlFor="form-phone"
                        className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                      >
                        Phone Number
                      </label>
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
                        className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown focus:ring-0 peer placeholder-transparent transition-colors duration-200"
                        placeholder="Why do you want to join?"
                      />
                      <label 
                        htmlFor="form-message"
                        className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                      >
                        Why do you want to join Mohalle Mastane?
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-primary-brown text-cream hover:bg-light-brown font-bold rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 bg-muted-teal/10 border border-muted-teal/30 rounded-2xl text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-muted-teal/20 text-muted-teal rounded-full flex items-center justify-center mx-auto text-3xl">
                      <FaHeart className="text-[#C89A63]" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-primary-brown">Thank You, Animal Lover!</h4>
                    <p className="text-primary-brown/85 font-sans leading-relaxed">
                      We have received your application successfully. Our volunteer team will reach out via email or phone within the next 48 hours. Let's make a difference together!
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
