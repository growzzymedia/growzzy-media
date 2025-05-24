import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { MonitorSmartphone, Megaphone, Linkedin, Globe, Settings, BarChart3, Users, MessageSquare, Search, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "AI-Driven Digital Marketing Services | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "AI-Powered Lead Generation",
      description: "We create high-converting campaigns using AI marketing automation on Google and Meta platforms that deliver measurable performance marketing results.",
      details: [
        "AI-driven campaign strategy & planning", 
        "Data-driven ad creative development", 
        "AI-powered A/B testing & optimization", 
        "Performance tracking with marketing automation", 
        "AI budget optimization", 
        "Automated reporting & analytics"
      ]
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10" />,
      title: "AI-Driven Social Growth",
      description: "Strategic content creation using AI marketing tools 2025 to build engaged audiences through data-driven marketing campaigns.",
      details: [
        "AI-powered content calendar development", 
        "Platform-specific AI content creation", 
        "AI hashtag & trend research", 
        "Automated community management", 
        "AI-driven engagement strategies", 
        "Performance analytics & growth tracking"
      ]
    },
    {
      icon: <Linkedin className="w-10 h-10" />,
      title: "AI-Powered LinkedIn Marketing", 
      description: "Build your personal brand with AI-powered outreach systems and LinkedIn marketing automation for maximum lead generation.",
      details: [
        "AI profile optimization", 
        "Data-driven content strategy", 
        "AI ghostwriting & post creation", 
        "Automated connection growth strategies", 
        "AI-powered engagement tactics", 
        "Thought leadership positioning with AI"
      ]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "AI-Optimized Website Development",
      description: "Clean, conversion-focused websites with AI and SEO integration strategies that convert visitors into leads.",
      details: [
        "AI-driven design & development", 
        "Mobile-responsive layouts with AI optimization", 
        "AI and SEO integration strategies 2025", 
        "AI-powered lead capture systems", 
        "Analytics setup with marketing automation", 
        "AI-enhanced maintenance & support"
      ]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "AI Marketing Automation Solutions",
      description: "Custom AI-driven campaign optimization for small businesses with comprehensive marketing automation systems.",
      details: [
        "AI digital marketing strategy consulting", 
        "Advanced marketing automation setup", 
        "AI-powered CRM integration", 
        "Conversion optimization with AI", 
        "Data-driven analytics & reporting", 
        "AI marketing tools training & development"
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
                AI-Driven Digital Marketing <span className="text-growzzy-primary">Services</span>
              </h1>
              <p data-delay="0.2" className="text-xl text-muted-foreground mb-8 fade-in-section text-justify md:text-lg font-normal">
                We offer comprehensive AI marketing automation and data-driven marketing campaigns designed to help your brand grow using the best AI marketing platforms for D2C brands.
                <br /><br />
                We're not just a digital marketing agency — we're your AI-powered growth partner. At Growzzy Media, every campaign is fueled by AI marketing tools 2025, performance data, and audience intent — not guesswork. From AI-powered lead generation to automated SEO and trend-predictive content, our stack learns what converts faster than any team alone.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 md:py-24">
          <div className="container">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 fade-in-section`} data-delay={`${0.1 * index}`}>
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
                            <h4 className="font-semibold">AI Performance</h4>
                            <p className="text-sm text-muted-foreground">ROI-focused AI campaigns</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <Search className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">AI Targeting</h4>
                            <p className="text-sm text-muted-foreground">Precision audience reach</p>
                          </div>
                        </>
                      )}
                      
                      {index === 1 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <Users className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">AI Community</h4>
                            <p className="text-sm text-muted-foreground">Building loyal followers</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <PenTool className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">AI Content</h4>
                            <p className="text-sm text-muted-foreground">Engaging AI storytelling</p>
                          </div>
                        </>
                      )}
                      
                      {index === 2 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                            <MessageSquare className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">AI Thought Leadership</h4>
                            <p className="text-sm text-muted-foreground">Position yourself as an industry expert with AI</p>
                          </div>
                        </>
                      )}
                      
                      {index === 3 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                            <Globe className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">AI-Optimized Presence</h4>
                            <p className="text-sm text-muted-foreground">Beautiful, AI-enhanced websites</p>
                          </div>
                        </>
                      )}
                      
                      {index === 4 && (
                        <>
                          <div className="bg-white rounded-lg p-4 shadow-sm col-span-2">
                            <Settings className="w-8 h-8 text-growzzy-primary mb-2" />
                            <h4 className="font-semibold">AI Custom Solutions</h4>
                            <p className="text-sm text-muted-foreground">AI-tailored to your business needs</p>
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
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to grow with AI marketing automation?</h2>
              <p className="text-lg mb-8">
                Let's discuss how our AI-driven digital marketing strategies can help you achieve your business goals and stand out with performance marketing.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get AI Marketing Solutions
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
