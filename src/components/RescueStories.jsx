import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';

// Import rescue images
import rescue1 from '../assets/rescues/rescue1.png';
import rescue2 from '../assets/rescues/rescue2.png';
import rescue3 from '../assets/rescues/rescue3.png';
import rescue4 from '../assets/rescues/rescue4.png';
import rescue5 from '../assets/rescues/rescue5.png';
import rescue6 from '../assets/rescues/rescue6.png';

export default function RescueStories() {
  const scrollRef = useRef(null);

  const stories = [
    {
      image: rescue1,
      caption: "Injured, Abandoned. Now Loved.",
      category: "Rescue"
    },
    {
      image: rescue2,
      caption: "From Pain To Playfulness.",
      category: "Treatment"
    },
    {
      image: rescue3,
      caption: "Rescued With Love. Adopted Forever.",
      category: "Adoption"
    },
    {
      image: rescue4,
      caption: "A Second Chance at Life.",
      category: "Rescue"
    },
    {
      image: rescue5,
      caption: "Healed and Happy.",
      category: "Success"
    },
    {
      image: rescue6,
      caption: "From Streets to Safety.",
      category: "Rescue"
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="rescue-stories" className="py-20 bg-beige/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-brown/10 text-primary-brown rounded-full text-sm font-semibold">
              <FaHeart className="text-accent-gold" />
              Rescue Chronicles
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown">
              Their Journey to Healing
            </h2>
            <p className="max-w-2xl text-primary-brown/85 font-sans">
              Real stories of hope and survival from the streets. Witness the power of compassion in action.
            </p>
          </div>

          {/* Custom Navigation buttons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button 
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Stories Horizontal List */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {stories.map((story, idx) => (
            <motion.div
              key={story.caption + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-beige/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                {/* Image Wrapper */}
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img 
                    src={story.image}
                    alt={story.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-primary-brown tracking-wider uppercase rounded-full shadow-sm">
                    {story.category}
                  </span>
                </div>

                {/* Caption Block */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <p className="text-base sm:text-lg font-serif font-bold text-primary-brown leading-snug group-hover:text-accent-gold transition-colors duration-200">
                    {story.caption}
                  </p>
                  <div className="pt-4 border-t border-beige/40 mt-4 flex items-center justify-between">
                    <span className="text-xs text-primary-brown/50 font-sans">Coexistence Story</span>
                    <span className="text-xs font-bold text-accent-gold uppercase tracking-wider group-hover:underline">Read Story →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Styles to hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
