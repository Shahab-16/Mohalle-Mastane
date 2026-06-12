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
    <section id="rescuer-wall" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-left space-y-4"
        >
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block">
            stories from the streets
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth leading-tight">
            rescuers' community wall
          </h2>
          <p className="font-sans text-xs sm:text-sm text-earth/70 font-light max-w-xl leading-relaxed">
            A dedication to the neighbors who open their homes and hearts to feed, heal, and house animals in distress.
          </p>
          <button className="inline-block px-8 py-3 border border-earth/25 text-earth hover:bg-earth hover:text-cream hover:border-earth font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer">
            Share Your Story
          </button>
        </motion.div>

        {/* Polaroid-style Grid - refined for a sophisticated, clean print-look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rescuers.map((rescuer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-light-bg p-4 border border-earth/10 hover:border-earth/25 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="h-52 sm:h-56 overflow-hidden bg-earth/5 rounded mb-4">
                <img 
                  src={rescuer.image} 
                  alt={rescuer.name}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Quote */}
              <div className="px-1 pb-1 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="flex gap-2">
                  <FaQuoteLeft className="text-warm text-xs flex-shrink-0 mt-0.5 opacity-60" />
                  <p className="font-serif italic text-sm text-earth/80 leading-relaxed">
                    {rescuer.quote}
                  </p>
                </div>
                <p className="font-sans text-[10px] font-semibold text-sage uppercase tracking-wider text-right">
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
