import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaDog, FaCat, FaFeather, FaHeart } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';

export default function HeroSection() {
  const containerRef = useRef(null);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const illustrationY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  // Scroll to volunteer section helper
  const scrollToVolunteer = () => {
    const el = document.getElementById('volunteer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-tr from-beige via-cream to-beige pt-20"
    >
      {/* Decorative Parallax Background shapes */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-light-brown/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-muted-teal/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-accent-gold/10 rounded-full blur-2xl animate-pulse" />
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-light-brown/10 border border-light-brown/20 text-light-brown text-sm font-semibold tracking-wide">
              <FaHeart className="text-red-500 animate-pulse" />
              Mohalle Mastane Welfare Foundation
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary-brown leading-tight">
              Every Life <br />
              <span className="text-accent-gold relative inline-block">
                Matters
                <span className="absolute bottom-1 left-0 w-full h-2 bg-muted-teal/20 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-primary-brown/80 font-sans leading-relaxed font-light">
              Together we rescue, protect, and care for animals while building a more compassionate society. Join us in making the streets safer and friendlier for our voiceless friends.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToVolunteer}
                className="w-full sm:w-auto px-8 py-4 bg-primary-brown hover:bg-light-brown text-cream font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Become Volunteer
              </button>
              <Link
                to="/donate"
                className="w-full sm:w-auto px-8 py-4 bg-cream border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown font-bold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>

          {/* Illustration Section */}
          <motion.div 
            style={{ y: illustrationY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[350px] md:min-h-[450px]"
          >
            {/* Main Central Emblem */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-light-brown/20 to-accent-gold/20 flex items-center justify-center relative shadow-inner">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-cream/60 backdrop-blur-sm shadow-lg flex flex-col items-center justify-center p-6 text-center border border-cream/80">
                <FaHeart className="text-4xl md:text-5xl text-accent-gold mb-2" />
                <span className="font-serif font-bold text-lg md:text-xl text-primary-brown">Coexistence</span>
                <span className="text-xs md:text-sm text-primary-brown/60">Compassion & Togetherness</span>
              </div>
            </div>

            {/* Floating Animal Cards */}
            {/* Dog Card (Top Left) */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 left-6 md:left-2 p-4 bg-cream/90 backdrop-blur-md rounded-2xl shadow-xl border border-beige/60 flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-light-brown/10 flex items-center justify-center text-light-brown text-xl md:text-2xl">
                <FaDog />
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-xs md:text-sm text-primary-brown">Dogs</p>
                <p className="text-[10px] md:text-xs text-muted-teal font-semibold">Rescued & Loved</p>
              </div>
            </motion.div>

            {/* Cat Card (Top Right) */}
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [3, -3, 3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-10 -right-2 md:right-4 p-4 bg-cream/90 backdrop-blur-md rounded-2xl shadow-xl border border-beige/60 flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold text-xl md:text-2xl">
                <FaCat />
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-xs md:text-sm text-primary-brown">Cats</p>
                <p className="text-[10px] md:text-xs text-muted-teal font-semibold">Protected</p>
              </div>
            </motion.div>

            {/* Cow Card (Bottom Left) */}
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                rotate: [-3, 3, -3]
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-6 left-0 md:left-4 p-4 bg-cream/90 backdrop-blur-md rounded-2xl shadow-xl border border-beige/60 flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted-teal/10 flex items-center justify-center text-muted-teal text-2xl md:text-3xl">
                <GiCow />
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-xs md:text-sm text-primary-brown">Cows</p>
                <p className="text-[10px] md:text-xs text-muted-teal font-semibold">Treated & Fed</p>
              </div>
            </motion.div>

            {/* Bird Card (Bottom Right) */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [2, -2, 2]
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute -bottom-2 right-4 md:right-10 p-4 bg-cream/90 backdrop-blur-md rounded-2xl shadow-xl border border-beige/60 flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-brown/10 flex items-center justify-center text-primary-brown text-xl md:text-2xl">
                <FaFeather />
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-xs md:text-sm text-primary-brown">Birds</p>
                <p className="text-[10px] md:text-xs text-muted-teal font-semibold">Free & Cared</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-cream fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,152.42,44.32,223.15,58.07,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
}
