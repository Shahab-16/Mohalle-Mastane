import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUtensils, 
  FaSyringe, 
  FaBullhorn, 
  FaGraduationCap, 
  FaFirstAid, 
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function EventsSection() {
  const events = [
    {
      title: "Animal Feeding Drive",
      description: "Weekly food prep and distribution drive to feed stray dogs, cats, and birds across the locality.",
      icon: FaUtensils,
      date: "Sunday, Weekly",
      location: "Central Mohalla Hub",
      color: "bg-[#5B3A29] text-cream"
    },
    {
      title: "Vaccination Camp",
      description: "Conducting anti-rabies and multi-disease vaccinations for stray puppies and dogs.",
      icon: FaSyringe,
      date: "June 14, 2026",
      location: "Sector 4 Civic Center",
      color: "bg-[#8B5E3C] text-cream"
    },
    {
      title: "Adoption Awareness",
      description: "Meet-and-greet with rescued puppies and cats, advocating for 'Don't Shop, Adopt' campaign.",
      icon: FaBullhorn,
      date: "June 28, 2026",
      location: "Greenwood Society Park",
      color: "bg-[#C89A63] text-cream"
    },
    {
      title: "Community Rescue Workshop",
      description: "First-aid training for community members on dealing with injured birds and dehydration in stray animals.",
      icon: FaGraduationCap,
      date: "July 05, 2026",
      location: "Mohalle Mastane Center",
      color: "bg-[#708B7D] text-cream"
    },
    {
      title: "Street Animal Medical Camp",
      description: "Vets on wheels diagnosing skin infections, deworming, and treating minor street wounds.",
      icon: FaFirstAid,
      date: "July 19, 2026",
      location: "Old Town Market Area",
      color: "bg-[#5B3A29] text-cream"
    }
  ];

  return (
    <section id="events" className="py-20 bg-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted-teal/10 text-muted-teal rounded-full text-sm font-semibold">
              <FaCalendarAlt />
              Events & Drives
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown">
              Events & Community Activities
            </h2>
            <p className="max-w-2xl text-primary-brown/85 font-sans">
              Be a part of our ground-level activities. We regularly host drives, workshops, and treatment camps to bring the community together for animal welfare.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button className="swiper-event-prev w-12 h-12 rounded-full border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown flex items-center justify-center transition-all duration-300 shadow-md">
              <FaChevronLeft />
            </button>
            <button className="swiper-event-next w-12 h-12 rounded-full border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown flex items-center justify-center transition-all duration-300 shadow-md">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-events-pagination',
            }}
            navigation={{
              nextEl: '.swiper-event-next',
              prevEl: '.swiper-event-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {events.map((event, index) => {
              const IconComp = event.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="bg-beige/20 border border-beige/40 rounded-3xl p-8 flex flex-col justify-between h-[360px] group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl ${event.color} flex items-center justify-center text-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <IconComp />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 bg-cream rounded-full border border-beige/60 text-primary-brown">
                          Active Event
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-primary-brown group-hover:text-accent-gold transition-colors duration-200">
                        {event.title}
                      </h3>
                      
                      <p className="text-primary-brown/85 font-sans text-sm md:text-base leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="space-y-3 pt-6 border-t border-beige/40">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-primary-brown/70">
                        <FaCalendarAlt className="text-accent-gold" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-primary-brown/70">
                        <FaMapMarkerAlt className="text-muted-teal" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Pagination */}
          <div className="swiper-events-pagination flex justify-center items-center gap-2 mt-4"></div>
        </div>

      </div>

      <style>{`
        .swiper-events-pagination .swiper-pagination-bullet {
          background: #8B5E3C !important;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-events-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          background: #5B3A29 !important;
        }
      `}</style>
    </section>
  );
}
