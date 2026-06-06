import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import generated animal images
import dogImg from '../assets/animal_dog.png';
import catImg from '../assets/animal_cat.png';
import cowImg from '../assets/animal_cow.png';
import birdImg from '../assets/animal_bird.png';
import squirrelImg from '../assets/animal_squirrel.png';

export default function AnimalGallery() {
  const animals = [
    {
      name: "Street Dogs",
      image: dogImg,
      count: "350+ Fed Daily",
      tag: "Dogs",
      description: "Our canine companions are on the frontlines. We manage daily feeding programs, anti-rabies vaccination drives, and wound treatments across various blocks.",
      accentColor: "#5B3A29"
    },
    {
      name: "Community Cats",
      image: catImg,
      count: "120+ Sterilized",
      tag: "Cats",
      description: "Cats are highly vulnerable. We support stray kittens, run trap-neuter-return (TNR) initiatives, and locate loving foster and adoption homes.",
      accentColor: "#8B5E3C"
    },
    {
      name: "Stray Cows",
      image: cowImg,
      count: "80+ Rescued & Fed",
      tag: "Cows",
      description: "Many cows ingest plastic or are injured in road accidents. We supply clean green fodder and organize medical rescue runs with veterinary ambulances.",
      accentColor: "#708B7D"
    },
    {
      name: "Injured Birds",
      image: birdImg,
      count: "100+ Recovered",
      tag: "Birds",
      description: "Birds suffer during severe heatwaves and due to kite strings. We install water bowls in neighborhoods and host healing shelters for injured birds.",
      accentColor: "#C89A63"
    },
    {
      name: "Small Animals",
      image: squirrelImg,
      count: "50+ Squirrels & Others",
      tag: "Squirrels & Others",
      description: "Every life matters. We rescue small animals like squirrels, rabbits, and community creatures experiencing injuries or extreme dehydration.",
      accentColor: "#5B3A29"
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
              Every day we serve the voiceless animals of our community. From medical attention to nutritious meals, our mission is safe, healthy, and happy animals.
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
            spaceBetween={28}
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {animals.map((animal, index) => (
              <SwiperSlide key={index}>
                <div className="bg-cream rounded-3xl overflow-hidden shadow-lg border border-beige/40 flex flex-col h-full group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  
                  {/* Photo Block */}
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Tag badge on image */}
                    <span
                      className="absolute bottom-4 left-4 font-serif text-xs font-bold tracking-wider text-cream bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full uppercase"
                    >
                      {animal.tag}
                    </span>

                    {/* Count badge */}
                    <span
                      className="absolute top-4 right-4 text-xs font-bold text-cream rounded-full px-3 py-1"
                      style={{ backgroundColor: animal.accentColor + 'cc' }}
                    >
                      {animal.count}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-serif font-bold text-primary-brown group-hover:text-accent-gold transition-colors duration-200">
                        {animal.name}
                      </h3>
                      <p className="text-primary-brown/80 font-sans text-sm leading-relaxed">
                        {animal.description}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-5 mt-5 border-t border-beige/40 flex items-center justify-between">
                      <span className="text-xs text-primary-brown/50 font-sans">Helping them coexist</span>
                      <span className="text-xs font-bold text-accent-gold uppercase tracking-wider group-hover:underline">Learn More →</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
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
