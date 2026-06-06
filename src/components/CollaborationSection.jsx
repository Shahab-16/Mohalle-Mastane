import { FaHandshake, FaBriefcaseMedical, FaUniversity, FaUsers, FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function CollaborationSection() {
  const partnerTypes = [
    {
      icon: FaBriefcaseMedical,
      title: "Veterinary Clinics & Hospitals",
      description: "We partner with empathetic vets for discounted surgeries, emergency care, and routine check-ups for rescued animals.",
    },
    {
      icon: FaUniversity,
      title: "NGOs & Animal Welfare Bodies",
      description: "Joining hands with like-minded organisations amplifies our impact through shared resources and knowledge.",
    },
    {
      icon: FaUsers,
      title: "Local Businesses & CSR",
      description: "Businesses can support us through CSR funding, sponsoring feeding programs, or co-hosting community awareness events.",
    },
    {
      icon: FaHandshake,
      title: "Individuals & Volunteers",
      description: "From feeding routes to social media outreach, every helping hand creates a ripple of positive change.",
    },
  ];

  return (
    <section id="collaboration" className="py-20 bg-cream relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-brown/10 text-primary-brown rounded-full text-sm font-semibold border border-primary-brown/15">
            <FaHandshake className="text-primary-brown" />
            Partners in Compassion
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown leading-tight">
            Collaboration
          </h2>
          <p className="text-primary-brown/75 font-sans leading-relaxed">
            We believe no organisation can do this alone. Every alliance we forge brings us closer to a community where every animal is safe, cared for, and respected.
          </p>
        </div>

        {/* Partner Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {partnerTypes.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-beige/35 border border-beige/60 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-brown text-cream flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-lg" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-primary-brown group-hover:text-accent-gold transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-primary-brown/70 font-sans text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-br from-primary-brown to-light-brown rounded-3xl overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-cream/5 pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-accent-gold/10 pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-12">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream leading-snug">
                Ready to Collaborate?
              </h3>
              <p className="text-cream/75 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                Whether you're an NGO, a business, a vet, or just someone who cares — reach out and let's build something meaningful together.
              </p>
            </div>
            <a
              href="https://www.instagram.com/mohallemastane?igsh=MW1qMjBzd2g0ZndmNw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              id="collaboration-reach-out-cta"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-accent-gold hover:bg-[#d4a857] text-primary-brown font-bold rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl whitespace-nowrap"
            >
              <FaEnvelope />
              Reach Out to Us
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
