import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaPaw, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import LogoImg from '../assets/Logo.png';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-[#1C110A] text-cream relative overflow-hidden">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-4 space-y-5">
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <img 
                src={LogoImg} 
                alt="Mohalle Mastane Logo" 
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg font-bold tracking-wider text-cream leading-tight">
                  MOHALLE MASTANE
                </span>
                <span className="text-[8px] font-sans font-semibold tracking-widest text-accent-gold">
                  COEXISTENCE • COMPASSION • TOGETHERNESS
                </span>
              </div>
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaInstagram, url: "https://www.instagram.com/mohallemastane?igsh=MW1qMjBzd2g0ZndmNw%3D%3D" },
                { icon: FaFacebookF, url: "https://facebook.com" },
                { icon: FaYoutube, url: "https://youtube.com" }
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#2E1C12] hover:bg-accent-gold text-cream/70 hover:text-primary-brown flex items-center justify-center shadow-md transition-all duration-300"
                  >
                    <IconComp className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="font-serif text-base font-bold text-accent-gold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 font-sans text-sm">
              {[
                { name: "Vision", href: "/vision" },
                { name: "Community", href: "/community" },
                { name: "Fundraising", href: "/fundraising" },
                { name: "Events", href: "/#events" },
                { name: "Volunteers", href: "/#volunteer" },
                { name: "Donate", href: "/donate" }
              ].map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('/#') || link.href === '/' ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-cream/60 hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-cream/60 hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="md:col-span-2 space-y-5">
            <h3 className="font-serif text-base font-bold text-accent-gold uppercase tracking-wider">
              Get Involved
            </h3>
            <ul className="space-y-2.5 font-sans text-sm">
              {[
                "Volunteer",
                "Share Your Story",
                "Community Groups",
                "Adoption"
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="text-cream/60 hover:text-accent-gold hover:translate-x-1 inline-block transition-all duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="font-serif text-base font-bold text-accent-gold uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="font-sans text-sm text-cream/60 leading-relaxed">
              Join our community of compassion and receive updates on our efforts.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 bg-[#2E1C12] border border-[#443024] rounded-xl text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-accent-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-accent-gold text-primary-brown hover:bg-cream hover:scale-105 active:scale-95 rounded-xl font-bold shadow-md transition-all duration-300 cursor-pointer"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2E1C12] bg-[#140B06] py-5 font-sans text-xs text-center text-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Mohalle Mastane Welfare Foundation. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Every Mohalla Can Become A Home for Compassion. <FaPaw className="text-accent-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
}
