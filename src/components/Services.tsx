
import React from 'react';
import { MonitorSmartphone, Megaphone, Linkedin, Globe, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "AI-Powered Lead Generation",
      description: "Advanced campaign setup with AI marketing automation for Google and Meta platforms, delivering ROI-driven performance marketing results."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "AI-Driven Social Growth",
      description: "Strategic content creation using AI marketing tools 2025 to build engaged audiences through data-driven marketing campaigns."
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn AI Marketing",
      description: "AI-powered outreach systems and personal branding strategies to establish thought leadership and generate quality leads."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "AI-Optimized Website Development", 
      description: "Clean, conversion-focused websites with AI and SEO integration strategies that turn visitors into customers."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "AI Marketing Automation Solutions",
      description: "Custom AI-driven campaign optimization for small businesses, including lead generation and performance marketing systems."
    }
  ];

  return (
    <section id="services" className="section-padding bg-growzzy-gray relative">
      <div className="bg-blob blob-2 animate-float" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">AI-Driven Digital Marketing Strategies</h2>
          <p className="text-lg text-muted-foreground fade-in-section" data-delay="0.2">
            Our specialized AI marketing tools and data-driven marketing campaigns help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-section" data-delay={`${0.2 + index * 0.1}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section" data-delay="0.6">
          <Link to="/services" className="btn-primary inline-flex items-center group">
            Explore AI Marketing Services
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
