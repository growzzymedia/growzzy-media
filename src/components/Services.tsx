
import React from 'react';
import { 
  MonitorSmartphone, 
  Megaphone, 
  Linkedin, 
  Globe, 
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Paid Ads Management",
      description: "We create scroll-stopping campaigns that convert. Whether it's Google or Meta, we optimize for ROI, not just reach."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "Organic Reach",
      description: "We don't post and ghost. From Instagram to YouTube to Pinterest, we help you grow a presence that matters."
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Management",
      description: "Whether it's ghostwriting for your personal brand or scaling your company page — we're LinkedIn nerds so you don't have to be."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Development",
      description: "From design to deploy, we build websites that feel modern, move smooth, and convert with clarity."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Online Management",
      description: "From lead generation to reputation building to smart brand strategies — consider us your plug-and-play digital team."
    }
  ];

  return (
    <section id="services" className="section-padding bg-growzzy-gray relative">
      <div className="bg-blob blob-2"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">What We Do Best</h2>
          <p className="text-lg text-muted-foreground fade-in-section">
            Our specialized services to help your business grow online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card fade-in-section"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
