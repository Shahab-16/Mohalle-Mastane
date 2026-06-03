import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaDog, FaCat, FaFeather, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { GiCow, GiSniffingDog } from 'react-icons/gi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AnimalGallery() {
  const animals = [
    {
      name: "Street Dogs",
      icon: FaDog,
      count: "350+ Fed Daily",
      tag: "Dogs",
      description: "Our canine companions are on the frontlines. We manage daily feeding programs, anti-rabies vaccination drives, and wound treatments across various blocks.",
      color: "from-[#5B3A29] to-[#8B5E3C]",
      badgeColor: "bg-[#5B3A29]/15 text-[#5B3A29]"
    },
    {
      name: "Community Cats",
      icon: FaCat,
      count: "120+ Sterilized",
      tag: "Cats",
      description: "Cats are highly vulnerable. We support stray kittens, run trap-neuter-return (TNR) initiatives, and locate loving foster/adoption homes.",
      color: "from-[#8B5E3C] to-[#C89A63]",
      badgeColor: "bg-[#8B5E3C]/15 text-[#8B5E3C]"
    },
    {
      name: "Stray Cows",
      icon: GiCow,
      count: "80+ Rescued & Fed",
      tag: "Cows",
      description: "Many cows ingest plastic or are injured in road accidents. We supply clean green fodder and organize medical rescue runs with veterinary ambulances.",
      color: "from-[#708B7D] to-[#8B5E3C]",
      badgeColor: "bg-[#708B7D]/15 text-[#708B7D]"
    },
    {
      name: "Injured Birds",
      icon: FaFeather,
      count: "100+ Recovered",
      tag: "Birds",
      description: "Birds suffer during severe heatwaves and due to kite strings. We install water bowls in neighborhoods and host healing shelters for injured birds.",
      color: "from-[#C89A63] to-[#708B7D]",
      badgeColor: "bg-[#C89A63]/15 text-[#C89A63]"
    },
    {
      name: "Street Animals",
      icon: GiSniffingDog,
      count: "50+ Squirrels & Others",
      tag: "Squirrels & Others",
      description: "Every life matters. We rescue small animals like squirrels, rabbits, and community creatures experiencing injuries or extreme dehydration.",
      color: "from-[#5B3A29] to-[#708B7D]",
      badgeColor: "bg-[#5B3A29]/15 text-[#5B3A29]"
    }
  ];

  return (
    <section id="animals" className="py-20 bg-beige/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-brown/10 text-primary-brown rounded-full text-sm font-semibold">
              <FaHeart className="text-accent-gold" />
              Lives We Care For
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-brown">
              Who We Nourish & Protect
            </h2>
            <p className="max-w-2xl text-primary-brown/85 font-sans">
              Every day we serve the voiceless animals of our community. From medical attention to nutritious meals, our target is safe, healthy, and happy animals.
            </p>
          </div>

          {/* Custom Navigation buttons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button className="swiper-nav-prev w-12 h-12 rounded-full border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown flex items-center justify-center transition-all duration-300 shadow-md">
              <FaChevronLeft />
            </button>
            <button className="swiper-nav-next w-12 h-12 rounded-full border-2 border-primary-brown hover:bg-primary-brown hover:text-cream text-primary-brown flex items-center justify-center transition-all duration-300 shadow-md">
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
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            navigation={{
              nextEl: '.swiper-nav-next',
              prevEl: '.swiper-nav-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {animals.map((animal, index) => {
              const IconComp = animal.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="bg-cream rounded-3xl overflow-hidden shadow-lg border border-beige/40 flex flex-col h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    
                    {/* Header Image/Gradient Block */}
                    <div className={`h-48 bg-gradient-to-br ${animal.color} relative flex items-center justify-center text-cream overflow-hidden`}>
                      {/* Background texture decor */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      
                      <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                        <IconComp className="text-8xl text-cream/90 filter drop-shadow-lg" />
                      </div>
                      
                      <span className="absolute bottom-4 left-4 font-serif text-sm font-semibold tracking-wider text-cream/90 bg-primary-brown/45 backdrop-blur-sm px-3.5 py-1 rounded-full uppercase">
                        {animal.tag}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-serif font-bold text-primary-brown group-hover:text-accent-gold transition-colors duration-200">
                            {animal.name}
                          </h3>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${animal.badgeColor}`}>
                            {animal.count}
                          </span>
                        </div>
                        <p className="text-primary-brown/80 font-sans text-sm md:text-base leading-relaxed">
                          {animal.description}
                        </p>
                      </div>

                      {/* Small Footer/CTA inside Card */}
                      <div className="pt-6 mt-6 border-t border-beige/40 flex items-center justify-between">
                        <span className="text-xs text-primary-brown/50 font-sans">Helping them coexist</span>
                        <span className="text-xs font-bold text-accent-gold uppercase tracking-wider group-hover:underline">Learn More →</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Pagination Indicator */}
          <div className="swiper-custom-pagination flex justify-center items-center gap-2 mt-4"></div>
        </div>

      </div>
      
      {/* Styles to customize pagination dots */}
      <style>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          background: #8B5E3C !important;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          background: #5B3A29 !important;
        }
      `}</style>
    </section>
  );
}
