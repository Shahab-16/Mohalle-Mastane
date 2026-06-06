import { FaHeart, FaLeaf, FaHome, FaHandHoldingHeart, FaPaw, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import oasisImg from '../assets/oneness_oasis.png';

export default function FundraisingSection() {
  const generalItems = [
    { icon: FaHandHoldingHeart, text: "Community events & outreach" },
    { icon: FaPaw,             text: "Daily animal feeding programs" },
    { icon: FaHome,            text: "Mohalla support initiatives" },
    { icon: FaLeaf,            text: "Sterilisation programs" },
    { icon: FaHeart,           text: "Emergency animal care & welfare" },
  ];

  const oasisItems = [
    "Advanced veterinary care & support facilities",
    "A vegan café promoting conscious living",
    "Permanent sanctuary for paralysed & special-needs dogs",
    "Temporary recovery spaces for injured animals",
    "Community engagement zones & education hubs",
    "Animal boarding & long-term rehabilitation",
  ];

  return (
    <section id="fundraising" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-brown via-accent-gold to-primary-brown opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/15 text-primary-brown rounded-full text-sm font-semibold border border-accent-gold/25">
            <FaHeart className="text-accent-gold" />
            Support Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
            Fundraising
          </h2>
          <p className="text-primary-brown/75 font-sans leading-relaxed">
            Your generosity sustains everything we do — from daily feeding routes to a bold long-term vision. Choose where your heart leads.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ── Card A: General Funding ── */}
          <div className="group bg-beige/40 border border-beige/70 rounded-3xl p-8 flex flex-col gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-2">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                General Funding
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary-brown">
                Sustain Our Everyday Work
              </h3>
              <p className="text-primary-brown/75 font-sans text-sm leading-relaxed">
                This fund directly powers the ongoing, day-to-day operations of Mohalle Mastane — ensuring animals are fed, cared for, and never left behind.
              </p>
            </div>

            <ul className="space-y-3 flex-grow">
              {generalItems.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-brown/10 text-primary-brown flex items-center justify-center flex-shrink-0">
                    <Icon className="text-sm" />
                  </div>
                  <span className="font-sans text-sm text-primary-brown/85">{text}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/donate"
              id="fundraising-general-cta"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-primary-brown hover:bg-light-brown text-cream font-bold rounded-2xl transition-colors duration-200 shadow-md hover:shadow-lg mt-2"
            >
              Donate to General Fund
              <FaArrowRight className="text-sm" />
            </Link>
          </div>

          {/* ── Card B: Oneness Oasis ── */}
          <div className="group relative bg-primary-brown rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {/* Top Image */}
            <div className="relative h-52 overflow-hidden flex-shrink-0">
              <img
                src={oasisImg}
                alt="Oneness Oasis Vision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-brown/80" />
              <span className="absolute bottom-4 left-6 text-xs font-bold uppercase tracking-widest text-accent-gold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                Flagship Vision
              </span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-5 flex-grow">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-cream">
                  Oneness Oasis
                </h3>
                <p className="text-cream/75 font-sans text-sm leading-relaxed">
                  A visionary long-term project envisioned as a multifunctional ecosystem where humans and animals coexist in harmony — far beyond a traditional animal shelter.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-grow">
                {oasisItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
                    <span className="font-sans text-xs text-cream/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/donate"
                id="fundraising-oasis-cta"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-accent-gold hover:bg-[#d4a857] text-primary-brown font-bold rounded-2xl transition-colors duration-200 shadow-md hover:shadow-lg mt-2"
              >
                Support Oneness Oasis
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
