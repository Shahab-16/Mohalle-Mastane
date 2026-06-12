import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaHeart, FaPaw, FaHandshake } from 'react-icons/fa';
import movementGather from '../assets/movement_gather.png';

export default function AboutSection() {
  const stats = [
    {
      count: "850+",
      label: "Active Responders",
      icon: FaUsers
    },
    {
      count: "320+",
      label: "Rescue Stories",
      icon: FaHeart
    },
    {
      count: "1450+",
      label: "Strays Fed & Nourished",
      icon: FaPaw
    },
    {
      count: "25+",
      label: "Mohalla Circles",
      icon: FaHandshake
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Grid: Image & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl border border-earth/10 bg-light-bg p-2">
              <img 
                src={movementGather} 
                alt="Community members gathered with street animals" 
                className="w-full h-[320px] md:h-[400px] object-cover rounded"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block">
              our movement
            </span>
            <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth leading-tight">
              a collective effort, not a service.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-earth/75 font-light leading-relaxed">
              Mohalle Mastane is not an isolated charity operating from a single location. It is a decentralized community initiative that empowers neighbors to coordinate care, feeding, and medical first-aid in their own local circles.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#3C2415]/75 font-light leading-relaxed">
              By giving people on the ground the knowledge, backing, and access to resources they need, we turn random acts of kindness into a resilient, permanent safety network for the animals of Rourkela.
            </p>
            <div className="pt-2">
              <Link 
                to="/community"
                className="inline-block px-10 py-3.5 border border-earth/25 text-earth hover:bg-earth hover:text-cream hover:border-earth font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                how we work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid - Clean editorial borderless statistics columns */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8"
        >
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={idx} 
                className="border-t border-earth/10 pt-6 flex flex-col items-start text-left space-y-3"
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-earth">
                    {stat.count}
                  </span>
                  <IconComp className="text-sage text-sm" />
                </div>
                <p className="font-sans text-[10px] font-bold text-sage uppercase tracking-widest leading-normal">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
