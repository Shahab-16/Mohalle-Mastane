import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaPaw, FaLock, FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DonationPage() {
  const [selectedPreset, setSelectedPreset] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Set default page scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const presets = [100, 500, 1000, 5000];

  const handlePresetSelect = (amount) => {
    setSelectedPreset(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    if (val === '' || /^[0-9\b]+$/.test(val)) {
      setCustomAmount(val);
      setSelectedPreset(null);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment gateway checkout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const getActiveAmount = () => {
    return selectedPreset !== null ? selectedPreset : (customAmount || 0);
  };

  // Describe what the selected amount buys
  const getImpactDescription = () => {
    const amount = Number(getActiveAmount());
    if (amount <= 0) return "Choose an amount to see its impact.";
    if (amount <= 200) return `Feeds 5 street dogs with warm, nutritious meals for 2 days.`;
    if (amount <= 750) return `Vaccinates 2 community dogs against Rabies and Parvovirus.`;
    if (amount <= 1500) return `Provides complete medical first-aid kit and healing ointment for 10 injured birds.`;
    if (amount <= 5000) return `Covers a specialized vet surgeon consultation and diagnostic blood-tests for a severely injured dog or cow.`;
    return `Covers critical orthopedic surgery, ambulance transport, and post-op shelter boarding for 1 rescued animal.`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 text-primary-brown rounded-full text-sm font-semibold border border-accent-gold/20">
              <FaHeart className="text-[#C89A63]" />
              Support Our Mission
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary-brown leading-tight">
              Make A Difference Today
            </h1>
            <p className="text-lg text-primary-brown/85 font-sans">
              Your contribution goes directly towards rescue missions, medicine, surgical procedures, feed, and creating a supportive environment for our street buddies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Trust Info & Transparency details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-beige/35 rounded-3xl p-8 border border-beige/65 space-y-6">
                <h3 className="text-2xl font-serif font-bold text-primary-brown">Why Your Donation Matters</h3>
                <p className="text-primary-brown/85 font-sans leading-relaxed text-sm md:text-base">
                  Mohalle Mastane is entirely community-funded. Every rupee you donate helps us respond to distress calls, stock medicine, and sustain feed kitchens. We run an open ledger policy to assure donors of absolute transparency.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    "100% funds used on rescues, food, & medicine",
                    "Dedicated veterinarian partnerships",
                    "Weekly feeding routes logs shared openly",
                    "Secure SSL Encrypted transactions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-muted-teal text-lg flex-shrink-0" />
                      <span className="font-sans font-medium text-sm md:text-base text-primary-brown/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-cream/70 rounded-2xl border border-beige/40 text-xs font-semibold text-primary-brown/70 leading-relaxed">
                  📢 <strong>Note:</strong> 100% of donations go towards animal welfare, rescue operations, treatment, and community initiatives.
                </div>
              </div>

              {/* Heart Warming Quote */}
              <div className="p-8 bg-gradient-to-br from-primary-brown to-light-brown text-cream rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 text-9xl text-cream/5 opacity-10 pointer-events-none">
                  <FaPaw />
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-cream/90">
                  "Saving one animal will not change the world, but surely for that one animal, the world will change forever."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-0.5 w-6 bg-accent-gold"></div>
                  <span className="text-xs uppercase tracking-wider text-accent-gold font-bold">Mohalle Mastane Guardians</span>
                </div>
              </div>
            </div>

            {/* Right Column: Donation Form Widget */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="donation-form-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="bg-cream border border-beige/40 rounded-3xl p-8 md:p-10 shadow-xl space-y-8"
                  >
                    {/* Presets Grid */}
                    <div className="space-y-4">
                      <h4 className="font-serif font-bold text-lg text-primary-brown">1. Select Donation Amount</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {presets.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handlePresetSelect(amount)}
                            className={`py-4 rounded-2xl font-serif text-lg font-bold border-2 transition-all duration-300 ${
                              selectedPreset === amount
                                ? 'bg-primary-brown text-cream border-primary-brown shadow-lg'
                                : 'bg-transparent text-primary-brown border-beige/70 hover:border-primary-brown hover:bg-beige/10'
                            }`}
                          >
                            ₹{amount}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Input */}
                    <div className="space-y-3">
                      <label htmlFor="custom-amount" className="font-serif font-bold text-sm text-primary-brown/85">
                        Or enter custom amount (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif font-bold text-lg text-primary-brown/60">₹</span>
                        <input
                          type="text"
                          id="custom-amount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Other Amount"
                          className="w-full pl-8 pr-4 py-3.5 bg-transparent border-2 border-beige/60 focus:border-primary-brown rounded-2xl focus:outline-none font-serif font-bold text-lg"
                        />
                      </div>
                    </div>

                    {/* Impact description callout */}
                    <div className="p-4 bg-muted-teal/10 border border-muted-teal/20 rounded-2xl flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-muted-teal/15 text-muted-teal flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                        <FaHeart />
                      </div>
                      <div>
                        <h5 className="font-serif font-bold text-sm text-primary-brown">Your Impact:</h5>
                        <p className="font-sans text-xs md:text-sm text-primary-brown/85 mt-1 leading-relaxed">
                          {getImpactDescription()}
                        </p>
                      </div>
                    </div>

                    {/* Donor Details form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h4 className="font-serif font-bold text-lg text-primary-brown border-b border-beige/40 pb-2">2. Donor Information</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            id="donor-name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown focus:ring-0 peer placeholder-transparent"
                            placeholder="Name"
                          />
                          <label 
                            htmlFor="donor-name"
                            className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                          >
                            Full Name
                          </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            id="donor-email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown focus:ring-0 peer placeholder-transparent"
                            placeholder="Email"
                          />
                          <label 
                            htmlFor="donor-email"
                            className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                          >
                            Email Address
                          </label>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          id="donor-phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full px-4 py-3.5 text-primary-brown bg-transparent border-2 border-beige/60 rounded-2xl focus:outline-none focus:border-primary-brown"
                          placeholder="Phone"
                        />
                        <label 
                          htmlFor="donor-phone"
                          className="absolute left-4 top-3.5 text-primary-brown/60 font-sans pointer-events-none transition-all duration-200 origin-[0] bg-cream px-2 -translate-y-7 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-brown"
                        >
                          Phone Number
                        </label>
                      </div>

                      {/* Submit Secure Checkout */}
                      <button
                        type="submit"
                        disabled={isSubmitting || getActiveAmount() <= 0}
                        className="w-full py-4 px-6 bg-primary-brown hover:bg-light-brown text-cream font-bold rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                            Opening Secure Gateway...
                          </>
                        ) : (
                          <>
                            <FaLock className="text-sm text-accent-gold" />
                            Donate ₹{getActiveAmount() || 0} Secures Life
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="donation-success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-cream border border-beige/40 rounded-3xl p-12 shadow-xl text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-muted-teal/20 text-muted-teal rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">
                      <FaHeart className="text-[#C89A63] animate-pulse" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-3xl font-serif font-bold text-primary-brown">Donation Successful!</h4>
                      <p className="text-accent-gold font-serif font-bold text-xl">Thank You for Your Generosity</p>
                    </div>

                    <p className="text-primary-brown/85 font-sans leading-relaxed max-w-md mx-auto">
                      Your payment of <strong>₹{getActiveAmount()}</strong> was processed successfully. A payment confirmation receipt and live impact logs will be mailed to you shortly. You have officially secured a street animal's well-being!
                    </p>

                    <div className="pt-6">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-brown hover:bg-light-brown text-cream font-bold rounded-full transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
                      >
                        Make Another Donation
                        <FaChevronRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
