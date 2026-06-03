import { motion } from 'framer-motion';
import { 
  FaAmbulance, 
  FaHeartbeat, 
  FaStethoscope, 
  FaBone, 
  FaBullhorn, 
  FaUsers,
  FaHandHoldingHeart
} from 'react-icons/fa';

export default function AboutSection() {
  const coreValues = [
    "Coexistence",
    "Compassion",
    "Togetherness",
    "Humanity",
    "Animal Welfare"
  ];

  const activities = [
    {
      title: "Animal Rescue",
      description: "Quick-response team dedicated to rescuing distressed, injured, or trapped animals from dangerous situations.",
      icon: FaAmbulance,
      color: "bg-[#5B3A29]/10 text-[#5B3A29]"
    },
    {
      title: "Emergency Care",
      description: "First-aid and immediate life-support services for critical on-street animal emergencies.",
      icon: FaHeartbeat,
      color: "bg-[#8B5E3C]/10 text-[#8B5E3C]"
    },
    {
      title: "Medical Support",
      description: "Partnering with expert veterinarians for surgeries, vaccinations, and long-term treatments.",
      icon: FaStethoscope,
      color: "bg-[#C89A63]/10 text-[#C89A63]"
    },
    {
      title: "Food Drives",
      description: "Daily feeding routes providing nutritious meals to hundreds of stray dogs, cats, and cows in the locality.",
      icon: FaBone,
      color: "bg-[#708B7D]/10 text-[#708B7D]"
    },
    {
      title: "Awareness Campaigns",
      description: "Educating neighborhoods about animal safety, legal rights, and encouraging gentle human-animal coexistence.",
      icon: FaBullhorn,
      color: "bg-[#5B3A29]/10 text-[#5B3A29]"
    },
    {
      title: "Community Building",
      description: "Fostering a network of active volunteers, foster homes, and community feeders to build a safer haven.",
      icon: FaUsers,
      color: "bg-[#8B5E3C]/10 text-[#8B5E3C]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-beige/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-muted-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid: Header & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted-teal/10 text-muted-teal rounded-full text-sm font-semibold">
              <FaHandHoldingHeart />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
              Who We Are
            </h2>
            <p className="text-lg text-primary-brown/85 font-sans leading-relaxed">
              <strong>Mohalle Mastane</strong> is a grassroots, community-driven animal welfare movement. Born out of the simple idea that our neighborhood streets belong as much to animals as they do to humans, we work relentlessly to feed, rescue, heal, and defend our local street friends.
            </p>
            <p className="text-primary-brown/75 font-sans leading-relaxed">
              We operate feeding drives, organize medical camps, coordinate rescue runs, and build communities of active animal guardians. Together, we hope to put an end to animal starvation, abuse, and neglect.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-primary-brown to-light-brown text-cream p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent-gold/15 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-accent-gold">Our Philosophy</h3>
            <div className="space-y-4">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-cream/10 pb-3 last:border-0 last:pb-0">
                  <div className="w-6 h-6 rounded-full bg-accent-gold/25 flex items-center justify-center text-accent-gold text-sm font-bold">
                    {idx + 1}
                  </div>
                  <span className="font-sans font-medium text-lg text-cream/90">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Activity Cards Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary-brown">What We Do</h3>
            <p className="text-sm md:text-base text-primary-brown/70">Our daily initiatives focused on making a real difference on the ground.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {activities.map((act, index) => {
              const IconComp = act.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(91, 58, 41, 0.1), 0 10px 10px -5px rgba(91, 58, 41, 0.04)"
                  }}
                  className="bg-cream/50 backdrop-blur-sm rounded-3xl p-6 border border-beige/40 flex flex-col items-start gap-4 transition-all duration-300 group"
                >
                  <div className={`p-4 rounded-2xl ${act.color} transition-transform duration-300 group-hover:scale-110`}>
                    <IconComp className="text-2xl md:text-3xl" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary-brown group-hover:text-accent-gold transition-colors duration-200">
                    {act.title}
                  </h4>
                  <p className="text-primary-brown/80 font-sans text-sm md:text-base leading-relaxed">
                    {act.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
