import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaPaw, FaHeart } from 'react-icons/fa';

export default function VolunteerModal({ isOpen, onClose }) {
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
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-brown/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-cream rounded-3xl p-6 md:p-8 shadow-2xl border border-beige/60 overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-primary-brown/60 hover:text-primary-brown p-1 rounded-full hover:bg-beige/35 transition-colors"
              aria-label="Close modal"
            >
              <HiX className="text-2xl" />
            </button>

            {/* Content */}
            <div className="relative">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-light-brown/15 text-light-brown flex items-center justify-center text-xl">
                      <FaPaw />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-brown flex items-center gap-3">
                      Join The Movement
                    </h3>
                  </div>
                  <p className="text-sm text-primary-brown/70 mb-6 font-sans">
                    Fill in your details below to become a volunteer/rescuer. Our team will contact you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-semibold text-primary-brown/80 mb-1 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="modal-name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-2.5 text-primary-brown bg-cream border-2 border-beige/60 rounded-xl focus:outline-none focus:border-light-brown transition-colors duration-200"
                        placeholder="e.g. Amit Kumar"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-primary-brown/80 mb-1 font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="modal-email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-2.5 text-primary-brown bg-cream border-2 border-beige/60 rounded-xl focus:outline-none focus:border-light-brown transition-colors duration-200"
                        placeholder="e.g. amit@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold text-primary-brown/80 mb-1 font-sans">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="modal-phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-2.5 text-primary-brown bg-cream border-2 border-beige/60 rounded-xl focus:outline-none focus:border-light-brown transition-colors duration-200"
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="modal-message" className="block text-xs font-semibold text-primary-brown/80 mb-1 font-sans">
                        Why do you want to join?
                      </label>
                      <textarea
                        name="message"
                        id="modal-message"
                        rows="3"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full px-4 py-2.5 text-primary-brown bg-cream border-2 border-beige/60 rounded-xl focus:outline-none focus:border-light-brown transition-colors duration-200"
                        placeholder="Tell us briefly how you'd like to help..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3 px-6 bg-light-brown text-cream hover:bg-primary-brown font-bold rounded-xl shadow-md active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#FDF9F4] text-light-brown rounded-full flex items-center justify-center mx-auto text-3xl shadow-md">
                    <FaHeart className="text-light-brown animate-pulse" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-primary-brown">Thank You, Animal Lover!</h4>
                  <p className="text-primary-brown/85 font-sans leading-relaxed text-sm">
                    We have received your application successfully. Our volunteer team will reach out to you within the next 48 hours. Let's make a difference together!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
