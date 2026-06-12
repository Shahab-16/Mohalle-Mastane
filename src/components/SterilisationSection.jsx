import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaArrowRight, FaShieldAlt, FaCheckCircle, FaCut } from 'react-icons/fa';

export default function SterilisationSection() {
  const steps = [
    {
      step: "01",
      title: "Trap",
      description: "Animals are carefully and humanely captured using stress-free, cage-based methods by trained community handlers."
    },
    {
      step: "02",
      title: "Neuter",
      description: "A licensed veterinarian performs the sterilisation surgery under proper anaesthesia and full clinical care at our partner hospital."
    },
    {
      step: "03",
      title: "Return",
      description: "Following post-operative recovery and healing, the animals are safely returned to their original street territories."
    },
  ];

  const benefits = [
    { icon: FaShieldAlt, text: "Reduces rabies & viral transmission rates" },
    { icon: FaCheckCircle, text: "Manages stray populations humanely & ethically" },
    { icon: FaHeart, text: "Improves long-term behavior and territorial safety" },
    { icon: FaCut, text: "Prevents street puppy mortality and birthing pain" },
  ];

  return (
    <section id="sterilisation" className="py-24 bg-light-bg relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-sage uppercase block mb-3">
            population management
          </span>
          <h2 className="font-serif font-light text-4xl sm:text-5.5xl text-earth tracking-tight">
            the sterilisation program
          </h2>
          <div className="w-16 h-[1px] bg-earth/15 mx-auto mt-6 mb-6"></div>
          <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed max-w-2xl mx-auto">
            We follow the internationally recommended <strong>Trap-Neuter-Return (TNR)</strong> blueprint — the most humane, long-term, and effective approach to stabilizing and securing street animal communities.
          </p>
        </motion.div>

        {/* TNR Steps Grid (Minimalist, borderless, typography-focused) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="space-y-4 text-left border-t border-earth/10 pt-6 relative group"
            >
              <div className="font-serif text-lg italic text-warm/80 font-medium">
                {s.step}
              </div>
              <h3 className="font-serif text-2.5xl font-light text-earth group-hover:text-light-brown transition-colors duration-200">
                {s.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits & CTA Row - Clean editorial grid with thin dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-b border-earth/10 py-16 items-center">
          {/* Benefits list */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-serif font-light text-3xl text-earth">
              Why sterilisation matters
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {benefits.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full border border-earth/10 text-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="text-xs" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-earth/75 font-light leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical divider on large screens */}
          <div className="hidden lg:block lg:col-span-1 h-32 w-[1px] bg-earth/10 mx-auto"></div>

          {/* CTA Box */}
          <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-warm uppercase block">
              sponsor support
            </span>
            <div className="space-y-2">
              <h4 className="font-serif text-2.5xl font-light text-earth">Sponsor a TNR procedure</h4>
              <p className="font-sans text-xs sm:text-sm text-earth/70 font-light leading-relaxed">
                ₹500 covers the complete clinical surgery, vaccination, and recovery support for one street animal.
              </p>
            </div>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-earth hover:text-light-brown transition-colors duration-200 border-b border-earth pb-1"
            >
              Sponsor sterilisation <FaArrowRight className="text-[9px]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
