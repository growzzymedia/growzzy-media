import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonials = [
    {
      name: "Team Humara Pandit",
      role: "Faith-Tech Startup | Ads & Content",
      content: "Partnering with Growzzy Media has been one of the best decisions for our startup. Their sharp ads, smart targeting, and culturally resonant content gave us real leads and real trust. Our ROAS jumped. Even 5-day campaigns brought solid results. They understood our faith-driven mission and brought it alive in every campaign.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1614107707379-283a65f5b1d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Founders, ClaySip",
      role: "Branding, Social Media, Website for Terracotta Brand",
      content: "We were completely offline and unsure if going digital was worth it. Growzzy convinced us to take the leap. Then they built our entire brand from scratch. Thoughtfully. Affordably. From logo to launch, they handled everything. In just 2 months, we reached over 50,000 people and started getting direct website sales. It felt like watching our mitti ka sapna come alive online.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1509527855516-5ab203a0a0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Founder, Polki Sarees",
      role: "Social Media Management for D2C Saree Brand",
      content: "We didn't think Instagram could move the needle this fast. With Growzzy's creative direction, we went from 2K to over 8 million reach in 4 months. All organic. Every reel, every post told our story perfectly. They truly helped us make sarees feel magical again, just like childhood memories.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1619411281075-8272e104115e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Adv. Rashi Singhal",
      role: "LinkedIn Personal Branding",
      content: "I always knew I needed a digital presence, but I didn't know how to make it impactful. Then Growzzy stepped in. In 4 months, my LinkedIn impressions jumped from 800 to 45,000+. New clients began reaching out through the platform. My content finally reflected my credibility. Their strategy gave my practice a personal brand I'm proud of.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Owner, Bedtime Essentials",
      role: "Social Media + Lead Gen for D2C & Wholesale",
      content: "We'd been in the bedsheet business for years, but online was new for us. Growzzy gave us the confidence. And the results. They built our social presence from scratch, ran B2B outreach, and created a D2C buying link that actually sold. Revenue grew 1.6x in two months. They turned our bedsheets into a digital success story.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-growzzy-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-blob blob-3 animate-float-slow"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Client <span className="text-growzzy-primary animate-pulse-scale">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results. Real brands. Hear from clients who've transformed their business with AI-driven marketing.
          </p>
        </div>

        <div className="fade-in-section" data-delay="0.2">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              duration: 30,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="p-2">
                    <div className="group bg-white rounded-2xl border-2 border-gray-100 shadow-xl p-8 md:p-10 h-full flex flex-col transition-all duration-500 hover-lift hover:border-growzzy-primary hover:shadow-2xl gradient-glow-effect">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-growzzy-light group-hover:ring-growzzy-primary/30 transition-all duration-300 flex-shrink-0 animate-scale-in">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground group-hover:text-growzzy-primary transition-colors duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                          <div className="flex gap-1">
                            {renderStars(testimonial.stars)}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground flex-grow leading-relaxed text-base animate-fade-in">
                        "{testimonial.content}"
                      </p>

                      {/* Decorative Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-growzzy-primary">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-8 mt-12">
              <CarouselPrevious className="relative static h-14 w-14 rounded-full border-2 border-growzzy-primary/30 bg-white hover:border-growzzy-primary hover:bg-growzzy-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover-scale" />
              
              <div className="flex gap-2.5">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 rounded-full transition-all duration-500 ${
                      index === current 
                        ? 'w-10 bg-growzzy-primary shadow-lg animate-pulse-glow' 
                        : 'w-3 bg-growzzy-primary/25 hover:bg-growzzy-primary/50 hover:w-6 hover-scale'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative static h-14 w-14 rounded-full border-2 border-growzzy-primary/30 bg-white hover:border-growzzy-primary hover:bg-growzzy-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover-scale" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
