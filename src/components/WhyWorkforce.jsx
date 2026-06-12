import { motion } from 'framer-motion';

export default function WhyWorkforce() {
  return (
    <section id="why-workforce" className="py-12 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Elegant Editorial Dark Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-earth text-cream rounded-2xl p-12 md:p-20 text-center border border-earth/10 relative overflow-hidden"
        >
          {/* Subtle design element */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,162,101,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-warm uppercase block">
              the core purpose
            </span>
            <h2 className="font-serif font-light text-3xl sm:text-5xl text-cream leading-tight">
              Why do we need a <br />
              community-driven workforce?
            </h2>
            <div className="w-16 h-[1px] bg-warm/30 mx-auto my-6"></div>
            <p className="font-serif italic text-base sm:text-lg text-cream/90 leading-relaxed font-light max-w-2xl mx-auto">
              "Because this is about consciousness — about creating a collective, inclusive movement with a shared identity. Real change doesn't happen through detached observation; it begins when every resident actively participates in their street's healing."
            </p>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
