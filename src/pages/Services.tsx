
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Palette, PenTool, Users, Target, Rocket, TrendingUp, BarChart3, User, MessageSquare, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "AI-Driven Marketing Services That Actually Scale | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const brandStudioServices = [
    {
      id: "brand-strategy",
      title: "Brand Strategy & Consultation",
      description: "Strategic deep-dive into your brand's positioning, personality, and marketing roadmap.",
      value: "Helps you show up with clarity, consistency, and conversion in mind.",
      benefits: [
        "Brand voice, values & audience mapping",
        "Market research + competitor benchmarking", 
        "Clear GTM roadmap or revamp"
      ]
    },
    {
      id: "funnel-content",
      title: "Funnel & Content Scripting",
      description: "Strategic scripts for paid ads, landing pages, and email flows.",
      value: "Converts scrollers into loyal buyers across the funnel.",
      benefits: [
        "Scroll-stopping hooks & CTAs",
        "Full-funnel creative scripts",
        "Tailored content journeys (D2C or service-based)"
      ]
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Done-for-you content calendars, designs, and uploads.",
      value: "Builds community + keeps you top of mind with your audience.",
      benefits: [
        "Weekly content plans",
        "Trend-adaptive creatives",
        "Engagement support"
      ]
    },
    {
      id: "paid-ads",
      title: "Paid Ads (Meta, Google, Snapchat, Amazon, WhatsApp)",
      description: "Performance marketing using AI-based media buying & creative testing.",
      value: "Gets you leads, sales, or bookings at a lower CAC.",
      benefits: [
        "ROI-focused ad strategy",
        "Real-time data-driven optimization",
        "Proven across D2C, healthcare, education"
      ]
    },
    {
      id: "launch-campaigns",
      title: "Launch & Campaign Execution",
      description: "GTM or relaunch campaigns with end-to-end support.",
      value: "Makes launches smooth, loud, and data-backed.",
      benefits: [
        "Strategic rollout plans",
        "Multi-channel content & media",
        "Post-launch analysis"
      ]
    },
    {
      id: "influencer-ugc",
      title: "Influencer & UGC Support",
      description: "Collaborations with micro-creators & UGC campaigns.",
      value: "Builds trust & drives organic conversions.",
      benefits: [
        "UGC strategy + scripting",
        "Creator sourcing + briefing",
        "Integration with ads + organic"
      ]
    },
    {
      id: "analytics-reporting",
      title: "Analytics + Reporting + Optimization",
      description: "AI-backed dashboards + monthly review calls.",
      value: "Ensures you're always improving, never guessing.",
      benefits: [
        "ROI reports + insight decks",
        "Weekly or monthly syncs",
        "Conversion rate optimization"
      ]
    }
  ];

  const linkedinStudioServices = [
    {
      id: "personal-branding",
      title: "LinkedIn Personal Branding (Founders/Experts)",
      description: "Personal brand development & content for founders or CXOs.",
      value: "Turns you into an industry voice your clients trust.",
      benefits: [
        "Ghostwritten posts that build authority",
        "Content aligned with business goals",
        "Profile revamp + strategy sync"
      ]
    },
    {
      id: "ghostwriting-comments",
      title: "Ghostwriting & Comment Strategy",
      description: "Thought leadership content + curated commenting.",
      value: "Increases visibility, engagement, and DMs.",
      benefits: [
        "Weekly ghostwritten content",
        "Strategic engagement in target circles",
        "Authority building across key niches"
      ]
    },
    {
      id: "company-page",
      title: "Company Page Management",
      description: "Full-funnel management of brand's LinkedIn company page.",
      value: "Builds brand trust + recruits talent + generates leads.",
      benefits: [
        "Post planning & scheduling",
        "Follower growth support",
        "Team content integration"
      ]
    },
    {
      id: "linkedin-ads",
      title: "LinkedIn Ads & Messaging Funnels",
      description: "Precision-targeted ad campaigns and smart DM sequences.",
      value: "Gets you in front of decision-makers fast.",
      benefits: [
        "Ad creatives + copy",
        "Cold outreach + warm nurture flows",
        "Analytics + conversion tracking"
      ]
    },
    {
      id: "b2b-lead-gen",
      title: "B2B Lead Gen & Nurturing",
      description: "AI + human-run lead generation and nurture support.",
      value: "Fills your pipeline with qualified, conversion-ready leads.",
      benefits: [
        "CRM integration + calendar booking",
        "Multi-step nurturing campaigns",
        "ICP-specific outreach flows"
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 fade-in-section">
                AI-Driven Marketing Services That Actually <span className="text-growzzy-primary">Scale</span>
              </h1>
              <div data-delay="0.2" className="text-lg md:text-xl text-muted-foreground mb-8 fade-in-section max-w-3xl mx-auto">
                <p className="mb-4">
                  We offer comprehensive AI marketing automation and data-driven campaigns designed to help your brand grow using the best AI marketing platforms for D2C and B2B brands.
                </p>
                <p className="mb-4">
                  We're not just an AI digital marketing agency — we're your AI-powered growth partner.
                </p>
                <p className="mb-6">
                  At Growzzy Media, every campaign is fueled by real-time data, not guesswork. From AI-powered lead generation to automated SEO and trend-predictive content, our stack learns what converts — faster than any human team alone.
                </p>
                <Link to="/connect" className="btn-primary inline-flex items-center group">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Studios Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-growzzy-light to-white">
          <div className="container">
            {/* Main Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 fade-in-section">
                Our Studios — Where Human-Led Strategy Meets <span className="text-growzzy-primary">AI-Powered Speed</span>
              </h2>
              <p data-delay="0.2" className="text-lg md:text-xl text-muted-foreground fade-in-section mb-8">
                We aren't just a marketing agency — we're your creative growth partners. At Growzzy, we combine human creativity with AI efficiency across two core studios:
              </p>
            </div>

            {/* Tree Structure */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central connecting line */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-growzzy-primary to-transparent"></div>
              
              {/* Horizontal connecting line */}
              <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-growzzy-primary to-transparent"></div>
              
              {/* Branch lines */}
              <div className="hidden md:block absolute top-20 left-1/4 w-px h-16 bg-gradient-to-b from-growzzy-primary to-transparent"></div>
              <div className="hidden md:block absolute top-20 right-1/4 w-px h-16 bg-gradient-to-b from-growzzy-primary to-transparent"></div>

              {/* Studios Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
                {/* Brand Studio */}
                <div className="fade-in-section" data-delay="0.3">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative">
                    {/* Studio Icon */}
                    <div className="absolute -top-8 left-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-growzzy-primary to-purple-600 flex items-center justify-center shadow-lg">
                        <Palette className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Brand Studio</h3>
                      <p className="text-lg text-muted-foreground mb-8">Helping brands find their voice, audience, and scalable growth engine.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3">
                      {brandStudioServices.map((service) => (
                        <AccordionItem key={service.id} value={service.id} className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-growzzy-primary/30 transition-all duration-300">
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-growzzy-primary rounded-full group-hover:scale-125 transition-transform"></div>
                              <h4 className="text-lg font-semibold text-left group-hover:text-growzzy-primary transition-colors">{service.title}</h4>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="space-y-4 pl-5">
                              <div>
                                <p className="text-muted-foreground mb-2"><strong>What it is:</strong> {service.description}</p>
                                <p className="text-muted-foreground mb-4"><strong>What it does:</strong> {service.value}</p>
                              </div>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 bg-growzzy-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                    <span className="text-sm">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    <div className="text-center mt-8">
                      <Link to="/connect" className="btn-primary inline-flex items-center group">
                        Book a Discovery Call
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Studio */}
                <div className="fade-in-section" data-delay="0.4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative">
                    {/* Studio Icon */}
                    <div className="absolute -top-8 left-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-growzzy-primary flex items-center justify-center shadow-lg">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="pt-8">
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">LinkedIn Studio</h3>
                      <p className="text-lg text-muted-foreground mb-8">LinkedIn isn't a resume platform. It's a revenue platform — we help you use it right.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3">
                      {linkedinStudioServices.map((service) => (
                        <AccordionItem key={service.id} value={service.id} className="bg-gradient-to-r from-blue-50 to-white rounded-xl border border-gray-200 hover:border-blue-400/30 transition-all duration-300">
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                              <h4 className="text-lg font-semibold text-left group-hover:text-blue-600 transition-colors">{service.title}</h4>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="space-y-4 pl-5">
                              <div>
                                <p className="text-muted-foreground mb-2"><strong>What it is:</strong> {service.description}</p>
                                <p className="text-muted-foreground mb-4"><strong>What it does:</strong> {service.value}</p>
                              </div>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                    <span className="text-sm">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    <div className="text-center mt-8">
                      <Link to="/connect" className="btn-primary inline-flex items-center group">
                        Let's Build Your Authority
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Availability Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 fade-in-section">
                Remote-Ready, Location-Friendly, <span className="text-growzzy-primary">Globally Available</span>
              </h3>
              <p data-delay="0.2" className="text-lg text-muted-foreground fade-in-section">
                We work with brands across India (Delhi NCR, Mumbai, Bangalore, Hyderabad, Ahmedabad, etc.) and globally (US, UK, UAE, Singapore & more). Our systems are built remote-first, results-focused, and timezone-flexible.
              </p>
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
