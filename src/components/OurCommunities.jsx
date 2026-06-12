import { motion } from 'framer-motion';
import communityMap from '../assets/community_map.png';

export default function OurCommunities() {
  const areas = [
    { 
      name: "Chhend Colony", 
      position: "top-[15%] left-[25%]",
      mapUrl: "https://www.google.com/maps/place/Chhend+Colony,+Rourkela,+Odisha"
    },
    { 
      name: "Basanti Colony", 
      position: "top-[12%] right-[15%]",
      mapUrl: "https://www.google.com/maps/place/Basanti+Colony,+Rourkela,+Odisha"
    },
    { 
      name: "Civil Township", 
      position: "top-[35%] right-[30%]",
      mapUrl: "https://www.google.com/maps/place/Civil+Township,+Rourkela,+Odisha"
    },
    { 
      name: "Sector Area", 
      position: "bottom-[35%] left-[20%]",
      mapUrl: "https://www.google.com/maps/place/Sector,+Rourkela,+Odisha"
    },
    { 
      name: "Koel Nagar", 
      position: "bottom-[25%] right-[12%]",
      mapUrl: "https://www.google.com/maps/place/Koel+Nagar,+Rourkela,+Odisha"
    }
  ];

  return (
    <section id="communities" className="py-24 bg-cream relative">
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
            local circles
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth tracking-tight">
            our active communities
          </h2>
          <div className="w-16 h-[1px] bg-earth/15 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Map Illustration - Clean and frame borderless */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="rounded-2xl border border-earth/10 bg-light-bg p-2">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={communityMap} 
                  alt="Neighborhood Community Map"
                  className="w-full h-[350px] md:h-[420px] object-cover rounded"
                />
                {/* Area Labels Overlay */}
                {areas.map((area, idx) => (
                  <a 
                    key={idx}
                    href={area.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute ${area.position} hidden md:block z-20 cursor-pointer`}
                  >
                    <div className="px-3.5 py-1.5 bg-earth hover:bg-light-brown text-cream text-[10px] sm:text-xs font-medium rounded-full shadow-md hover:scale-105 active:scale-95 whitespace-nowrap transition-all duration-300">
                      {area.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <p className="font-sans text-xs sm:text-sm text-earth/75 font-light leading-relaxed">
              Each neighborhood operates its own circle of active responders, coordinates local feeds, and manages emergency transport routes. This decentralized effort links together to form a city-wide support ecosystem.
            </p>

            {/* Area List - Clean borderless layout with subtle divider lines */}
            <div className="border-t border-earth/10">
              {areas.map((area, idx) => (
                <a 
                  key={idx} 
                  href={area.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-earth/10 hover:text-light-brown group transition-colors duration-200 block"
                >
                  <span className="font-serif text-lg font-light text-earth group-hover:text-light-brown transition-colors">
                    {area.name}
                  </span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-sage group-hover:text-light-brown transition-colors">
                    view map →
                  </span>
                </a>
              ))}
            </div>

            <a 
              href="https://www.google.com/maps/place/Rourkela,+Odisha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3.5 border border-earth/25 text-earth hover:bg-earth hover:text-cream hover:border-earth font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              explore your area
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
