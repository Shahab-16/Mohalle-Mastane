import { motion } from 'framer-motion';
import { FaUsers, FaHeart, FaPaw, FaHandshake } from 'react-icons/fa';
import movementGather from '../assets/movement_gather.png';

export default function AboutSection() {
  const stats = [
    {
      count: "850+",
      label: "Volunteers",
      icon: FaUsers,
      color: "text-light-brown bg-light-brown/10"
    },
    {
      count: "320+",
      label: "Rescue Stories",
      icon: FaHeart,
      color: "text-red-600 bg-red-100"
    },
    {
      count: "1450+",
      label: "Animals Helped",
      icon: FaPaw,
      color: "text-[#C08A4E] bg-[#C08A4E]/10"
    },
    {
      count: "25+",
      label: "Communities Connected",
      icon: FaHandshake,
      color: "text-muted-teal bg-muted-teal/10"
    }
  ];

  const scrollNext = () => {
    const el = document.getElementById('why-workforce');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Image & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-beige/60 bg-white p-3">
              <img 
                src={movementGather} 
                alt="Community members gathered with street animals" 
                className="w-full h-[320px] md:h-[400px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
              A Movement. <br />
              Not Just an NGO.
            </h2>
            <p className="text-base sm:text-lg text-primary-brown/85 font-sans leading-relaxed">
              Mohalle Mastane is not an isolated NGO. It is a community-driven movement that unites individuals, rescuers, neighborhoods, and animals into one ecosystem of care.
            </p>
            <p className="text-sm sm:text-base text-primary-brown/75 font-sans leading-relaxed">
              Our vision is to empower local residents to take charge of the stray animals in their own lanes. By building a network of localized care, feeding, and medical support, we make coexistence a living reality rather than a conceptual goal.
            </p>
            
            <button
              onClick={scrollNext}
              className="px-8 py-3 bg-light-brown text-cream hover:bg-primary-brown hover:scale-105 active:scale-95 font-bold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              Know More About Us
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
        >
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-beige/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${stat.color}`}>
                  <IconComp />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-serif font-bold text-primary-brown">
                    {stat.count}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-semibold text-primary-brown/60 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
