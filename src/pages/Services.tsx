
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { 
  MonitorSmartphone, 
  Megaphone, 
  Linkedin, 
  Globe, 
  Settings,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Our Services | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Paid Ads Management",
      description: "We create high-converting campaigns on Google and Meta platforms that deliver real business results.",
      details: [
        "Campaign strategy & planning",
        "Ad creative development",
        "A/B testing & optimization",
        "Performance tracking & analytics",
        "Budget management",
        "Monthly reporting"
      ]
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10" />,
      title: "Organic Social Growth",
      description: "Strategic content creation & scheduling across multiple channels to build engaged, loyal audiences.",
      details: [
        "Content calendar development",
        "Platform-specific content creation",
        "Hashtag & trend research",
        "Community management",
        "Engagement strategies",
        "Analytics & growth tracking"
      ]
    },
    {
      icon: <Linkedin className="w-10 h-10" />,
      title: "LinkedIn Management",
      description: "Build your personal brand or company presence on LinkedIn with expert management.",
      details: [
        "Profile optimization",
        "Content strategy development",
        "Ghostwriting & post creation",
        "Connection growth strategies",
        "Engagement tactics",
        "Thought leadership positioning"
      ]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Development",
      description: "Clean, aesthetic websites that convert visitors into leads and customers.",
      details: [
        "Custom design & development",
        "Mobile-responsive layouts",
        "SEO optimization",
        "Lead capture integration",
        "Analytics setup",
        "Maintenance & support"
      ]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Custom Online Solutions",
      description: "Tailored digital strategies to meet your specific business goals and challenges.",
      details: [
        "Digital strategy consulting",
        "Marketing automation",
        "CRM integration",
        "Conversion optimization",
        "Analytics & reporting systems",
        "Training & team development"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-growzzy-light relative overflow-hidden">
          <div className="bg-blob blob-1 animate-float"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 fade-in-section">
                Our <span className="text-growzzy-primary">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                We offer a comprehensive suite of digital marketing services designed to help your brand grow.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 md:py-24">
          <div className="container">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 fade-in-section`}
                data-delay={`${0.1 * index}`}
              >
                <div className="md:w-1/2">
                  <div className={`bg-white p-8 md:p-10 rounded-lg shadow-lg h-full flex flex-col ${index % 2 !== 0 ? 'items-start' : 'items-end'}`}>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-growzzy-light text-growzzy-primary mb-6 ${index % 2 !== 0 ? '' : 'mr-auto'}`}>
                      {service.icon}
                    </div>
                    <h2 className={`text-3xl font-display font-semibold mb-4 ${index % 2 !== 0 ? 'text-left' : 'text-right mr-auto'}`}>{service.title}</h2>
                    <p className={`text-lg mb-6 ${index % 2 !== 0 ? 'text-left' : 'text-right mr-auto'}`}>{service.description}</p>
                    <ul className={`space-y-2 text-muted-foreground mb-6 ${index % 2 !== 0 ? '' : 'mr-auto'}`}>
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-growzzy-primary rounded-full mt-2 mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className={`bg-growzzy-gray rounded-lg p-8 md:p-12 w-full h-full ${index % 2 === 0 ? 'slide-in-section' : 'slide-in-section'}`} data-animation={index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'} data-delay={`${0.3 + index * 0.1}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {index === 0 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <BarChart3 className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Performance</h4>
                            <p className="text-sm text-muted-foreground">ROI-focused campaigns</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <Search className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Targeting</h4>
                            <p className="text-sm text-muted-foreground">Precision audience reach</p>
                          </div>
                        </>
                      )}
                      
                      {index === 1 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <Users className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Community</h4>
                            <p className="text-sm text-muted-foreground">Building loyal followers</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <PenTool className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Content</h4>
                            <p className="text-sm text-muted-foreground">Engaging storytelling</p>
                          </div>
                        </>
                      )}
                      
                      {index === 2 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                            <MessageSquare className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Thought Leadership</h4>
                            <p className="text-sm text-muted-foreground">Position yourself as an industry expert</p>
                          </div>
                        </>
                      )}
                      
                      {index === 3 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                            <Globe className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Online Presence</h4>
                            <p className="text-sm text-muted-foreground">Beautiful, functional websites</p>
                          </div>
                        </>
                      )}
                      
                      {index === 4 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                            <Settings className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">Custom Solutions</h4>
                            <p className="text-sm text-muted-foreground">Tailored to your business needs</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to grow your business online?</h2>
              <p className="text-lg mb-8">
                Let's discuss how our services can help you achieve your business goals and stand out in the digital world.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default ServicesPage;
