import { motion } from 'framer-motion';
import { 
  FaMobileAlt, 
  FaExclamationTriangle, 
  FaUsers, 
  FaHeartbeat, 
  FaWallet,
  FaLaptopCode
} from 'react-icons/fa';

export default function ProductsSection() {
  const products = [
    {
      title: "Rescue Reporting App",
      description: "A location-based mobile app where citizens can instantly pin and report injured or stray animals in distress, notifying nearby volunteers.",
      icon: FaMobileAlt,
      tag: "Mobile App"
    },
    {
      title: "Emergency Animal SOS",
      description: "An instant alert system connecting critical animal emergencies directly to local veterinary ambulances and rescue teams.",
      icon: FaExclamationTriangle,
      tag: "Alert System"
    },
    {
      title: "Volunteer Network Platform",
      description: "A centralized portal to coordinate feeding schedules, medical log sheets, foster vacancies, and volunteer assignments.",
      icon: FaUsers,
      tag: "SaaS Portal"
    },
    {
      title: "Animal Health Tracker",
      description: "A digital immunization and medical history catalog to keep record of vaccinated and treated community animals.",
      icon: FaHeartbeat,
      tag: "Health Database"
    },
    {
      title: "Donation Management System",
      description: "A transparent dashboard showing live utilization logs, treatment bills, and food drive expenditures for donor trust.",
      icon: FaWallet,
      tag: "Financial Portal"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-primary-brown to-light-brown text-cream relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-muted-teal/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream/10 border border-cream/20 text-accent-gold rounded-full text-sm font-semibold">
            <FaLaptopCode />
            Welfare Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream">
            Future Products
          </h2>
          <p className="text-lg text-cream/80 font-sans">
            We are designing technology to bridge the gap between animal distress and volunteer action. Here are our upcoming platforms designed to digitize animal welfare.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, index) => {
            const IconComp = prod.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-cream/10 backdrop-blur-md border border-cream/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between h-[320px] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow decor inside card */}
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl group-hover:bg-accent-gold/20 transition-colors duration-300"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent-gold text-primary-brown flex items-center justify-center text-2xl shadow-lg">
                      <IconComp />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-cream/20 px-3 py-1 rounded-full text-accent-gold border border-cream/10">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-cream group-hover:text-accent-gold transition-colors duration-200">
                    {prod.title}
                  </h3>
                  
                  <p className="text-cream/80 font-sans text-sm md:text-base leading-relaxed line-clamp-4">
                    {prod.description}
                  </p>
                </div>

                {/* Coming Soon Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-cream/10 mt-4">
                  <span className="text-xs text-cream/50 uppercase tracking-widest font-bold">Innovation</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold/25 border border-accent-gold/30 text-accent-gold text-[10px] font-bold uppercase tracking-wider animate-pulse">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
