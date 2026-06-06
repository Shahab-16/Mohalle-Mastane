import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Import rescuer/volunteer images
import anshuman from '../assets/volunteers/anshuman.png';
import bhawani1 from '../assets/volunteers/bhawani.png';
import narayan1 from '../assets/volunteers/narayan.png';
import seema from '../assets/volunteers/seema.png';

export default function RescuerWall() {
  const rescuers = [
    {
      image: anshuman,
      quote: "Rescued her from the rain. Today she sleeps in safety.",
      name: "— Riya, Civil Township"
    },
    {
      image: bhawani1,
      quote: "He was broken, now he runs like the wind. We gave him hope.",
      name: "— Amit, Sector 6"
    },
    {
      image: narayan1,
      quote: "A little care can change a life. Every animal deserves love.",
      name: "— Neha, Koel Nagar"
    },
    {
      image: seema,
      quote: "She was scared of humans. Now she trusts us with her puppies.",
      name: "— Seema Mohanty"
    }
  ];

  return (
    <section id="rescuer-wall" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-brown leading-tight">
            Rescuer Stories<br />Community Wall
          </h2>
          <p className="text-sm sm:text-base text-primary-brown/70 font-sans max-w-xl">
            Dedicated to the rescuers who have stood by stray animals and given them love, care, and shelter.
          </p>
          <button className="px-6 py-2.5 bg-light-brown text-cream hover:bg-primary-brown font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer text-sm">
            Share Your Story
          </button>
        </motion.div>

        {/* Polaroid-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rescuers.map((rescuer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
              className="bg-white rounded-xl p-3 shadow-lg border border-beige/40 cursor-pointer"
            >
              {/* Photo */}
              <div className="h-52 sm:h-56 rounded-lg overflow-hidden mb-3">
                <img 
                  src={rescuer.image} 
                  alt={rescuer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quote */}
              <div className="px-1 pb-1 space-y-2">
                <div className="flex gap-2">
                  <FaQuoteLeft className="text-accent-gold/50 text-xs flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-sans text-primary-brown/80 leading-relaxed italic">
                    {rescuer.quote}
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs font-sans font-semibold text-primary-brown/50 text-right">
                  {rescuer.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
