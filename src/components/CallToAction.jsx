import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaPaw } from 'react-icons/fa';

export default function CallToAction() {
  const scrollToVolunteer = () => {
    const el = document.getElementById('volunteer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-tr from-primary-brown via-light-brown to-primary-brown text-cream">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted-teal/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Animated Icon */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold text-2xl mx-auto border border-accent-gold/30 shadow-lg"
        >
          <FaHeart />
        </motion.div>

        {/* Emotionally Resonant Headings */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight"
        >
          Be The Voice <br className="sm:hidden" />
          <span className="text-accent-gold">For Those Who Cannot Speak</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-cream/90 font-sans leading-relaxed"
        >
          Every stray dog, cat, cow, or bird in our mohalla deserves care, comfort, and safety. Your compassion has the power to transform their pain into comfort.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/donate"
            className="w-full sm:w-auto px-8 py-4 bg-accent-gold hover:bg-cream text-primary-brown hover:text-primary-brown font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center"
          >
            Donate Today
          </Link>
          <button
            onClick={scrollToVolunteer}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-cream hover:bg-cream hover:text-primary-brown text-cream font-bold rounded-full shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            Join Community
          </button>
        </motion.div>
      </div>

      {/* Decorative Wave/Paw marks */}
      <div className="absolute right-10 bottom-10 opacity-5 pointer-events-none text-9xl text-cream">
        <FaPaw />
      </div>
    </section>
  );
}
