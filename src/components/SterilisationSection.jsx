import { FaCut, FaHeart, FaCheckCircle, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SterilisationSection() {
  const steps = [
    {
      step: "01",
      title: "Trap",
      description: "Animals are carefully and humanely trapped using safe, cage-based methods without causing stress or injury."
    },
    {
      step: "02",
      title: "Neuter",
      description: "A certified veterinarian performs the sterilisation under proper anaesthesia and full surgical care."
    },
    {
      step: "03",
      title: "Return",
      description: "Post-recovery, the animals are returned to their home territory — healthier, safer, and population-controlled."
    },
  ];

  const benefits = [
    { icon: FaShieldAlt, text: "Reduces rabies & disease transmission" },
    { icon: FaCheckCircle, text: "Controls population humanely & ethically" },
    { icon: FaHeart, text: "Improves long-term animal health & behaviour" },
    { icon: FaCut, text: "Prevents unnecessary suffering & litter births" },
  ];

  return (
    <section id="sterilisation" className="py-20 bg-beige/25 relative overflow-hidden">
      {/* Background decorative paw prints */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 right-10 text-[200px] text-primary-brown rotate-12">🐾</div>
        <div className="absolute bottom-10 left-10 text-[150px] text-primary-brown -rotate-12">🐾</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted-teal/15 text-primary-brown rounded-full text-sm font-semibold border border-muted-teal/25">
            <FaCut className="text-muted-teal" />
            Animal Population Management
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
            Sterilisation Program
          </h2>
          <p className="text-primary-brown/75 font-sans leading-relaxed">
            We follow the internationally recognised <strong>Trap-Neuter-Return (TNR)</strong> method — the most humane and effective approach to managing stray animal populations in our communities.
          </p>
        </div>

        {/* TNR Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative bg-cream rounded-3xl p-8 border border-beige/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Big step number watermark */}
              <div className="absolute -top-4 -right-2 text-[100px] font-serif font-black text-primary-brown/5 leading-none select-none">
                {s.step}
              </div>
              
              <div className="space-y-4 relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-brown text-cream text-lg font-serif font-bold shadow-md">
                  {s.step}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-brown group-hover:text-accent-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-primary-brown/75 font-sans text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Connector arrow — hidden on last */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-accent-gold flex items-center justify-center shadow">
                    <FaArrowRight className="text-white text-xs" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits & CTA Row */}
        <div className="bg-primary-brown rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Benefits list */}
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-bold text-cream">
              Why Sterilisation Matters
            </h3>
            <ul className="space-y-4">
              {benefits.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-cream/10 text-accent-gold flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>
                  <span className="font-sans text-sm text-cream/85">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-cream/10 border border-cream/20 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
            <div className="w-14 h-14 rounded-full bg-accent-gold/20 border border-accent-gold/30 flex items-center justify-center text-accent-gold text-2xl">
              <FaHeart />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-serif font-bold text-cream">Support Our TNR Program</h4>
              <p className="text-cream/70 font-sans text-sm leading-relaxed">
                ₹500 covers the full sterilisation cost for one animal — a permanent, compassionate solution.
              </p>
            </div>
            <Link
              to="/donate"
              id="sterilisation-donate-cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-gold hover:bg-[#d4a857] text-primary-brown font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sponsor a Sterilisation
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
