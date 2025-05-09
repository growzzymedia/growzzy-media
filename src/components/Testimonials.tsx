
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechFirm",
      content: "Growzzy Media transformed our online presence completely. Their strategic approach to paid ads increased our ROAS by 240% in just two months. The team is responsive, creative, and truly invested in our success.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartUp Solutions",
      content: "As a startup founder, I was looking for a marketing partner who understood growth hacking. Growzzy Media not only helped us establish a solid online foundation but also scaled our lead generation by 300%. Their AI-powered approach makes all the difference.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jessica Martinez",
      role: "E-commerce Owner",
      content: "My online store was struggling until I partnered with Growzzy Media. Their holistic approach to digital marketing - from optimizing my website to running targeted ads - helped increase my conversion rate by 45%. They're not just service providers; they're growth partners.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Client Success Stories</h2>
          <p className="text-muted-foreground fade-in-section" data-delay="0.1">
            Don't just take our word for it. Here's what our clients have to say about working with Growzzy Media.
          </p>
        </div>

        <div className="fade-in-section" data-delay="0.2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                  <div className="p-4">
                    <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {renderStars(testimonial.stars)}
                      </div>
                      
                      <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mr-2" />
              <CarouselNext className="relative static ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
