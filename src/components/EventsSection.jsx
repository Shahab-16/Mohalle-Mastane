import { motion } from 'framer-motion';
import { FaChevronRight, FaBullhorn, FaUsers } from 'react-icons/fa';
import { GiBed, GiWaterDrop, GiBowlOfRice } from 'react-icons/gi';
import boraBedImg from '../assets/events/bora_bed.png';
import waterBowlImg from '../assets/events/water_bowl.png';

export default function EventsSection() {
  const featuredEvents = [
    {
      title: "Be The Reason They Stay Warm",
      subtitle: "Bora beds for stray dogs this winter. Be the reason a dog gets warm.",
      image: boraBedImg,
      price: "₹40",
      priceNote: "Can Bring Warmth, Be A Life.",
      cta: "Support Now"
    },
    {
      title: "Water Bowl Campaign",
      subtitle: "Keep water bowls outside your homes. Fresh water saves stray lives daily.",
      image: waterBowlImg,
      price: null,
      priceNote: null,
      cta: "Join The Movement"
    }
  ];

  const quickLinks = [
    { icon: GiBed, label: "Bora Bed Initiative" },
    { icon: GiWaterDrop, label: "Water Bowl Campaign" },
    { icon: GiBowlOfRice, label: "Feeding Drives" },
    { icon: FaBullhorn, label: "Awareness Events" },
    { icon: FaUsers, label: "Community Meetups" }
  ];

  return (
    <section id="events" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-brown/8 border border-primary-brown/15 rounded-full text-sm font-semibold text-primary-brown">
              ✦ Events & Initiatives ✦
            </div>
          </div>
          <a 
            href="#" 
            className="text-sm font-semibold text-accent-gold hover:text-light-brown flex items-center gap-1 mt-4 md:mt-0 transition-colors cursor-pointer"
          >
            See All Events <FaChevronRight className="text-[9px]" />
          </a>
        </motion.div>

        {/* Featured Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {featuredEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-3xl border border-beige/60 shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text & Action Section */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary-brown group-hover:text-accent-gold transition-colors duration-200 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-primary-brown/80 font-sans leading-relaxed">
                    {event.subtitle}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  {event.price && (
                    <div className="flex items-center gap-3 bg-light-brown/10 rounded-xl px-4 py-2.5">
                      <span className="text-2xl font-serif font-bold text-light-brown">{event.price}</span>
                      <span className="text-xs font-sans text-primary-brown/70">{event.priceNote}</span>
                    </div>
                  )}

                  <button className="w-full py-3 px-6 bg-light-brown hover:bg-primary-brown text-cream hover:text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-sm sm:text-base group/btn">
                    <span>{event.cta}</span>
                    <FaChevronRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Link Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {quickLinks.map((link, idx) => {
            const IconComp = link.icon;
            return (
              <button
                key={idx}
                className="flex flex-col items-center gap-2 px-5 py-4 bg-white border border-beige/60 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group min-w-[110px]"
              >
                <div className="w-10 h-10 rounded-full bg-light-brown/10 text-light-brown flex items-center justify-center text-xl group-hover:bg-light-brown group-hover:text-cream transition-all duration-300">
                  <IconComp />
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-semibold text-primary-brown/80 text-center leading-tight">
                  {link.label}
                </span>
              </button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
