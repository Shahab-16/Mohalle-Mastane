import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import fourCs1 from '../assets/four_cs_1.png';
import fourCs2 from '../assets/four_cs_2.png';
import fourCs3 from '../assets/four_cs_3.png';

export default function Our4Cs() {
  const items = [
    {
      number: "1",
      title: "Conscious Living",
      description: "Mindful, cruelty-free living through everyday choices and community participation.",
      image: fourCs1
    },
    {
      number: "2",
      title: "Collective Empowerment",
      description: "Turning compassion into everyday action through awareness and unity.",
      image: fourCs2
    },
    {
      number: "3",
      title: "Compassionate Coexistence",
      description: "Embracing healing and respectful coexistence between humans and animals.",
      image: fourCs3
    },
    {
      number: "4",
      title: "Cultural Revival",
      description: "Reviving values of empathy, responsibility and coexistence in every community.",
      image: null
    }
  ];

  return (
    <section id="four-cs" className="py-20 bg-beige/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-brown/8 border border-primary-brown/15 rounded-full text-sm font-semibold text-primary-brown mb-4">
            ✦ Our 4 C's ✦
          </div>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-cream rounded-3xl border border-beige/60 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Text Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-light-brown/15 text-light-brown flex items-center justify-center font-serif font-bold text-lg">
                      {item.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-brown group-hover:text-light-brown transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-primary-brown/80 font-sans leading-relaxed">
                    {item.description}
                  </p>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-gold hover:text-light-brown transition-colors duration-200 mt-2 cursor-pointer">
                    <FaChevronRight className="text-[8px]" />
                  </button>
                </div>
                
                {/* Image */}
                {item.image && (
                  <div className="sm:w-44 md:w-52 flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                {!item.image && (
                  <div className="sm:w-44 md:w-52 flex-shrink-0 bg-gradient-to-br from-light-brown/20 to-accent-gold/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="text-4xl">🤝</span>
                      <p className="text-[10px] font-sans font-medium text-primary-brown/50 mt-2">Community Values</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <button className="px-8 py-3 bg-light-brown text-cream hover:bg-primary-brown hover:scale-105 active:scale-95 font-bold rounded-xl shadow-md transition-all duration-300 cursor-pointer">
            Explore In Detail
          </button>
        </motion.div>

      </div>
    </section>
  );
}
