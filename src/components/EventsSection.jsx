import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { GiBed, GiWaterDrop, GiBowlOfRice } from 'react-icons/gi';
import { FaBullhorn, FaUsers } from 'react-icons/fa';
import boraBedImg from '../assets/events/bora_bed.png';
import waterBowlImg from '../assets/events/water_bowl.png';

export default function EventsSection() {
  const featuredEvents = [
    {
      title: "Be The Reason They Stay Warm",
      subtitle: "Bora beds for stray dogs this winter",
      description: "As temperatures drop, street dogs in Rourkela struggle to find dry, warm spots. We design and distribute insulated jute/bora beds to keep them protected from the damp ground. A small gesture that stands between an animal and severe winter exposure.",
      image: boraBedImg,
      price: "₹40",
      priceNote: "sponsors one insulated jute bed",
      cta: "Support Now",
      link: "/donate"
    },
    {
      title: "Water Bowl Campaign",
      subtitle: "Hydration routes across the neighborhood",
      description: "Fresh water is a basic necessity often unavailable on dry city lanes. Through this campaign, we distribute and place clean clay water bowls outside homes and shops, encouraging neighbors to clean and refill them daily. It's a simple, life-saving habit.",
      image: waterBowlImg,
      price: null,
      priceNote: null,
      cta: "Join The Movement",
      link: "/donate"
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
    <section id="events" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-earth/10 pb-8 mb-16"
        >
          <div className="text-left space-y-3">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block">
              events & initiatives
            </span>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-earth tracking-tight">
              our collective action
            </h2>
          </div>
          <Link 
            to="/donate" 
            className="text-xs font-bold uppercase tracking-widest text-warm hover:text-light-brown flex items-center gap-2 mt-4 md:mt-0 transition-colors duration-200"
          >
            See All Initiatives <FaChevronRight className="text-[8px]" />
          </Link>
        </motion.div>

        {/* Featured Events Layout */}
        <div className="space-y-24 mb-20">
          {featuredEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section - Clean, thin frame */}
              <div className="w-full lg:w-1/2 overflow-hidden border border-earth/10 p-2 bg-light-bg rounded-lg">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-[300px] sm:h-[360px] object-cover rounded"
                />
              </div>

              {/* Content Section - Editorial typography focus */}
              <div className="w-full lg:w-1/2 text-left space-y-6">
                <div className="space-y-3">
                  <span className="font-serif italic text-sm text-sage tracking-wider block">
                    {event.subtitle}
                  </span>
                  <h3 className="font-serif font-light text-3xl sm:text-4.5xl text-earth leading-tight">
                    {event.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-earth/75 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  {event.price && (
                    <div className="flex items-baseline gap-2 border-b border-earth/10 pb-4">
                      <span className="font-serif text-3xl font-light text-warm">{event.price}</span>
                      <span className="font-sans text-[11px] font-medium tracking-wide text-earth/60 uppercase">
                        — {event.priceNote}
                      </span>
                    </div>
                  )}

                  <Link
                    to={event.link}
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-earth text-cream hover:bg-light-brown transition-all duration-300 font-sans text-xs font-bold uppercase tracking-widest animate-none"
                  >
                    <span>{event.cta}</span>
                    <FaChevronRight className="text-[9px]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Link Badges - Clean underline and borderless text link items */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-12 border-t border-earth/10"
        >
          {quickLinks.map((link, idx) => {
            const IconComp = link.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wider text-earth/70 hover:text-earth cursor-pointer group transition-colors duration-200"
              >
                <IconComp className="text-lg text-sage group-hover:scale-110 transition-transform duration-200" />
                <span className="relative">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-earth transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
