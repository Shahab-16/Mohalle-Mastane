import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaPaw, FaMobileAlt, FaCopy, FaCheckCircle, FaQrcode, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QrCodeImg from '../assets/donation_qr_code.png';

export default function DonationPage() {
  const [selectedPreset, setSelectedPreset] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    txnId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const presets = [100, 500, 1000, 5000];
  const upiId = "7325842656@ybl";
  const upiNumber = "7325842656";

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

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', txnId: '' });
    }, 1500);
  };

  const getActiveAmount = () => {
    return selectedPreset !== null ? selectedPreset : (customAmount || 0);
  };

  const getImpactDescription = () => {
    const amount = Number(getActiveAmount());
    if (amount <= 0) return "Choose an amount to see its direct impact on Rourkela's street animals.";
    if (amount <= 200) return `Feeds 5 street dogs with warm, nutritious meals for 2 days.`;
    if (amount <= 750) return `Vaccinates 2 community dogs against Rabies and Parvovirus.`;
    if (amount <= 1500) return `Provides complete medical first-aid kit and healing ointment for 10 injured birds.`;
    if (amount <= 5000) return `Covers a specialized vet surgeon consultation and diagnostic blood-tests for a severely injured dog or cow.`;
    return `Covers critical orthopedic surgery, ambulance transport, and post-op shelter boarding for 1 rescued animal.`;
  };

  // Generate UPI payment deep link
  const getUpiLink = () => {
    const amount = getActiveAmount();
    const base = `upi://pay?pa=${upiId}&pn=Mohalle%20Mastane&tn=Donation%20to%20Mohalle%20Mastane&cu=INR`;
    return amount > 0 ? `${base}&am=${amount}` : base;
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-gold/10 text-primary-brown rounded-full text-sm font-semibold border border-accent-gold/20">
              <FaHeart className="text-accent-gold" />
              100% Transparency Ledger
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary-brown leading-tight">
              Support Our Rescue Wards
            </h1>
            <p className="text-base sm:text-lg text-primary-brown/85 font-sans leading-relaxed">
              Mohalle Mastane is entirely community-funded. Your donations directly sponsor emergency rescues, medical surgeries, sterilizations, and daily feeding programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Trust Details & Impact */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-beige/35 rounded-3xl p-8 border border-beige/60 space-y-6 text-left">
                <h3 className="text-2xl font-serif font-bold text-primary-brown">Why Your Support Matters</h3>
                <p className="text-sm text-primary-brown/80 leading-relaxed font-sans">
                  We operate with an open-book financial policy. Every transaction, medical bill, and grocery receipt for our feed kitchen is published weekly in our community channels.
                </p>

                <div className="space-y-4">
                  {[
                    "Zero administrative deductions — 100% to animal care",
                    "Direct partnerships with local vet clinics",
                    "Hyperlocal feeding route logs published openly",
                    "Safe and verified direct UPI transfers"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-muted-teal text-lg shrink-0" />
                      <span className="font-sans text-sm font-medium text-primary-brown/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-cream/70 rounded-2xl border border-beige/40 text-xs font-semibold text-primary-brown/65 leading-relaxed">
                  📢 <strong>Note:</strong> Donations help purchase veterinary medicines, bandages, food grains, and pay for surgical treatments at Rourkela clinics.
                </div>
              </div>

              {/* Heart Warming Quote */}
              <div className="p-8 bg-gradient-to-br from-primary-brown to-light-brown text-cream rounded-3xl shadow-xl relative overflow-hidden text-left">
                <div className="absolute right-0 bottom-0 text-9xl text-cream/5 opacity-10 pointer-events-none">
                  <FaPaw />
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-cream/90">
                  "Saving one animal will not change the world, but surely for that one animal, the world will change forever."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-0.5 w-6 bg-accent-gold"></div>
                  <span className="text-xs uppercase tracking-wider text-accent-gold font-bold">Mohalle Mastane Ecosystem</span>
                </div>
              </div>
            </div>

            {/* Right Column: Donation Area */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Payment Card */}
              <div className="bg-cream border border-beige/45 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 text-left">
                
                {/* 1. Presets */}
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-primary-brown">1. Choose Amount</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {presets.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handlePresetSelect(amount)}
                        className={`py-3.5 rounded-2xl font-serif text-lg font-bold border-2 transition-all duration-300 ${
                          selectedPreset === amount
                            ? 'bg-primary-brown text-cream border-primary-brown shadow-lg'
                            : 'bg-transparent text-primary-brown border-beige hover:border-primary-brown hover:bg-beige/10'
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Input */}
                <div className="space-y-2">
                  <label htmlFor="custom-amount" className="font-sans font-semibold text-xs text-primary-brown/65">
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
                      className="w-full pl-8 pr-4 py-3 bg-transparent border-2 border-beige rounded-2xl focus:border-primary-brown focus:outline-none font-serif font-bold text-lg"
                    />
                  </div>
                </div>

                {/* Impact Indicator */}
                <div className="p-4 bg-muted-teal/10 border border-muted-teal/20 rounded-2xl flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-muted-teal/15 text-muted-teal flex items-center justify-center shrink-0 text-sm mt-0.5">
                    <FaPaw />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-primary-brown">Sponsorship Impact:</h5>
                    <p className="font-sans text-xs sm:text-sm text-primary-brown/85 mt-1 leading-relaxed">
                      {getImpactDescription()}
                    </p>
                  </div>
                </div>

                <hr className="border-beige/50" />

                {/* 2. QR & Redirection WIDGET */}
                <div className="space-y-6">
                  <h4 className="font-serif font-bold text-lg text-primary-brown">2. Scan or Tap to Donate</h4>

                  <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:items-start bg-beige/15 p-6 rounded-3xl border border-beige/40">
                    
                    {/* QR Code inside animated frame */}
                    <div className="relative p-3 bg-white rounded-2xl border border-beige shadow-inner shrink-0">
                      <img 
                        src={QrCodeImg} 
                        alt="Mohalle Mastane Donation QR Code" 
                        className="w-48 h-48 object-contain"
                      />
                      {/* Scanning Line overlay */}
                      <div className="absolute left-3 right-3 top-3 h-[2px] bg-accent-gold/60 rounded animate-bounce shadow-md"></div>
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] font-sans font-bold text-primary-brown/40 uppercase tracking-widest flex items-center gap-1">
                        <FaQrcode /> Scan QR
                      </span>
                    </div>

                    {/* QR Payment Information & Redirection Buttons */}
                    <div className="flex-1 w-full space-y-5 text-center md:text-left">
                      <div className="space-y-1.5">
                        <h5 className="font-serif font-bold text-base text-primary-brown">Direct UPI Redirection</h5>
                        <p className="text-xs text-primary-brown/65 leading-relaxed">
                          If you are browsing on a mobile device, tap the button below to instantly pay using PhonePe, Google Pay, or Paytm.
                        </p>
                      </div>

                      {/* Direct UPI Redirection Link */}
                      <a
                        href={getUpiLink()}
                        className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#3C2415] hover:bg-[#8C593B] active:scale-98 text-cream rounded-2xl shadow-lg hover:shadow-xl font-bold transition-all duration-200"
                      >
                        <FaMobileAlt className="text-lg text-accent-gold" />
                        Pay ₹{getActiveAmount() || 0} via PhonePe / UPI
                      </a>

                      {/* Text Copy details */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between bg-white border border-beige px-4 py-2.5 rounded-xl text-xs font-semibold">
                          <span className="text-primary-brown/50">UPI ID: {upiId}</span>
                          <button
                            onClick={() => handleCopy(upiId, 'upi')}
                            className="text-accent-gold hover:text-light-brown flex items-center gap-1 cursor-pointer"
                          >
                            <FaCopy /> {copiedText === 'upi' ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <div className="flex items-center justify-between bg-white border border-beige px-4 py-2.5 rounded-xl text-xs font-semibold">
                          <span className="text-primary-brown/50">Phone Number: {upiNumber}</span>
                          <button
                            onClick={() => handleCopy(upiNumber, 'number')}
                            className="text-accent-gold hover:text-light-brown flex items-center gap-1 cursor-pointer"
                          >
                            <FaCopy /> {copiedText === 'number' ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-beige/50" />

                {/* 3. Optional Reporting Form */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-lg text-primary-brown">3. Report Payment (Optional)</h4>
                    <p className="text-xs text-primary-brown/65 leading-relaxed">
                      Paid via QR or Phone number? Submit your transaction details below so we can update the ledger and email you a donation certificate.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <form onSubmit={handleReportSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-beige rounded-xl focus:border-primary-brown text-sm"
                          />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-beige rounded-xl focus:border-primary-brown text-sm"
                          />
                        </div>
                        <input
                          type="text"
                          name="txnId"
                          required
                          placeholder="UPI Transaction ID / Ref Number"
                          value={formData.txnId}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-transparent border border-beige rounded-xl focus:border-primary-brown text-sm"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-6 bg-light-brown hover:bg-primary-brown disabled:opacity-50 text-cream font-bold rounded-xl shadow-md transition-colors flex justify-center items-center gap-2 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                              Submitting Report...
                            </>
                          ) : (
                            <>
                              Submit Donation Details <FaArrowRight />
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-muted-teal/10 border border-muted-teal/20 rounded-2xl text-center space-y-3"
                      >
                        <FaCheckCircle className="text-muted-teal text-3xl mx-auto" />
                        <h5 className="font-serif font-bold text-base text-primary-brown">Report Submitted Successfully</h5>
                        <p className="text-xs text-primary-brown/75 leading-relaxed max-w-md mx-auto">
                          Thank you! Our accounting volunteers will crosscheck the Transaction ID against our bank ledger and verify it. Your certificate will be issued shortly.
                        </p>
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-semibold text-accent-gold underline hover:text-light-brown"
                        >
                          Report Another Payment
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
