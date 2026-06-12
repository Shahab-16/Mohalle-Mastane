import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaCoffee, FaPalette, FaWarehouse, FaLeaf, FaCompass, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VisionPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,145,101,0.15)_0%,transparent_50%)] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-warm/10 text-warm rounded-full text-xs font-bold tracking-widest uppercase border border-warm/20">
              ✦ The Architectural &amp; Community Vision ✦
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-none">
              A Living Ecosystem
            </h1>
            <p className="text-lg sm:text-xl text-cream/80 max-w-xl font-serif italic">
              "Not a shelter. A sustainable blueprint for coexistence."
            </p>
            <span className="text-xs font-bold tracking-widest uppercase text-warm/70">
              Mohalle Mastane · Central Hub Model
            </span>
          </motion.div>
        </section>

        {/* THE CONCEPT */}
        <section className="py-24 px-6 bg-light-bg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6 text-left">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">03 · The Concept</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-earth leading-tight">
                Not a shelter.<br /><span className="italic font-normal text-moss">A living ecosystem.</span>
              </h2>
              <p className="text-xs leading-relaxed text-earth/80">
                Most shelters are crowded facilities operating on the outskirts of cities. They isolate street animals and run on unpredictable charity.
              </p>
              <p className="text-xs leading-relaxed text-earth/80">
                Mohalle Mastane functions differently. It is a dual-layered, integrated movement: a decentralised network of community care units (<strong className="text-moss">Mohalla Circles</strong>) in every street, backed by a centralized medical &amp; public hub (<strong className="text-moss">Central Hub</strong>) that integrates veterinary care, public interaction, vegan dining, local art, and wellness programs.
              </p>
            </motion.div>

            {/* Split cards */}
            <motion.div {...fadeIn} className="lg:col-span-5 space-y-4 text-left">
              <div className="bg-earth text-cream p-6 rounded-2xl border border-earth/10">
                <span className="text-xl font-serif font-bold text-warm block mb-1">Mohalla Circles</span>
                <p className="text-xs leading-relaxed opacity-75">Trained local volunteers offering direct, hyperlocal feeding, first-aid, and monitoring in their own neighborhoods.</p>
              </div>
              <div className="bg-moss text-cream p-6 rounded-2xl border border-moss/10">
                <span className="text-xl font-serif font-bold text-warm block mb-1">The Central Hub</span>
                <p className="text-xs leading-relaxed opacity-75">The medical anchor containing advanced treatment wards, rescuer accommodation, and interactive public spaces.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHAT LIVES INSIDE THE CENTRAL HUB */}
        <section className="py-24 px-6 bg-cream text-earth">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeIn} className="text-left space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">Spatial Design</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">What lives inside the Central Hub</h2>
              <p className="text-xs text-earth/60 max-w-xl leading-relaxed">
                The Central Hub is divided into Private Zones (medical care and operations) and Public Zones (revenue generation and civic engagement), establishing a self-sustaining circle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Private Operations */}
              <motion.div {...fadeIn} className="bg-light-bg border border-earth/5 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-serif font-bold text-moss border-b border-earth/10 pb-2 flex items-center gap-2">
                  🔒 Private Operations Zone
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <FaHospital className="text-2xl text-sage shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif font-bold text-sm">Advanced Veterinary Hospital</h4>
                      <p className="text-xs text-earth/70 leading-relaxed mt-0.5">OPD consults, operating theatre, intensive care (ICU), diagnostic labs, and species-specific recovery zones.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaWarehouse className="text-2xl text-sage shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif font-bold text-sm">Rescuer Accommodation</h4>
                      <p className="text-xs text-earth/70 leading-relaxed mt-0.5">Dedicated, safe living spaces for on-site veterinarians, volunteer staff, and active animal handlers.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Public Engagement */}
              <motion.div {...fadeIn} className="bg-light-bg border border-earth/5 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-serif font-bold text-warm border-b border-earth/10 pb-2 flex items-center gap-2">
                  👁️ Public Engagement Zone
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <FaCoffee className="text-2xl text-accent-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif font-bold text-sm">The Conscious Vegan Café</h4>
                      <p className="text-xs text-earth/70 leading-relaxed mt-0.5">A cozy social café promoting plant-based nutrition, community discussions, and direct rescue sponsorship.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaPalette className="text-2xl text-accent-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif font-bold text-sm">Art Gallery &amp; Workshops</h4>
                      <p className="text-xs text-earth/70 leading-relaxed mt-0.5">Spaces displaying local artwork promoting coexistence, hosting eco-product workshops, and community meetings.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* THE SYSTEM & OPERATION */}
        <section className="py-24 px-6 bg-earth text-cream">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">04 · The System</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">How the ecosystem functions</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "01 · Mohalla Circles — Community First Response", desc: "Setting up hyperlocal street networks where neighborhood volunteers handle initial feeding, basic first-aid, and routine monitoring of street animals." },
                { title: "02 · Central Hub — Advanced Wards & Public Interaction", desc: "A centralized hub featuring advanced medical infrastructure (OT, diagnostics, isolation) alongside public spaces to foster animal-human connections." },
                { title: "03 · Sustainable Revenue — Funding the Compassion", desc: "A self-sustaining model where public spaces (café, art gallery, workshops) generate funds to sponsor operations, medicines, and food kitchens." },
                { title: "04 · Legal & Civic Integration — Standard Framework", desc: "All rescue operations are aligned with the Prevention of Cruelty to Animals Act 1960, Animal Birth Control Rules 2023, and AWBI standards." }
              ].map((sys, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="bg-cream/5 border border-cream/10 p-8 rounded-3xl space-y-2 hover:border-warm/30 transition-all duration-300"
                >
                  <h4 className="font-serif text-lg font-bold text-warm">{sys.title}</h4>
                  <p className="text-xs leading-relaxed text-cream/70">{sys.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CIVIC CONSCIOUSNESS PILLARS */}
        <section className="py-24 px-6 bg-light-bg text-earth">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeIn} className="text-left space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">Core Pillars</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">Pillars of Civic Consciousness</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Compassion", desc: "Deepening empathy towards all living creatures, actively stepping forward to alleviate their suffering." },
                { title: "Community", desc: "Building close neighborhood networks that share the responsibility of stray animal care." },
                { title: "Coexistence", desc: "Designing living and urban spaces where animals and humans coexist without friction." },
                { title: "Consciousness", desc: "Promoting cruelty-free, sustainable choices that reflect a heightened state of environmental awareness." }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="bg-cream border border-earth/5 p-6 rounded-2xl text-left space-y-3 shadow-sm"
                >
                  <FaLeaf className="text-sage text-xl" />
                  <h4 className="font-serif text-lg font-bold text-earth">{pillar.title}</h4>
                  <p className="text-xs leading-relaxed text-earth/70">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE 4 C's */}
        <section className="py-24 px-6 bg-cream text-earth">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeIn} className="text-left space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">✦ Our 4 C's ✦</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">The Core Ideals</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { num: "1", title: "Conscious Living", desc: "Mindful, cruelty-free living through everyday choices, vegan nutrition, and local sustainable trade." },
                { num: "2", title: "Collective Empowerment", desc: "Turning compassion into everyday neighborhood action through awareness, circles, and shared resources." },
                { num: "3", title: "Compassionate Coexistence", desc: "Embracing medical healing, street boundaries, and respectful coexistence between humans and animals." },
                { num: "4", title: "Cultural Revival", desc: "Reviving historical and spiritual values of empathy, responsibility, and coexistence in every family." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="bg-light-bg border border-earth/10 p-8 rounded-3xl flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-xl bg-moss text-cream font-serif font-bold text-lg flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-earth">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-earth/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ROADMAP */}
        <section className="py-24 px-6 bg-earth text-cream">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">07 · The Roadmap</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">From one mohalla to a nation</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { phase: "🌱 Phase 1 · Now", title: "Establish Prototype", desc: "Rourkela Campaign, raise seed funding, establish neighborhood feeds, and formally register the Mohalle Mastane Trust with an initial corpus." },
                { phase: "🏗️ Phase 2 · Near Term", title: "Launch Central Hub", desc: "Secure land for the Rourkela Central Hub, setup advanced medical facilities (OPD/OT), and roll out the first 5 neighborhood circles." },
                { phase: "🌐 Phase 3 · Long Term", title: "Rollout National Blueprint", desc: "Refine the operational and financial blueprint, roll out community software, and export this replicable model to small towns across India." }
              ].map((roadmap, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="border border-cream/10 bg-cream/5 p-8 rounded-3xl space-y-4"
                >
                  <span className="text-xs font-bold text-warm uppercase tracking-wider block">{roadmap.phase}</span>
                  <h4 className="font-serif text-lg font-bold text-cream">{roadmap.title}</h4>
                  <p className="text-xs leading-relaxed text-cream/50">{roadmap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 px-6 bg-petal text-earth text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div {...fadeIn} className="space-y-3 flex flex-col items-center">
              <FaCompass className="text-moss text-4xl mb-4" />
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight max-w-lg">
                Be a part of the<br />coexistence system
              </h2>
            </motion.div>

            <motion.p {...fadeIn} className="text-xs leading-relaxed max-w-md mx-auto text-earth/80">
              Your support builds Rourkela's first self-sustaining Central Hub model for stray animal care.
            </motion.p>

            <motion.div {...fadeIn} className="pt-4">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-earth text-cream hover:bg-moss hover:scale-105 active:scale-95 font-bold rounded-xl shadow-md transition-all duration-200"
              >
                Donate to the Vision <FaChevronRight className="text-[10px]" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
