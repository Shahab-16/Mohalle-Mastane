import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHandHoldingUsd, 
  FaAmbulance, 
  FaHome, 
  FaStethoscope, 
  FaBone,
  FaBookOpen,
  FaCalendarCheck,
  FaMapMarkedAlt,
  FaNetworkWired,
  FaPaw
} from 'react-icons/fa';

export default function SupportEcosystem() {
  const services = [
    { icon: FaHandHoldingUsd, number: "1", label: "Funding" },
    { icon: FaAmbulance, number: "2", label: "Rescuing" },
    { icon: FaHome, number: "3", label: "Fostering Space for Injured Animals" },
    { icon: FaStethoscope, number: "4", label: "Veterinary Support" },
    { icon: FaBone, number: "5", label: "Feeding Animals" },
    { icon: FaBookOpen, number: "6", label: "Storytelling & Awareness" },
    { icon: FaCalendarCheck, number: "7", label: "Event Involvement" },
    { icon: FaMapMarkedAlt, number: "8", label: "Land & Shelter Development" },
    { icon: FaNetworkWired, number: "9", label: "Expanding Rescuer Network" },
    { icon: FaPaw, number: "10", label: "Adoption" }
  ];

  return (
    <section id="support" className="py-20 bg-beige/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
            Support The Ecosystem of Compassion
          </h2>
          <p className="text-sm sm:text-base text-primary-brown/70 font-sans max-w-2xl mx-auto">
            Your support helps us continue our mission in every mohalla.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mb-14"
        >
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-center text-center gap-3 p-5 bg-cream rounded-2xl border border-beige/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-light-brown/10 text-light-brown flex items-center justify-center text-2xl group-hover:bg-light-brown group-hover:text-cream transition-all duration-300">
                    <IconComp />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-light-brown text-cream text-[9px] font-bold flex items-center justify-center shadow-sm">
                    {service.number}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-semibold text-primary-brown/80 leading-tight">
                  {service.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Donation CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-primary-brown to-light-brown rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-gold/15 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream">
              Every Contribution Creates a Difference
            </h3>
            <Link
              to="/donate"
              className="inline-flex items-center px-8 py-3 bg-accent-gold text-primary-brown hover:bg-cream hover:scale-105 active:scale-95 font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
