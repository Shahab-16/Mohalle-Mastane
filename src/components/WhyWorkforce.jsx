import { motion } from 'framer-motion';

export default function WhyWorkforce() {
  return (
    <section id="why-workforce" className="py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="relative bg-gradient-to-b from-[#22150D] to-[#140B06] rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl border border-light-brown/15"
        >
          {/* Hanging Fairy Lights (CSS/SVG) */}
          <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none opacity-85 z-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="flex flex-col items-center">
                {/* Light wire */}
                <div className={`w-[1px] bg-yellow-100/30 ${num % 3 === 0 ? 'h-10' : num % 2 === 0 ? 'h-6' : 'h-8'}`} />
                {/* Light Bulb */}
                <div className="w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_12px_#fbbf24] animate-pulse" style={{ animationDelay: `${num * 0.4}s` }} />
              </div>
            ))}
          </div>

          {/* Decorative side lights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 py-6">
            <h2 className="text-3xl sm:text-4.5xl font-serif font-bold text-cream leading-tight">
              Why Do We Need a <br className="hidden sm:inline" />
              Community-Driven Workforce – An Identity?
            </h2>
            
            <p className="text-base sm:text-lg text-[#EBD3BC] font-sans leading-relaxed font-light">
              Because this is about consciousness – about creating a collective, inclusive movement with purpose. Real change doesn't happen through observation alone; it begins with participation, with being part of the process.
            </p>
          </div>

          {/* People Holding Hands SVG Silhouette at the Bottom */}
          <div className="relative z-10 w-full flex justify-center mt-6 pt-4 border-t border-cream/5 pointer-events-none opacity-40">
            <svg 
              viewBox="0 0 800 100" 
              className="w-full max-w-2xl h-12 text-[#EBD3BC] fill-current"
              preserveAspectRatio="none"
            >
              {/* Simple repeated human chain silhouette */}
              <path d="M 50,70 C 50,55 60,55 60,70 L 60,100 L 55,100 L 55,85 L 45,85 L 45,100 L 40,100 L 40,70 Z M 50,45 C 53,45 55,47 55,50 C 55,53 53,55 50,55 C 47,55 45,53 45,50 C 45,47 47,45 50,45 Z 
                       M 150,70 C 150,55 160,55 160,70 L 160,100 L 155,100 L 155,85 L 145,85 L 145,100 L 140,100 L 140,70 Z M 150,45 C 153,45 155,47 155,50 C 155,53 153,55 150,55 C 147,55 145,53 145,50 C 145,47 147,45 150,45 Z
                       M 250,70 C 250,55 260,55 260,70 L 260,100 L 255,100 L 255,85 L 245,85 L 245,100 L 240,100 L 240,70 Z M 250,45 C 253,45 255,47 255,50 C 255,53 253,55 250,55 C 147,55 245,53 245,50 C 245,47 247,45 250,45 Z
                       M 350,70 C 350,55 360,55 360,70 L 360,100 L 355,100 L 355,85 L 345,85 L 345,100 L 340,100 L 340,70 Z M 350,45 C 353,45 355,47 355,50 C 355,53 353,55 350,55 C 347,55 345,53 345,50 C 345,47 347,45 350,45 Z
                       M 450,70 C 450,55 460,55 460,70 L 460,100 L 455,100 L 455,85 L 445,85 L 445,100 L 440,100 L 440,70 Z M 450,45 C 453,45 455,47 455,50 C 455,53 453,55 450,55 C 447,55 445,53 445,50 C 445,47 447,45 450,45 Z
                       M 550,70 C 550,55 560,55 560,70 L 560,100 L 555,100 L 555,85 L 545,85 L 545,100 L 540,100 L 540,70 Z M 550,45 C 553,45 555,47 555,50 C 555,53 553,55 550,55 C 547,55 545,53 545,50 C 545,47 547,45 550,45 Z
                       M 650,70 C 650,55 660,55 660,70 L 660,100 L 655,100 L 655,85 L 645,85 L 645,100 L 640,100 L 640,70 Z M 650,45 C 653,45 655,47 655,50 C 655,53 653,55 650,55 C 647,55 645,53 645,50 C 645,47 647,45 650,45 Z
                       M 750,70 C 750,55 760,55 760,70 L 760,100 L 755,100 L 755,85 L 745,85 L 745,100 L 740,100 L 740,70 Z M 750,45 C 753,45 755,47 755,50 C 755,53 753,55 750,55 C 747,55 745,53 745,50 C 745,47 747,45 750,45 Z
                       M 0,85 L 800,85 L 800,90 L 0,90 Z" />
            </svg>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
