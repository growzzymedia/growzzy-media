
import React, { useState } from 'react';
import { Sparkles, Linkedin, ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from './LeadForm';

const Services = () => {
  const [expandedStudio, setExpandedStudio] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const studios = [
    {
      id: 'brand',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Brand Studio',
      subtitle: 'Build, Scale & Stand Out',
      description: 'Where human strategy meets AI speed to create brands that convert',
      gradient: 'from-growzzy-primary to-growzzy-secondary',
      services: [
        {
          id: 'lead-gen',
          title: 'AI-Powered Lead Generation',
          hook: 'Stop guessing. Start converting. AI-driven ads that actually deliver ROI.',
          benefits: [
            'Smart targeting using AI to reach your ideal customers',
            'Real-time optimization for maximum campaign performance',
            'Predictive analytics to forecast and improve results'
          ]
        },
        {
          id: 'social-media',
          title: 'Organic Social Media Management',
          hook: 'Consistent content. Growing community. Zero burnout.',
          benefits: [
            'Strategic content calendar with high-impact timing',
            'Community management that builds genuine relationships',
            'Data-driven growth reports with actionable insights'
          ]
        },
        {
          id: 'website',
          title: 'AI-Optimized Website Development',
          hook: 'Beautiful sites that convert visitors into customers, powered by AI.',
          benefits: [
            'Lightning-fast, mobile-responsive designs',
            'SEO-optimized for maximum visibility',
            'Smart lead capture with automated follow-ups'
          ]
        },
        {
          id: 'brand-strategy',
          title: 'Brand Strategy & Research',
          hook: 'Know your audience. Own your position. Dominate your niche.',
          benefits: [
            'Deep audience persona mapping for precise targeting',
            'Competitive benchmarking to find your edge',
            'Messaging frameworks that resonate and convert'
          ]
        }
      ]
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-8 h-8" />,
      title: 'LinkedIn Studio',
      subtitle: 'Thought Leadership That Converts',
      description: 'AI-powered personal branding for founders, executives & professionals',
      gradient: 'from-growzzy-secondary to-growzzy-accent',
      services: [
        {
          id: 'linkedin-management',
          title: 'LinkedIn Management',
          hook: 'From invisible to influential. Let AI amplify your voice.',
          benefits: [
            'AI-powered thought leadership content that positions you as an expert',
            'Ghostwriting & profile optimization for maximum engagement',
            'Strategic outreach that turns connections into clients'
          ]
        },
        {
          id: 'personal-branding',
          title: 'Personal Branding for Executives',
          hook: 'Build authority. Attract opportunities. Own your narrative.',
          benefits: [
            'Executive presence optimization across all touchpoints',
            'Content strategy that showcases your unique expertise',
            'Relationship-building systems that scale your influence'
          ]
        },
        {
          id: 'b2b-outreach',
          title: 'B2B Lead Generation',
          hook: "Quality leads, not cold calls. AI finds who's ready to buy.",
          benefits: [
            'Smart prospecting using AI to identify ideal clients',
            'Personalized outreach that gets responses, not rejections',
            'Automated follow-up sequences that nurture and convert'
          ]
        }
      ]
    }
  ];

  const toggleStudio = (studioId: string) => {
    setExpandedStudio(expandedStudio === studioId ? null : studioId);
    setExpandedService(null); // Reset expanded service when changing studio
  };

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="section-padding bg-growzzy-gray relative overflow-hidden">
      <div className="bg-blob blob-2 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* AI Spark Dividers */}
      <div className="absolute top-20 left-10 w-16 h-16">
        <Zap className="w-full h-full text-growzzy-primary opacity-20 animate-pulse-scale" />
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20">
        <Zap className="w-full h-full text-growzzy-secondary opacity-20 animate-pulse-scale" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 fade-in-section">
            Our Studios: Where <span className="text-growzzy-primary animate-pulse-scale">Human Strategy</span> Meets <span className="text-growzzy-primary animate-pulse-scale">AI Speed</span>
          </h2>
          <p className="text-lg text-muted-foreground fade-in-section" data-delay="0.2">
            Two specialized studios, one mission: helping you scale smarter with AI-driven marketing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {studios.map((studio, index) => (
            <div 
              key={studio.id} 
              className={`fade-in-section bg-white rounded-2xl shadow-xl border-2 overflow-hidden transition-all duration-500 hover-lift ${
                expandedStudio === studio.id ? 'border-growzzy-primary' : 'border-gray-100'
              }`}
              data-delay={`${0.2 + index * 0.1}`}
            >
              {/* Studio Header */}
              <div className={`bg-gradient-to-br ${studio.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse-glow"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm animate-bounce-subtle">
                      {studio.icon}
                    </div>
                    <button
                      onClick={() => toggleStudio(studio.id)}
                      className="text-white hover:scale-110 transition-transform"
                      aria-label={`Toggle ${studio.title}`}
                    >
                      <ChevronDown 
                        className={`w-8 h-8 transition-transform duration-300 ${
                          expandedStudio === studio.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{studio.title}</h3>
                  <p className="text-lg font-medium text-white/90 mb-3">{studio.subtitle}</p>
                  <p className="text-white/80">{studio.description}</p>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-growzzy-primary" />
                  {studio.services.length} Specialized Services
                </p>
                
                {expandedStudio === studio.id && (
                  <div className="space-y-3 animate-fade-in">
                    {studio.services.map((service) => (
                      <div key={service.id} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-growzzy-primary transition-all duration-300">
                        {/* Service Header */}
                        <button
                          onClick={() => toggleService(service.id)}
                          className="w-full p-4 text-left hover:bg-growzzy-light/30 transition-colors flex items-center justify-between group"
                        >
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-growzzy-primary transition-colors mb-1 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-growzzy-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              {service.title}
                            </h4>
                            <p className="text-sm text-muted-foreground italic">{service.hook}</p>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-growzzy-primary transition-transform ml-4 flex-shrink-0 ${
                              expandedService === service.id ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Service Benefits */}
                        {expandedService === service.id && (
                          <div className="px-4 pb-4 bg-gradient-ai-subtle animate-accordion-down">
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start animate-slide-in-left" style={{ animationDelay: `${idx * 0.1}s` }}>
                                  <span className="text-growzzy-primary mr-2 mt-1 flex-shrink-0 font-bold">✓</span>
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in-section" data-delay="0.6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-100 max-w-3xl mx-auto gradient-glow-effect hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss which studio and services will work best for your business goals
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LeadForm 
                trigger={
                  <button className="btn-primary text-lg inline-flex items-center group animate-pulse-glow hover-lift relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Get Started with AI Marketing
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-growzzy-primary via-growzzy-secondary to-growzzy-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"></div>
                  </button>
                }
                title="Ready to Transform Your Marketing?"
                description="Let's discuss which AI marketing services will work best for your business goals."
              />
              <Link to="/services" className="btn-outline text-lg inline-flex items-center group hover-lift">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
