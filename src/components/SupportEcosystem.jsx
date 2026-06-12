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
    { icon: FaHandHoldingUsd, number: "01", label: "Funding Operations" },
    { icon: FaAmbulance, number: "02", label: "Trauma Rescue Response" },
    { icon: FaHome, number: "03", label: "Fostering Recovery Spaces" },
    { icon: FaStethoscope, number: "04", label: "Veterinary Partnerships" },
    { icon: FaBone, number: "05", label: "Daily Feeding Channels" },
    { icon: FaBookOpen, number: "06", label: "Storytelling & Advocacy" },
    { icon: FaCalendarCheck, number: "07", label: "Campaign Coordination" },
    { icon: FaMapMarkedAlt, number: "08", label: "Infrastructure Wards" },
    { icon: FaNetworkWired, number: "09", label: "Decentralized Networks" },
    { icon: FaPaw, number: "10", label: "Ethical Adoption Drives" }
  ];

  return (
    <section id="support" className="py-24 bg-beige/30 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-3"
        >
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block">
            our operational modules
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth tracking-tight">
            ecosystem of compassion
          </h2>
          <div className="w-16 h-[1px] bg-earth/15 mx-auto mt-6"></div>
        </motion.div>

        {/* Services Grid - Clean borderless grid with fine dividers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12 mb-20"
        >
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-start text-left gap-4 border-t border-earth/10 pt-6 group cursor-pointer"
              >
                <div className="flex justify-between items-baseline w-full">
                  <span className="font-serif text-sm italic text-warm/80 font-medium">
                    {service.number}
                  </span>
                  <IconComp className="text-sage text-sm group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-serif text-base font-normal text-earth group-hover:text-light-brown transition-colors">
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
          transition={{ duration: 0.8 }}
          className="bg-earth text-cream rounded-2xl p-10 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <h3 className="font-serif font-light text-3xl md:text-4xl">
              Every contribution powers this safety net
            </h3>
            <p className="font-sans text-xs sm:text-sm text-cream/70 font-light max-w-lg mx-auto">
              Your support builds veterinary care, supports neighborhood kitchens, and supplies first-aid to local responders.
            </p>
            <Link
              to="/donate"
              className="inline-block px-10 py-3.5 bg-warm hover:bg-light-brown text-earth hover:text-cream font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
