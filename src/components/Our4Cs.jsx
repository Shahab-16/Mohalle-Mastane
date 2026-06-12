import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Our4Cs() {
  const leftColumnItems = [
    {
      number: "01",
      title: "Conscious Living",
      tagline: "Mindful, cruelty-free living",
      description: "Mindful, cruelty-free living through everyday choices, vegan nutrition, and local sustainable trade.",
      href: "/vision"
    },
    {
      number: "03",
      title: "Compassionate Coexistence",
      tagline: "Emotional healing with animals",
      description: "Embracing medical healing, street boundaries, emotional care, and respectful coexistence between humans and animals.",
      href: "/community"
    }
  ];

  const rightColumnItems = [
    {
      number: "02",
      title: "Collective Empowerment",
      tagline: "Community-driven rescue",
      description: "Turning compassion into everyday neighborhood action through awareness, local circles, and shared community resources.",
      href: "/community"
    },
    {
      number: "04",
      title: "Cultural Revival",
      tagline: "Transforming society through empathy",
      description: "Reviving historical and spiritual values of empathy, responsibility, and coexistence in every family and neighborhood.",
      href: "/vision"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="four-cs" className="py-24 bg-light-bg relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block mb-3">
            our core ideals
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth tracking-tight">
            our 4 c's
          </h2>
          <div className="w-16 h-[1px] bg-earth/15 mx-auto mt-6"></div>
        </motion.div>

        {/* 2-Column Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16"
        >
          {/* Left Column */}
          <div className="space-y-16">
            {leftColumnItems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group flex flex-col items-start text-left space-y-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg italic text-warm/80 font-medium">
                    {item.number}
                  </span>
                  <Link 
                    to={item.href}
                    className="font-serif text-2.5xl sm:text-3xl font-light text-earth group-hover:text-light-brown transition-colors duration-300 decoration-light-brown/20 underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="font-serif italic text-sm text-sage tracking-wider">
                    {item.tagline}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {rightColumnItems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group flex flex-col items-start text-left space-y-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg italic text-warm/80 font-medium">
                    {item.number}
                  </span>
                  <Link 
                    to={item.href}
                    className="font-serif text-2.5xl sm:text-3xl font-light text-earth group-hover:text-light-brown transition-colors duration-300 decoration-light-brown/20 underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="font-serif italic text-sm text-sage tracking-wider">
                    {item.tagline}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Explore Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Link 
            to="/vision"
            className="inline-block px-10 py-3.5 border border-earth/25 text-earth hover:bg-earth hover:text-cream hover:border-earth font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            Explore The Vision
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
