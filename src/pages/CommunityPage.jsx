import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoImg from '../assets/Logo.png';

export default function CommunityPage() {
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
    <div className="flex flex-col min-h-screen bg-light-bg">
      <Navbar />

      <main className="flex-grow">

        {/* SLIDE 1: COVER */}
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 pt-36 pb-20 bg-earth text-cream text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(74,92,58,0.4)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(196,162,101,0.2)_0%,transparent_50%)] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center"
          >
            <img
              src={LogoImg}
              alt="Mohalle Mastane Logo"
              className="w-36 h-36 object-contain mb-4 animate-float"
            />
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-none text-cream">
              Mohalle<br />Mastane
              <span className="block text-warm italic font-normal text-2xl sm:text-4xl tracking-widest mt-4">
                Coexistence · Compassion · Togetherness
              </span>
            </h1>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-warm to-transparent my-8"></div>
            <p className="font-serif italic text-lg sm:text-xl tracking-widest uppercase text-warm/95">
              How We Work Together
            </p>
            <p className="text-xs tracking-widest text-cream/40 uppercase">
              Founded 2025 &nbsp;·&nbsp; Rourkela, Odisha
            </p>
          </motion.div>
        </section>

        {/* SLIDE 2: STATS */}
        <section className="py-24 bg-warm text-earth px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div {...fadeIn} className="space-y-4">
              <div className="text-xs font-bold tracking-widest uppercase text-earth/60">
                In the last 8 months
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
                Small beginnings.<br /><span className="italic opacity-80 font-normal">Real impact.</span>
              </h2>
            </motion.div>

            {/* Grid 1: Main Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-earth/10 p-0.5 rounded-3xl overflow-hidden"
            >
              {[
                { num: "200+", desc: "Animals helped\nin 8 months" },
                { num: "150", desc: "Community\nmembers" },
                { num: "10", desc: "Active\nvolunteers" },
                { num: "10", desc: "Foster &\nadoptive parents" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-earth text-cream p-8 text-center flex flex-col justify-center items-center min-h-[160px]">
                  <span className="font-serif text-4xl sm:text-5xl font-semibold text-warm mb-2">{stat.num}</span>
                  <span className="text-xs tracking-wider opacity-85 leading-relaxed whitespace-pre-line">{stat.desc}</span>
                </div>
              ))}
            </motion.div>

            {/* Grid 2: Sub Stats */}
            <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 bg-earth/5 p-8 rounded-3xl text-left space-y-2">
                <span className="font-serif text-3xl font-bold text-earth">10%</span>
                <p className="text-xs leading-relaxed text-earth/80">Active rescuers on the ground coordinating daily operations.</p>
              </div>
              <div className="md:col-span-4 bg-earth/5 p-8 rounded-3xl text-left space-y-2">
                <span className="font-serif text-3xl font-bold text-earth">30%</span>
                <p className="text-xs leading-relaxed text-earth/80">Support through funding, digital outreach & temporary help.</p>
              </div>
              <div className="md:col-span-4 bg-earth/5 p-8 rounded-3xl text-left space-y-2">
                <span className="font-serif text-3xl font-bold text-earth">60%</span>
                <p className="text-xs leading-relaxed text-earth/80">Yet to join the movement — <em className="font-serif italic font-medium">and that is who we are here for.</em></p>
              </div>
            </motion.div>

            {/* Founded Bar */}
            <motion.div {...fadeIn} className="bg-moss text-cream p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-lg">
              <div className="space-y-2 text-left">
                <h4 className="font-serif italic text-lg text-warm">Founded in 2025</h4>
                <p className="text-xs text-cream/70 max-w-xl leading-relaxed">
                  Born from the vision of one person to build a social infrastructure — for animals and for the people of this community.
                </p>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-warm shrink-0 border-b border-warm pb-1">
                Now it belongs to all of us →
              </span>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 3: WHO WE ARE */}
        <section className="py-24 bg-cream text-earth px-6">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-sage">
                <span>Who We Are</span>
                <span className="w-16 h-[1px] bg-sage/30"></span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
                Not any organisation sitting in one place.<br />
                <span className="font-serif italic opacity-85 font-normal text-moss">A community-driven workforce.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "👁️", title: "Every message matters", text: "Every photo you share of an injured animal — we see it, we log it, we act on it." },
                { icon: "📌", title: "Every case is tracked", text: "Logged from the first message to the final update — nothing falls through." },
                { icon: "🤝", title: "Neighbours leading neighbours", text: "Experienced rescuers from your own mohalla guide every step of the process." },
                { icon: "🔄", title: "A circle, not a service", text: "It closes only when the animal is safe — and the community receives confirmation." }
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ backgroundColor: "var(--color-rust)", color: "var(--color-cream)" }}
                  className="bg-earth text-cream p-8 rounded-3xl flex items-start gap-5 transition-all duration-300 group"
                >
                  <span className="text-3xl shrink-0">{point.icon}</span>
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-warm group-hover:text-cream transition-colors duration-200">{point.title}</h4>
                    <p className="text-xs leading-relaxed opacity-75">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn} className="bg-warm text-earth text-center font-serif italic text-lg p-6 rounded-2xl shadow-sm">
              "By the community. For the community. To the community."
            </motion.div>
          </div>
        </section>

        {/* SLIDE 4: COMMUNITY BREAKDOWN */}
        <section className="py-24 bg-earth text-cream px-6">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">150 Members Strong</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">Growing, <span className="text-warm italic font-normal">together</span></h2>
              <p className="text-xs text-cream/60 max-w-xl leading-relaxed">
                Every person in this group matters — whether you rescue actively, contribute occasionally, or are still finding your way in. The movement is built for all of you.
              </p>
            </motion.div>

            {/* Growth Bars */}
            <motion.div {...fadeIn} className="space-y-6 bg-cream/5 p-8 rounded-3xl border border-cream/10">
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider text-cream/75">
                  <span>Active rescuers</span>
                  <span className="text-warm font-serif font-bold">10%</span>
                </div>
                <div className="h-2 bg-cream/10 rounded-full overflow-hidden">
                  <div className="h-full bg-warm rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider text-cream/75">
                  <span>Support network</span>
                  <span className="text-sage font-serif font-bold">30%</span>
                </div>
                <div className="h-2 bg-cream/10 rounded-full overflow-hidden">
                  <div className="h-full bg-sage rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-wider text-cream/75">
                  <span>Yet to join</span>
                  <span className="text-cream/35 font-serif font-bold">60%</span>
                </div>
                <div className="h-2 bg-cream/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cream/20 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </motion.div>

            {/* Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div {...fadeIn} className="border border-cream/10 p-8 rounded-3xl space-y-4 bg-cream/5">
                <span className="text-xs font-bold tracking-widest text-sage uppercase">Phase One — Now</span>
                <h4 className="font-serif text-3xl font-bold">10% → <span className="text-warm">50%</span></h4>
                <p className="text-xs leading-relaxed text-cream/50">Grow active rescuers from 10% to 50% of the community. Include more neighbours in on-ground rescue coordination.</p>
              </motion.div>

              <motion.div {...fadeIn} className="border border-cream/10 p-8 rounded-3xl space-y-4 bg-cream/5">
                <span className="text-xs font-bold tracking-widest text-sage uppercase">Phase Two — Next</span>
                <h4 className="font-serif text-3xl font-bold">50% → <span className="text-warm">80%</span></h4>
                <p className="text-xs leading-relaxed text-cream/50">Expand to a point where 80% of members are actively contributing — through rescue, fostering, funding, or awareness.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SLIDE 5: HOW IT WORKS */}
        <section className="py-24 bg-light-bg text-earth px-6">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-sage">The Process</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">How this community <span className="italic font-normal text-moss">functions</span></h2>
            </motion.div>

            {/* Steps list */}
            <div className="space-y-0.5 bg-earth/10 rounded-3xl overflow-hidden p-0.5">
              {[
                { step: "01", title: "You Spot It → You Post It", text: "When you see an animal in distress — injured, sick, starving — post it here with a photo and location. That single message is enough to set things in motion." },
                { step: "02", title: "Connect With an Experienced Rescuer Near You", text: "We have neighbours in this very community who have been rescuing for years. Your first move is always to coordinate with them — reach out, stay close, let them guide you through.", badge: "Primary Step" },
                { step: "03", title: "If Unavailable — We Move Together", text: "If an experienced rescuer isn't reachable, our consistent team steps in. But that is the backup — not the default. The goal is always the person closest to the animal and the street." },
                { step: "04", title: "Treatment via Government Veterinary Hospital", text: "All medical cases are coordinated through the Government Veterinary Hospital, and our team follows up at every stage to ensure the animal receives proper care." },
                { step: "05", title: "Every Case Is Logged. Updates Come Back to You.", text: "Nothing is forgotten. The community hears what happened. This group is a circle — and it closes only when the animal is safe." }
              ].map((item, idx) => (
                <div key={idx} className="bg-light-bg hover:bg-cream p-8 flex flex-col md:flex-row items-start gap-6 transition-all duration-300">
                  <span className="font-serif text-5xl font-light text-earth/20 shrink-0 leading-none">{item.step}</span>
                  <div className="space-y-3">
                    <h4 className="font-serif text-xl font-bold text-earth">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-earth/70 max-w-2xl">{item.text}</p>
                    {item.badge && (
                      <span className="inline-block bg-warm text-earth text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Vet Note Card */}
            <motion.div {...fadeIn} className="bg-moss/10 border-l-4 border-sage p-8 rounded-r-3xl text-left space-y-3">
              <h4 className="font-serif font-bold text-moss">On Veterinary Care:</h4>
              <p className="text-xs leading-relaxed text-earth/80">
                Rourkela, like many small towns, currently lacks advanced animal medical infrastructure. We work with the <strong className="text-moss">Government Veterinary Hospital</strong> today and are deeply grateful for the support it provides. We know that building proper, dedicated animal medical facilities is one of the most urgent needs for this city — and we are actively looking for individuals, organisations, or institutions who share this vision and would like to support or collaborate with us in making it a reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 6: CASE CARDS */}
        <section className="py-24 bg-petal text-earth px-6">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="text-xs font-bold tracking-widest uppercase text-moss">Real Stories</div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">What every case looks like</h2>
              <p className="text-xs text-moss max-w-md leading-relaxed">
                Every rescue in this group is documented — so every animal is accounted for, and every person who helped is remembered.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <motion.div {...fadeIn} className="bg-light-bg rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="h-56 bg-earth/10 flex items-center justify-center text-4xl text-earth/25 font-bold">
                  🐾 Case Media
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-petal pb-4">
                      <span className="text-[10px] font-bold tracking-widest text-sage uppercase flex items-center gap-2">
                        🐾 Case Card
                      </span>
                      <span className="font-serif text-sm font-bold text-warm">CR-001</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="grid grid-cols-3"><span className="text-earth/40 uppercase font-semibold">Name</span><span className="col-span-2 text-earth font-medium">Chiku</span></div>
                      <div className="grid grid-cols-3"><span className="text-earth/40 uppercase font-semibold">Location</span><span className="col-span-2 text-earth font-medium">Rourkela</span></div>
                      <div className="grid grid-cols-3"><span className="text-earth/40 uppercase font-semibold">Condition</span><span className="col-span-2 text-earth font-medium">Paralysed — could not walk</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-moss/10 text-moss text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded self-start">
                    <span className="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
                    Recovered &amp; Released
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div {...fadeIn} className="bg-light-bg rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="h-56 bg-earth/10 flex items-center justify-center text-4xl text-earth/25 font-bold">
                  🐾 Case Media
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-petal pb-4">
                      <span className="text-[10px] font-bold tracking-widest text-sage uppercase flex items-center gap-2">
                        🐾 Case Card
                      </span>
                      <span className="font-serif text-sm font-bold text-warm">CR-002</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="grid grid-cols-3"><span className="text-earth/40 uppercase font-semibold">Name</span><span className="col-span-2 text-earth font-medium">Kalu</span></div>
                      <div className="grid grid-cols-3"><span className="text-earth/40 uppercase font-semibold">Location</span><span className="col-span-2 text-earth font-medium">Sector-5, Rourkela</span></div>
                      <div className="grid grid-cols-3"><span className="text-earth/40 uppercase font-semibold">Condition</span><span className="col-span-2 text-earth font-medium">Deep infected leg wound</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-moss/10 text-moss text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded self-start">
                    <span className="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
                    Under Treatment
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SLIDE 7: WHY WE SHARE */}
        <section className="py-24 bg-moss text-cream px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.p {...fadeIn} className="font-serif text-2xl sm:text-4xl font-light italic leading-relaxed text-cream/90">
              "We share details not to brag, but to show that help is possible. When people see a street animal recover, they begin to believe they can save one too."
            </motion.p>
            <motion.div {...fadeIn} className="h-[1px] w-20 bg-warm/50 mx-auto"></motion.div>
            <motion.p {...fadeIn} className="text-xs font-bold tracking-widest uppercase text-warm">
              The Philosophy of Shared Compassion
            </motion.p>
          </div>
        </section>

        {/* SLIDE 8: YOUTH */}
        <section className="py-24 bg-cream text-earth px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
                Nurturing the<br /><span>next generation</span>
              </h2>
              <p className="text-xs leading-relaxed text-earth/70">
                True coexistence begins with the children. We encourage the youth of Rourkela to engage with street animals, take responsibility, feed them with care, and develop empathy that will last a lifetime.
              </p>
              <div className="border-l-4 border-warm pl-6 text-xs font-serif italic text-moss font-semibold leading-relaxed">
                "A child who learns to respect a stray dog grows up into a human who respects all forms of life."
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="bg-earth rounded-3xl min-h-[380px] p-8 flex flex-col justify-end text-left relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(74,92,58,0.35)_0%,transparent_70%)] pointer-events-none" />
              <div className="z-10 space-y-2">
                <span className="font-serif italic text-3xl text-cream leading-tight block">"I feed my mohalla's puppies every evening."</span>
                <span className="text-[10px] font-bold tracking-widest text-warm uppercase block">Rohan, Age 11, Rourkela</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 9: JOIN */}
        <section className="py-24 bg-earth text-cream px-6">
          <div className="max-w-5xl mx-auto space-y-12 text-left">
            <motion.div {...fadeIn} className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">
                How you can <span>join in</span>
              </h2>
              <p className="text-xs text-cream/50 max-w-md">
                There are many ways to support this movement. Pick the scenario that fits your schedule, capability, and interest.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { if: "If you want to", scenario: "Rescue stray animals", action: "Join our active responder alerts group. We will guide you on how to handle, report, and treat cases near you." },
                { if: "If you want to", scenario: "Coordinate rescues", action: "Support remotely by making phone calls, tracking cases, logging info, or updating community sheets." },
                { if: "If you want to", scenario: "Nourish street animals", action: "Feed stray dogs or cats in your street daily. We can support you with dry kibble or cooked food advice." },
                { if: "If you want to", scenario: "Support financially", action: "Donate to cover emergency operations, medicines, or buy food. Transparency reports are shared weekly." }
              ].map((item, idx) => (
                <div key={idx} className="bg-cream/5 border border-cream/10 p-6 rounded-2xl space-y-4 hover:bg-warm hover:text-earth transition-all duration-300 group">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-sage group-hover:text-earth/60 transition-colors duration-200">{item.if}</span>
                  <h4 className="font-serif font-bold text-base text-cream group-hover:text-earth transition-colors duration-200">{item.scenario}</h4>
                  <p className="text-xs leading-relaxed opacity-70">{item.action}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div {...fadeIn} className="pt-8 border-t border-cream/10 flex flex-col items-start gap-4">
              <p className="font-serif italic text-lg opacity-80">
                Ready to coordinate rescues and feed animals with your neighbours?
              </p>
              <a
                href="https://chat.whatsapp.com/sampleLink"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white hover:bg-[#1ebe5d] font-sans font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl shadow-lg transition-all duration-200"
              >
                <FaWhatsapp className="text-lg" />
                Join Rourkela Community WhatsApp
              </a>
              <span className="text-[9px] tracking-widest uppercase text-cream/30">
                Join the main updates group &amp; neighborhood chapters
              </span>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
