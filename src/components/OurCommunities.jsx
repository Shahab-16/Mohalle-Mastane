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
    <section id="communities" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-brown/8 border border-primary-brown/15 rounded-full text-sm font-semibold text-primary-brown mb-4">
            ✦ Our Communities ✦
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Map Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-beige/60 bg-white p-3">
              <div className="relative">
                <img 
                  src={communityMap} 
                  alt="Neighborhood Community Map"
                  className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl"
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
                    <div className="px-3 py-1.5 bg-light-brown hover:bg-primary-brown text-cream text-[10px] sm:text-xs font-semibold rounded-full shadow-lg hover:shadow-xl whitespace-nowrap animate-float transition-all duration-300" style={{ animationDelay: `${idx * 0.6}s` }}>
                      {area.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-base sm:text-lg text-primary-brown/85 font-sans leading-relaxed">
              Each area has its own heroes, working together for a better tomorrow. Our community network spans across multiple neighborhoods, creating an interconnected ecosystem of care and compassion for street animals.
            </p>

            {/* Area List */}
            <div className="space-y-3">
              {areas.map((area, idx) => (
                <a 
                  key={idx} 
                  href={area.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-beige/60 rounded-xl shadow-sm hover:shadow-md hover:border-light-brown/30 transition-all duration-300 cursor-pointer group block"
                >
                  <div className="w-3 h-3 rounded-full bg-light-brown group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm font-sans font-semibold text-primary-brown group-hover:text-light-brown transition-colors duration-200">
                    {area.name}
                  </span>
                </a>
              ))}
            </div>

            <a 
              href="https://www.google.com/maps/place/Rourkela,+Odisha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-light-brown text-cream hover:bg-primary-brown hover:scale-105 active:scale-95 font-bold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              Explore Your Area
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
