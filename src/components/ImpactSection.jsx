import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHeart, FaPaw, FaHandsHelping, FaCalendarCheck, FaUtensils } from 'react-icons/fa';

function CountUp({ endValue, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(endValue, 10);
    if (start === end) return;

    const totalFrames = 60;
    const frameDuration = (duration * 1000) / totalFrames;
    const increment = end / totalFrames;
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      start = Math.floor(increment * frame);
      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isInView, endValue, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function ImpactSection() {
  const stats = [
    {
      value: "500",
      suffix: "+",
      label: "Animals Rescued",
      desc: "Injured, distressed, and stray animals safely rescued and treated.",
      icon: FaPaw,
      color: "bg-primary-brown/10 text-primary-brown"
    },
    {
      value: "200",
      suffix: "+",
      label: "Active Volunteers",
      desc: "Compassionate residents feeding, fostering, and assisting.",
      icon: FaHandsHelping,
      color: "bg-light-brown/10 text-light-brown"
    },
    {
      value: "100",
      suffix: "+",
      label: "Community Events",
      desc: "Vaccination camps, adoption events, and rescue workshops.",
      icon: FaCalendarCheck,
      color: "bg-accent-gold/10 text-accent-gold"
    },
    {
      value: "1000",
      suffix: "+",
      label: "Meals Provided",
      desc: "Fresh, healthy meals served weekly to street dogs and cows.",
      icon: FaUtensils,
      color: "bg-muted-teal/10 text-muted-teal"
    }
  ];

  return (
    <section className="py-20 bg-beige/25 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-brown/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-brown/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-brown/10 text-primary-brown rounded-full text-sm font-semibold">
            <FaHeart className="text-red-500 animate-pulse" />
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown">
            Making a Real Difference
          </h2>
          <p className="text-primary-brown/80 font-sans text-base md:text-lg">
            Thanks to our dedicated team of volunteers and community donors, we have been able to secure shelter, feed, and medical care for hundreds of local street animals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-cream rounded-3xl p-8 border border-beige/40 shadow-md text-center flex flex-col items-center justify-between h-[280px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-2xl shadow-sm mb-4`}>
                  <IconComp />
                </div>
                
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary-brown tracking-tight">
                    <CountUp endValue={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-lg font-serif font-bold text-accent-gold">
                    {stat.label}
                  </div>
                </div>

                <p className="text-sm text-primary-brown/70 font-sans mt-3">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
