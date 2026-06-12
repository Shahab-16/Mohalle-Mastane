import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRegCheckCircle, FaRegTimesCircle, FaInstagram } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FundraisingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="flex flex-col min-h-screen bg-light-bg text-earth font-sans">
      <Navbar />

      <main className="flex-grow">

        {/* HERO SECTION */}
        <section className="relative min-h-[100vh] pt-36 pb-28 px-6 bg-earth text-cream text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(196,162,101,0.15)_0%,transparent_50%)] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-warm/10 text-warm rounded-full text-xs font-bold tracking-widest uppercase border border-warm/20">
              ✦ Fundraising Campaign · Rourkela ✦
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
              Every Mohalla<br />Has a Story
            </h1>
            <p className="text-lg sm:text-xl text-cream/80 max-w-2xl font-serif italic">
              "Building a world where compassion has an address"
            </p>
            <span className="text-xs font-bold tracking-widest uppercase text-warm/70">
              Mohalle Mastane · Nexus of Coexistence
            </span>
          </motion.div>
        </section>

        {/* SECTION 1: THE REALITY */}
        <section className="py-24 px-6 bg-light-bg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6 text-left">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">01 · The Reality on Our Streets</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-earth leading-tight">
                Rourkela's<br /><span className="italic font-normal text-moss">Silent Crisis</span>
              </h2>
              <p className="text-xs leading-relaxed text-earth/80">
                Rourkela faces a massive veterinary care deficit. Currently, only one government veterinary facility exists to serve approximately 100 cases a day. With no dedicated isolation wards, diagnostic machinery, or species-specific intensive care units, injured and sick animals on the streets are left in agony.
              </p>
              <p className="text-xs leading-relaxed text-earth/80">
                Individual rescuers try to bridge the gap, but they face immense strain, frequently housing 20–30 rescued animals in their own homes without formal medical training, assistance, or support.
              </p>
            </motion.div>

            {/* Stats list */}
            <motion.div {...fadeIn} className="lg:col-span-5 space-y-4">
              {[
                { count: "1,220", label: "Registered cruelty complaints in Odisha (2023–24)" },
                { count: "42.9%", label: "Cruelty rate among reported cases" },
                { count: "21.4%", label: "Average survival rate for injured stray animals" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-earth text-cream p-6 rounded-2xl text-left border border-earth/10 flex items-center gap-6">
                  <span className="font-serif text-3xl font-bold text-warm leading-none shrink-0">{stat.count}</span>
                  <p className="text-[10px] tracking-wider leading-relaxed text-cream/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: THE GAP */}
        <section className="py-24 px-6 bg-cream text-earth">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeIn} className="text-left space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">02 · The Gap</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
                Why existing solutions<br /><span className="italic font-normal text-moss">are not enough</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🏚️", title: "No Infrastructure", desc: "No local isolation wards exist for highly contagious cases like Parvovirus or Distemper. There are no specialized operating theatres, ICU setups, or separate convalescent spaces." },
                { icon: "🏘️", title: "Rescuers Alone", desc: "Individual animal rescuers carry the physical, mental, and financial burden of housing 20–30 sick street animals in their private homes, without standard medical setups." },
                { icon: "📍", title: "Inaccessible Facilities", desc: "Shelters located on the far outskirts of cities cannot respond to emergency trauma cases in time. Active rescue is limited by physical distance and lack of transport." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="bg-light-bg border border-earth/5 p-8 rounded-3xl text-left space-y-4 shadow-sm"
                >
                  <span className="text-4xl block">{item.icon}</span>
                  <h4 className="font-serif text-lg font-bold text-earth">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-earth/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DHARMA QUOTE */}
        <section className="py-20 px-6 bg-earth text-cream text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p {...fadeIn} className="font-serif text-xl sm:text-3xl font-light italic leading-relaxed text-warm">
              "The land is not merely valued for profit, nor are animals mere servants to man. Where action is rooted in dharma, divinity begins to awaken."
            </motion.p>
            <motion.span {...fadeIn} className="text-xs tracking-widest uppercase opacity-40 block">
              — Mohalle Mastane · Nexus of Coexistence —
            </motion.span>
          </div>
        </section>

        {/* SECTION 3: THE OPPORTUNITY */}
        <section className="py-24 px-6 bg-light-bg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6 text-left">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">06 · The Opportunity</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-earth leading-tight">
                A replicable model<br /><span className="italic font-normal text-moss">for every city</span>
              </h2>
              <p className="text-xs leading-relaxed text-earth/80">
                Rourkela is serving as our prototype. The challenges we face here are identical to those in 640+ districts across India. By establishing a working system here, we create a blueprint that can be easily customized and deployed to any small town lacking veterinary infrastructure.
              </p>
              <p className="text-xs leading-relaxed text-earth/80">
                It isn't about building bigger shelters, but about spreading collective civic responsibility, utilizing local community energy, and supporting them with a centralized medical hub.
              </p>
            </motion.div>

            {/* Stats list */}
            <motion.div {...fadeIn} className="lg:col-span-5 space-y-4">
              {[
                { count: "80M+", label: "Stray animal population in India needing care" },
                { count: "88%", label: "Cities without functional rescue infrastructure" },
                { count: "72%", label: "Citizens willing to support local street animals" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-warm text-earth p-6 rounded-2xl text-left flex items-center gap-6 shadow-sm">
                  <span className="font-serif text-3xl font-bold text-earth leading-none shrink-0">{stat.count}</span>
                  <p className="text-[10px] tracking-wider leading-relaxed text-earth/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: HUMAN IMPACT */}
        <section className="py-24 px-6 bg-cream text-earth">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeIn} className="text-left space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">05 · Human Impact</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
                Care is not a job.<br /><span className="italic font-normal text-moss">It is a way of life.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <motion.div {...fadeIn} className="bg-earth text-cream p-8 rounded-3xl flex flex-col justify-between text-left">
                <p className="font-serif italic text-lg leading-relaxed text-cream/90">
                  "No one is born a rescuer. It comes from a place of deep empathy — a natural calling to protect those who cannot speak. Seeing them suffer on the road and walking past was never an option."
                </p>
                <span className="text-xs uppercase tracking-widest text-warm font-bold block mt-6">— Rourkela Street Rescuer</span>
              </motion.div>

              <motion.div {...fadeIn} className="border border-earth/10 p-8 rounded-3xl flex flex-col justify-center gap-6 bg-light-bg text-left">
                <h4 className="font-serif font-bold text-xl text-earth">The Burden Today:</h4>
                <div className="space-y-4 text-xs font-medium">
                  <div className="flex items-center gap-3">
                    <FaExclamationTriangle className="text-rust text-lg shrink-0" />
                    <span>30+ Animals per rescuer home</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaExclamationTriangle className="text-rust text-lg shrink-0" />
                    <span>100+ Daily distress cases across Rourkela</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaExclamationTriangle className="text-rust text-lg shrink-0" />
                    <span>0 Functional animal isolation wards</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5: VOLUNTEER GUIDE */}
        <section className="py-24 px-6 bg-earth text-cream">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">Campaign Day Code of Conduct</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">Representing Mohalle Mastane</h2>
              <p className="text-xs text-cream/60 max-w-xl">
                When you volunteer at our campaign desk in Rourkela, you represent a movement built on compassion. These values guide our interactions with the public.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* How We Show Up */}
              <motion.div {...fadeIn} className="border border-cream/10 bg-cream/5 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-serif font-bold text-warm flex items-center gap-3">
                  <FaRegCheckCircle /> How We Show Up
                </h3>
                <ul className="space-y-3.5 text-xs text-cream/80 list-none">
                  {[
                    "Approach people with warmth, patience, and genuine care",
                    "Share real stories — of animals we've helped, of rescuers who've struggled",
                    "Listen first; let people feel heard before we ask for anything",
                    "Be honest about where every rupee goes",
                    "Invite them in — to volunteer, to share, to care",
                    "Carry the Mohalle Mastane identity with pride and humility",
                    "Encourage people to follow and spread the word"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-warm font-bold text-sm leading-none shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What We Avoid */}
              <motion.div {...fadeIn} className="border border-cream/10 bg-cream/5 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-serif font-bold text-rust flex items-center gap-3">
                  <FaRegTimesCircle /> What We Avoid
                </h3>
                <ul className="space-y-3.5 text-xs text-cream/80 list-none">
                  {[
                    "Pressuring anyone for a donation",
                    "Making exaggerated claims or promises",
                    "Displaying distressing images without consent or context",
                    "Working without proper authorisation from the team lead",
                    "Behaving in a way that doesn't reflect our values of respect and care",
                    "Treating this as routine — it is sacred work"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rust font-bold text-sm leading-none shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CALL TO COEXISTENCE */}
        <section className="py-24 px-6 bg-petal text-earth text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div {...fadeIn} className="space-y-3 flex flex-col items-center">
              <div className="text-xs font-bold tracking-widest uppercase text-moss">08 · A Call to Coexistence</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight max-w-lg">
                Let every mohalla heal.<br />Build spaces.<br />Build consciousness.
              </h2>
            </motion.div>

            <motion.p {...fadeIn} className="text-xs leading-relaxed max-w-md mx-auto text-earth/80">
              Your support makes Rourkela's stray animal infrastructure possible. Join the campaign to set up our prototype care system.
            </motion.p>

            <motion.div {...fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="/donate"
                className="w-full sm:w-auto px-8 py-3.5 bg-earth text-cream hover:bg-moss hover:scale-105 active:scale-95 font-bold rounded-xl shadow-md transition-all duration-200"
              >
                Support the Campaign
              </a>
              <a
                href="https://instagram.com/mohallemastane"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-earth hover:bg-earth/5 font-bold rounded-xl transition-all duration-200"
              >
                <FaInstagram /> @mohallemastane
              </a>
            </motion.div>

            <motion.div {...fadeIn} className="pt-6">
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-50 block">Contact Campaign Team</span>
              <a href="mailto:mohalle.mastane@gmail.com" className="text-xs font-semibold text-moss hover:text-earth underline transition-colors">
                mohalle.mastane@gmail.com
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
