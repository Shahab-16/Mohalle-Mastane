import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle, FaRegTimesCircle, FaInstagram, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FundraisingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <div className="flex flex-col min-h-screen bg-earth text-cream font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">

        {/* ── SLIDE 1: COVER ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-earth overflow-hidden">
          {/* Radial glow backgrounds */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(196,162,101,0.12)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_80%,rgba(74,92,58,0.18)_0%,transparent_60%)]" />
          </div>

          {/* Floating paw watermarks */}
          <div className="absolute top-[12%] left-[6%] text-[120px] opacity-[0.03] animate-float pointer-events-none select-none">🐾</div>
          <div className="absolute bottom-[15%] right-[8%] text-[100px] opacity-[0.03] animate-float-delayed pointer-events-none select-none">🐾</div>
          <div className="absolute top-[60%] left-[80%] text-[60px] opacity-[0.04] pointer-events-none select-none">🌿</div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center space-y-6 max-w-3xl"
          >
            <span className="font-sans text-[11px] font-bold tracking-[0.35em] text-warm/60 uppercase">
              Fundraising Campaign · Rourkela
            </span>
            <h1 className="font-serif font-light text-6xl sm:text-8xl leading-[0.95] text-cream tracking-tight">
              Every <em className="italic text-warm not-italic">Mohalla</em>
              <br />Has a Story
            </h1>
            <p className="font-sans text-sm font-light tracking-[0.06em] text-cream/50 max-w-sm">
              Building a world where compassion has an address
            </p>
            <div className="inline-flex items-center gap-4 px-7 py-3 border border-warm/30 text-[11px] font-bold tracking-[0.2em] uppercase text-warm/70">
              <span className="w-5 h-[1px] bg-warm/40 inline-block" />
              Mohalle Mastane · Nexus of Coexistence
              <span className="w-5 h-[1px] bg-warm/40 inline-block" />
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-8 flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-8 bg-cream/20 animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-cream/20">Scroll</span>
          </motion.div>
        </section>

        {/* ── SLIDE 2: THE PROBLEM ── */}
        <section className="py-24 px-6 bg-cream text-earth relative overflow-hidden">
          {/* Geometric accent */}
          <div
            className="absolute top-0 right-0 w-[40%] h-full bg-beige/60 pointer-events-none hidden md:block"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left text */}
            <motion.div {...fadeLeft} className="space-y-6 text-left">
              <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-warm/80">
                01 · The Reality on Our Streets
              </span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl leading-tight text-earth">
                Rourkela's<br />
                <em className="italic font-normal text-rust">Silent Crisis</em>
              </h2>
              <p className="font-sans text-sm leading-relaxed text-earth/70 max-w-md">
                In Rourkela today, a single government vet facility serves nearly <strong>100 cases per day</strong> from a single hall — with no isolation wards, no diagnostic systems, no species-specific care. As development expands, animals are displaced, injured, and left without shelter or treatment. Local rescuers are sheltering 20–30 animals in their own homes. This cannot continue.
              </p>

              {/* Visual illustration: overwhelmed city */}
              <motion.div
                {...fadeIn}
                className="grid grid-cols-3 gap-4 pt-4 border-t border-earth/10"
              >
                {[
                  { emoji: '🏥', label: '1 Govt Vet', sub: 'for the whole city' },
                  { emoji: '🐕', label: '100+ Cases', sub: 'per day, one hall' },
                  { emoji: '🏠', label: '20–30 Animals', sub: 'per rescuer\'s home' },
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-1">
                    <span className="text-3xl block">{item.emoji}</span>
                    <p className="font-serif text-sm font-semibold text-earth">{item.label}</p>
                    <p className="font-sans text-[10px] text-earth/50 tracking-wide">{item.sub}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: stat cards */}
            <motion.div {...fadeRight} className="space-y-5">
              {[
                { count: '1,220', label: 'Registered cruelty complaints in Odisha (2023–24)' },
                { count: '42.9%', label: 'Cruelty rate among reported cases' },
                { count: '21.4%', label: 'Survival rate for injured stray animals' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-white border-l-4 border-rust p-7 flex items-center gap-6 shadow-sm"
                >
                  <span className="font-serif text-5xl font-light text-rust leading-none shrink-0">{stat.count}</span>
                  <p className="font-sans text-xs tracking-wide leading-relaxed text-earth/55">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SLIDE 3: WHY SOLUTIONS FAIL ── */}
        <section className="py-24 px-6 bg-[#2E2B24] text-cream">
          <div className="max-w-5xl mx-auto space-y-16">
            <motion.div {...fadeIn} className="space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-[0.5em] uppercase text-cream/25">02 · The Gap</span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl leading-tight text-cream">
                Why existing solutions<br />
                are <em className="italic text-warm font-normal">not enough</em>
              </h2>
            </motion.div>

            {/* 3 fail cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
              {[
                {
                  emoji: '🏚️',
                  title: 'No Infrastructure',
                  body: 'No isolation wards. No operation theatres. No ICU. No species-specific enclosures. The current facility is overwhelmed and under-equipped.',
                },
                {
                  emoji: '🏘️',
                  title: 'Rescuers Alone',
                  body: 'Individual rescuers bear the entire burden. 20–30 animals in one home. No medical support, no funding, no system behind them.',
                },
                {
                  emoji: '📍',
                  title: 'Inaccessible Facilities',
                  body: 'Shelters on city outskirts can\'t serve emergencies. Rescue response time, volunteer coordination, and citizen help all depend on proximity.',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-cream/[0.04] border-t border-cream/10 p-10 hover:bg-warm/[0.08] transition-colors duration-300 text-left space-y-4"
                >
                  <span className="text-3xl block">{card.emoji}</span>
                  <h4 className="font-sans text-sm font-semibold text-warm tracking-[0.05em]">{card.title}</h4>
                  <p className="font-sans text-sm leading-relaxed text-cream/45">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SLIDE 4: DHARMA QUOTE ── */}
        <section className="py-28 px-6 bg-moss text-cream flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(44,58,36,0)_0%,rgba(28,26,22,0.6)_100%)] pointer-events-none" />
          <div className="absolute text-[280px] opacity-[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">🌿</div>

          <motion.div {...fadeIn} className="relative z-10 text-center max-w-3xl space-y-8">
            <p className="font-serif font-light text-3xl sm:text-5xl leading-[1.35] text-cream">
              "The land is not merely valued for profit,<br />
              nor are animals mere servants to man.<br />
              <em className="italic text-[#B8D9BB]">Where action is rooted in dharma,<br />
              divinity begins to awaken."</em>
            </p>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-cream/35 block">
              — Mohalle Mastane · Nexus of Coexistence
            </span>
          </motion.div>
        </section>

        {/* ── SLIDE 5: THE CONCEPT ── */}
        <section className="py-24 px-6 bg-cream text-earth relative overflow-hidden">
          {/* Bottom gradient bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-warm via-moss to-accent-gold pointer-events-none" />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left text */}
            <motion.div {...fadeLeft} className="space-y-6 text-left">
              <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-warm/80">
                03 · The Concept
              </span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl leading-tight text-earth">
                Not a shelter.<br />
                A <strong className="font-semibold text-rust">living ecosystem</strong>.
              </h2>
              <p className="font-sans text-sm leading-relaxed text-earth/65 max-w-md">
                Mohalle Mastane is a dual-layered movement: a decentralised network of community care units across every neighbourhood, anchored by a central hub that blends veterinary care, public spaces, art, education, and healing — all in coexistence. It is a new typology. A temple of Karuna.
              </p>

              {/* Illustrated dual layer diagram */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-4 p-4 bg-beige/60 rounded-lg border border-earth/8">
                  <div className="w-10 h-10 rounded-full bg-earth flex items-center justify-center text-cream text-lg shrink-0">🏘️</div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-earth">Mohalla Circles</p>
                    <p className="font-sans text-[11px] text-earth/55">Hyperlocal, neighbourhood-level care networks</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-beige/60 rounded-lg border border-earth/8">
                  <div className="w-10 h-10 rounded-full bg-moss flex items-center justify-center text-cream text-lg shrink-0">🏥</div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-earth">Central Hub</p>
                    <p className="font-sans text-[11px] text-earth/55">City-scale medical + public community space</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-beige/60 rounded-lg border border-earth/8">
                  <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center text-earth text-lg shrink-0">♻️</div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-earth">Self-Sustaining Model</p>
                    <p className="font-sans text-[11px] text-earth/55">Community-funded, no external dependency</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: concept tags as dark blocks */}
            <motion.div {...fadeRight} className="flex flex-col gap-4">
              {[
                { dot: 'bg-warm', label: 'Mohalla Circles — Hyperlocal Community Units' },
                { dot: 'bg-moss', label: 'Central Hub — Advanced Medical + Public Space' },
                { dot: 'bg-accent-gold', label: 'Self-Sustaining Financial Model' },
              ].map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-5 p-6 bg-earth text-cream text-sm tracking-[0.06em]"
                >
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${tag.dot}`} />
                  {tag.label}
                </motion.div>
              ))}

              {/* Abstract visual: concentric circles */}
              <div className="mt-6 flex justify-center">
                <div className="relative w-48 h-48">
                  {[48, 80, 112, 144].map((size, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-earth/15"
                      style={{ width: size, height: size }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm/30 flex items-center justify-center text-xl">
                    🐾
                  </div>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-sans text-[9px] tracking-widest uppercase text-earth/40">ecosystem</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SLIDE 6: HOW IT WORKS (THE SYSTEM) ── */}
        <section className="py-24 px-6 bg-earth text-cream">
          <div className="max-w-4xl mx-auto space-y-16">
            <motion.div {...fadeIn} className="space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-[0.5em] uppercase text-cream/25">04 · The System</span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl text-cream">How it Works</h2>
            </motion.div>

            {/* Steps with connecting line */}
            <div className="relative">
              <div className="absolute left-7 top-0 bottom-0 w-[1px] bg-cream/10 hidden md:block" />
              <div className="space-y-0">
                {[
                  {
                    num: '01',
                    icon: '🏘️',
                    title: 'Mohalla Circles — Community First Response',
                    body: 'Trained local volunteers in every neighbourhood provide first-response care, feeding, monitoring, and quick emergency access. No overcrowding. Community-owned responsibility.',
                  },
                  {
                    num: '02',
                    icon: '🏥',
                    title: 'Central Hub — Advanced Treatment & Community Space',
                    body: 'City-scale facility with OPD, OT, ICU, isolation wards, species-specific rehabilitation, and a vibrant public zone — café, exhibition, eco-market, workshops — all under one roof.',
                  },
                  {
                    num: '03',
                    icon: '♻️',
                    title: 'Sustainable Revenue — Community Funds Compassion',
                    body: 'Vegan café, art exhibitions, eco-market brands, certified wellness programs, and donations generate a self-sustaining financial ecosystem — no dependency, no compromise.',
                  },
                  {
                    num: '04',
                    icon: '⚖️',
                    title: 'Legal & Civic Integration',
                    body: 'Aligned with PCA Act 1960, ABC Rules 2023, AWBI Guidelines, and Article 51A(g) of the Constitution. A registered charitable trust. Accountable to the city, by the city.',
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 py-9 border-b border-cream/[0.07] items-start"
                  >
                    <div className="flex md:flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-cream/[0.05] border border-cream/10 flex items-center justify-center text-2xl z-10 relative shrink-0">
                        {step.icon}
                      </div>
                      <span className="font-serif text-4xl font-light text-warm/30">{step.num}</span>
                    </div>
                    <div className="space-y-2 pt-1">
                      <h4 className="font-sans text-sm font-semibold text-warm tracking-[0.05em]">{step.title}</h4>
                      <p className="font-sans text-sm leading-relaxed text-cream/45">{step.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SLIDE 7: WHAT LIVES INSIDE ── */}
        <section className="py-24 px-6 bg-[#232018] text-cream">
          <div className="max-w-5xl mx-auto space-y-14">
            <motion.div {...fadeIn}>
              <h2 className="font-serif font-light text-5xl sm:text-6xl text-cream">What Lives Inside</h2>
            </motion.div>

            {/* 6-card grid with private/public tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  emoji: '🏥',
                  title: 'Veterinary Hospital',
                  body: 'OPD, OT, ICU, X-ray lab, isolation wards for rabies & distemper, post-operative recovery, species-specific enclosures.',
                  tag: 'Private',
                  tagColor: 'bg-warm/15 text-warm',
                },
                {
                  emoji: '🚑',
                  title: 'Rescue & Emergency',
                  body: '24/7 mobile rescue units, emergency response, sterilization drives, coordination with municipal bodies.',
                  tag: 'Private',
                  tagColor: 'bg-warm/15 text-warm',
                },
                {
                  emoji: '🛏️',
                  title: 'Rescuer Accommodation',
                  body: 'Safe, dignified housing for local rescuers, veterinarians, and care staff — integrated into the space.',
                  tag: 'Private',
                  tagColor: 'bg-warm/15 text-warm',
                },
                {
                  emoji: '☕',
                  title: 'Vegan Café',
                  body: 'Conscious food, warm community interaction, contribution to rescue efforts — an inviting space where every meal matters.',
                  tag: 'Public',
                  tagColor: 'bg-sage/20 text-sage',
                },
                {
                  emoji: '🎨',
                  title: 'Art & Exhibition Studio',
                  body: 'Animal narratives, coexistence art, local installations. A space where empathy is the medium and awareness is the message.',
                  tag: 'Public',
                  tagColor: 'bg-sage/20 text-sage',
                },
                {
                  emoji: '🌿',
                  title: 'Eco-Market + Workshops',
                  body: 'Sustainable, animal-friendly brands; healing programs; community workshops and satsang-style gatherings for shared purpose.',
                  tag: 'Public',
                  tagColor: 'bg-sage/20 text-sage',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-cream/[0.04] border border-cream/[0.06] p-8 hover:bg-warm/[0.07] hover:border-warm/20 hover:-translate-y-1 transition-all duration-300 space-y-3 text-left"
                >
                  <span className="text-2xl block">{card.emoji}</span>
                  <h4 className="font-sans text-sm font-semibold text-cream tracking-[0.04em]">{card.title}</h4>
                  <p className="font-sans text-xs leading-relaxed text-cream/38">{card.body}</p>
                  <span className={`inline-block text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm mt-2 ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SLIDE 8: HUMAN IMPACT ── */}
        <section className="py-24 px-6 bg-warm text-earth relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_30%_50%,rgba(28,26,22,0.25)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
            <motion.div {...fadeIn} className="space-y-4">
              <span className="font-sans text-[10px] font-bold tracking-[0.5em] uppercase text-earth/50">05 · Human Impact</span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl leading-tight text-earth">
                Care is not a job.<br />It is a way of life.
              </h2>
            </motion.div>

            <motion.blockquote
              {...fadeIn}
              className="font-serif italic text-xl sm:text-2xl leading-relaxed text-earth/85 border-l-2 border-earth/30 pl-7 text-left max-w-xl mx-auto"
            >
              "No one is born a rescuer. It comes from a place of deep empathy — a natural calling that reminds us that care is not a job, but a way of life we share with every living being."
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              {...fadeIn}
              className="flex flex-wrap items-center justify-center gap-12 pt-4"
            >
              {[
                { num: '30+', label: 'Animals per rescuer home' },
                { num: '100+', label: 'Daily cases, one facility' },
                { num: '0', label: 'Isolation wards in Rourkela' },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-1">
                  <span className="font-serif text-5xl font-light text-earth block">{stat.num}</span>
                  <p className="font-sans text-[11px] text-earth/55 tracking-[0.1em] uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SLIDE 9: THE OPPORTUNITY / MARKET POTENTIAL ── */}
        <section className="py-24 px-6 bg-cream text-earth">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left text */}
            <motion.div {...fadeLeft} className="space-y-6 text-left">
              <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-warm/80">06 · The Opportunity</span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl leading-tight text-earth">
                A replicable model<br />
                <em className="italic font-normal text-rust">for every city</em>
              </h2>
              <p className="font-sans text-sm leading-relaxed text-earth/65 max-w-md">
                Rourkela is a prototype. With 640+ districts in India lacking proper animal welfare infrastructure, Mohalle Mastane's community-driven, self-sustaining model can be deployed city by city — a franchise of compassion, not profit.
              </p>
            </motion.div>

            {/* Right: animated bar charts */}
            <motion.div {...fadeRight} className="space-y-6">
              {[
                { label: "India's stray animal population", value: '80M+', pct: 95, color: 'bg-accent-gold' },
                { label: 'Cities without proper shelters', value: '88%', pct: 88, color: 'bg-warm' },
                { label: 'Citizens willing to support locally', value: '72%', pct: 72, color: 'bg-moss' },
              ].map((bar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-xs text-earth/60">{bar.label}</span>
                    <span className="font-serif text-xl font-light text-earth">{bar.value}</span>
                  </div>
                  <div className="h-1 bg-earth/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${bar.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SLIDE 10: THE ROADMAP ── */}
        <section className="py-24 px-6 bg-earth text-cream">
          <div className="max-w-4xl mx-auto space-y-16">
            <motion.div {...fadeIn} className="space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-[0.5em] uppercase text-cream/25">07 · The Roadmap</span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl text-cream">
                From one mohalla<br />to a nation
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-7 top-0 bottom-0 w-[1px] bg-cream/10 hidden md:block" />
              <div className="space-y-0">
                {[
                  {
                    icon: '🌱',
                    phase: 'Phase 1 · Now',
                    title: 'Rourkela Campaign — Building the Foundation',
                    body: 'Build awareness, raise initial funds, grow community support, register Mohalle Mastane Trust with ₹90,000 corpus.',
                  },
                  {
                    icon: '🏗️',
                    phase: 'Phase 2 · Near Term',
                    title: 'Central Hub Launch + Mohalla Circles',
                    body: 'Establish city-scale facility (RSP land request). Launch first 5 Mohalla Circles across key neighbourhoods with trained volunteers.',
                  },
                  {
                    icon: '🌐',
                    phase: 'Phase 3 · Long Term',
                    title: 'Replicable National Model',
                    body: 'Roll out the Mohalle Mastane blueprint to small towns across India — a scalable, community-driven coexistence movement.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="flex gap-10 py-8 border-b border-cream/[0.07] items-start"
                  >
                    <div className="w-14 h-14 rounded-full bg-cream/[0.05] border border-cream/10 flex items-center justify-center text-2xl shrink-0 z-10">
                      {item.icon}
                    </div>
                    <div className="pt-3 space-y-2">
                      <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-warm/60 block">{item.phase}</span>
                      <h4 className="font-sans text-base font-semibold text-cream">{item.title}</h4>
                      <p className="font-sans text-sm leading-relaxed text-cream/40">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SLIDE 11: CIVIC CONSCIOUSNESS ── */}
        <section className="py-24 px-6 bg-[#2E2B24] text-cream text-center">
          <div className="max-w-5xl mx-auto space-y-14">
            <motion.div {...fadeIn}>
              <h2 className="font-serif font-light text-5xl sm:text-7xl leading-tight text-cream max-w-3xl mx-auto">
                This isn't animal welfare.<br />
                This is <em className="italic text-accent-gold font-normal">civic consciousness</em>.
              </h2>
            </motion.div>

            {/* 4 pillars */}
            <div className="flex flex-col sm:flex-row gap-[2px]">
              {[
                {
                  icon: '🐾',
                  title: 'Compassion',
                  body: 'Every being that shares this earth with us deserves dignity, care, and a place to heal.',
                },
                {
                  icon: '🏘️',
                  title: 'Community',
                  body: 'Real change begins when neighbourhoods take ownership — not NGOs, not governments, but people.',
                },
                {
                  icon: '🌿',
                  title: 'Coexistence',
                  body: 'A city that cares for its animals is a city that cares for its people. Both are inseparable.',
                },
                {
                  icon: '✨',
                  title: 'Consciousness',
                  body: 'Architecture, space, and design can shift perception. This space is built to change how people feel.',
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex-1 py-10 px-6 bg-cream/[0.04] border-t-2 border-transparent hover:bg-cream/[0.07] hover:border-t-warm transition-all duration-300 space-y-4 cursor-default"
                >
                  <span className="text-4xl block">{pillar.icon}</span>
                  <h4 className="font-sans text-sm font-semibold text-cream tracking-[0.04em]">{pillar.title}</h4>
                  <p className="font-sans text-xs leading-relaxed text-cream/40">{pillar.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SLIDE 12: VOLUNTEER GUIDE (DOS & DON'TS) ── */}
        <section className="py-24 px-6 bg-cream text-earth">
          <div className="max-w-4xl mx-auto space-y-14">
            <motion.div {...fadeIn} className="text-center space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-warm/80">Campaign Day · Volunteer Guide</span>
              <h2 className="font-serif font-light text-5xl sm:text-6xl text-earth leading-tight">
                Representing<br />Mohalle Mastane
              </h2>
              <p className="font-sans text-sm text-earth/55 max-w-md mx-auto leading-relaxed">
                How we show up is how the world sees us. Let us be worthy of the cause.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dos */}
              <motion.div
                {...fadeLeft}
                className="p-9 bg-moss/[0.07] border border-moss/15 rounded-2xl space-y-6"
              >
                <h3 className="flex items-center gap-3 font-sans text-sm font-semibold text-moss tracking-[0.2em] uppercase">
                  <FaRegCheckCircle className="text-lg" />
                  How We Show Up
                </h3>
                <ul className="space-y-3.5">
                  {[
                    'Approach people with warmth, patience, and genuine care',
                    'Share real stories — of animals we\'ve helped, of rescuers who\'ve struggled',
                    'Listen first; let people feel heard before we ask for anything',
                    'Be honest about where every rupee goes',
                    'Invite them in — to volunteer, to share, to care',
                    'Carry the Mohalle Mastane identity with pride and humility',
                    'Encourage people to follow and spread the word',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-xs text-earth/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Don'ts */}
              <motion.div
                {...fadeRight}
                className="p-9 bg-rust/[0.06] border border-rust/15 rounded-2xl space-y-6"
              >
                <h3 className="flex items-center gap-3 font-sans text-sm font-semibold text-rust tracking-[0.2em] uppercase">
                  <FaRegTimesCircle className="text-lg" />
                  What We Avoid
                </h3>
                <ul className="space-y-3.5">
                  {[
                    'Pressuring anyone for a donation',
                    'Making exaggerated claims or promises',
                    'Displaying distressing images without consent or context',
                    'Working without proper authorisation from the team lead',
                    'Behaving in a way that doesn\'t reflect our values of respect and care',
                    'Treating this as routine — it is sacred work',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-xs text-earth/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rust shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SLIDE 13: CLOSING / CALL TO ACTION ── */}
        <section className="py-32 px-6 bg-earth text-cream text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(196,162,101,0.1)_0%,transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(74,92,58,0.1)_0%,transparent_60%)]" />
          </div>

          <motion.div {...fadeIn} className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <span className="font-sans text-[10px] font-bold tracking-[0.5em] uppercase text-cream/25 block">
              08 · A Call to Coexistence
            </span>
            <h2 className="font-serif font-light text-6xl sm:text-8xl leading-[1.0] text-cream">
              Let every<br />
              <em className="italic text-accent-gold">mohalla</em> heal.
            </h2>
            <p className="font-sans text-sm font-light tracking-[0.06em] text-cream/45">
              Build spaces. Build consciousness. Build a kinder Rourkela.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <Link
                to="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-warm text-earth hover:bg-accent-gold font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Support the Campaign <FaArrowRight className="text-[10px]" />
              </Link>
              <a
                href="https://instagram.com/mohallemastane"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 border border-cream/20 hover:bg-cream/5 font-sans text-xs font-bold uppercase tracking-widest text-cream transition-all duration-300"
              >
                <FaInstagram /> @mohallemastane
              </a>
            </div>

            {/* Decorative line + handle */}
            <div className="flex flex-col items-center gap-3 pt-6">
              <div className="w-[1px] h-10 bg-warm/30" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-warm/40">Join the Movement</span>
            </div>

            <p className="font-sans text-xs text-cream/25 tracking-[0.1em]">
              mohalle mastane trust · rourkela, odisha ·{' '}
              <a href="mailto:mohalle.mastane@gmail.com" className="hover:text-cream/50 transition-colors">
                mohalle.mastane@gmail.com
              </a>
            </p>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
