import { motion } from 'framer-motion';
import { FaHandshake, FaBriefcaseMedical, FaUniversity, FaUsers, FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function CollaborationSection() {
  const partnerTypes = [
    {
      icon: FaBriefcaseMedical,
      title: "Veterinary Clinics & Hospitals",
      description: "Partnering with clinics for subsidized operations, emergency beds, and training support.",
    },
    {
      icon: FaUniversity,
      title: "NGOs & Welfare Bodies",
      description: "Pooling resources, sharing rescue guidelines, and coordinating joint sterilisation programs.",
    },
    {
      icon: FaUsers,
      title: "Local Businesses & Retail",
      description: "Corporate sponsorship for neighborhood kitchens, CSR funding, or donation collection hubs.",
    },
    {
      icon: FaHandshake,
      title: "Resident Welfare Groups",
      description: "Coordinating localized feeding channels, rescue reports, and community vaccination camps.",
    },
  ];

  return (
    <section id="collaboration" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
        >
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block">
            partners in compassion
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth tracking-tight">
            collaboration
          </h2>
          <div className="w-16 h-[1px] bg-earth/15 mx-auto mt-6 mb-6"></div>
          <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed">
            Coexistence cannot be built by one team alone. We partner with veterinary networks, civic bodies, and local businesses to create a permanent safety net for street animals.
          </p>
        </motion.div>

        {/* Partner Type Grid - Clean, borderless list style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 mb-20">
          {partnerTypes.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex gap-5 border-t border-earth/10 pt-6 group text-left"
            >
              <div className="w-10 h-10 rounded-full border border-earth/10 text-sage flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Icon className="text-sm" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-normal text-xl text-earth">
                  {title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner - Flat solid container with elegant typography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-earth text-cream rounded-2xl p-10 md:p-12 relative overflow-hidden"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 text-left z-10">
            <div className="space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-warm uppercase block">
                get in touch
              </span>
              <h3 className="font-serif font-light text-3xl md:text-4xl leading-tight max-w-xl">
                Ready to collaborate?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-cream/70 font-light leading-relaxed max-w-xl">
                Whether you represent a clinic, business, or local community group, reach out and let's organize a safer neighborhood together.
              </p>
            </div>
            <a
              href="https://www.instagram.com/mohallemastane?igsh=MW1qMjBzd2g0ZndmNw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-warm hover:bg-light-brown text-earth hover:text-cream font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              <FaEnvelope />
              <span>Reach out to us</span>
              <FaArrowRight className="text-[9px]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
