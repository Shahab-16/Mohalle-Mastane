import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPaw, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    if (href === '/') {
      e.preventDefault();
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollToId: id } });
      }
    }
  };

  return (
    <footer className="bg-[#2C1B11] text-cream border-t border-[#463023]">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-6">
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary-brown shadow-md group-hover:scale-105 transition-transform duration-300">
                <FaPaw className="text-xl text-[#5B3A29]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream group-hover:text-accent-gold transition-colors duration-300">
                Mohalle <span className="text-accent-gold">Mastane</span>
              </span>
            </Link>
            
            <p className="font-sans text-sm md:text-base text-cream/70 max-w-sm leading-relaxed">
              Mohalle Mastane is a registered community NGO. We are committed to fostering deep empathy, caring for stray creatures, and encouraging peaceful coexistence in our neighborhoods.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, url: "https://instagram.com" },
                { icon: FaFacebookF, url: "https://facebook.com" },
                { icon: FaYoutube, url: "https://youtube.com" },
                { icon: FaLinkedinIn, url: "https://linkedin.com" }
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#463023] hover:bg-accent-gold text-cream hover:text-primary-brown flex items-center justify-center shadow-md transition-all duration-300"
                  >
                    <IconComp className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="font-serif text-lg font-bold text-accent-gold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 font-sans text-sm md:text-base">
              {[
                { name: "About", href: "/#about" },
                { name: "Animals We Care For", href: "/#animals" },
                { name: "Events & Drives", href: "/#events" },
                { name: "Become a Volunteer", href: "/#volunteer" },
                { name: "Donate Now", href: "/donate" }
              ].map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('/#') || link.href === '/' ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-cream/70 hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-cream/70 hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-serif text-lg font-bold text-accent-gold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4 font-sans text-sm md:text-base text-cream/70">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-accent-gold mt-1 flex-shrink-0" />
                <a href="mailto:info@mohallemastane.org" className="hover:text-accent-gold transition-colors duration-200 break-all">
                  info@mohallemastane.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-accent-gold mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent-gold transition-colors duration-200">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-gold mt-1 flex-shrink-0" />
                <span>
                  Mohalle Mastane Welfare Shelter, <br />
                  Sector 15, New Delhi, India
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-[#463023] bg-[#22140C] py-6 font-sans text-xs md:text-sm text-center text-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mohalle Mastane Welfare Foundation. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <FaPaw className="text-accent-gold animate-bounce" /> for Street Animals.
          </p>
        </div>
      </div>
    </footer>
  );
}
