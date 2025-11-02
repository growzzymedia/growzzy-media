
import React, { useState } from 'react';
import { Sparkles, Linkedin, ChevronDown, ArrowRight } from 'lucide-react';
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
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 fade-in-section">
            Our Studios — Where <span className="text-growzzy-primary">Human Strategy</span> Meets <span className="text-growzzy-primary">AI Speed</span>
          </h2>
          <p className="text-lg text-muted-foreground fade-in-section" data-delay="0.2">
            Two specialized studios, one mission: helping you scale smarter with AI-driven marketing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {studios.map((studio, index) => (
            <div 
              key={studio.id} 
              className="fade-in-section bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2" 
              data-delay={`${0.2 + index * 0.1}`}
            >
              {/* Studio Header */}
              <div className="bg-gradient-to-br from-growzzy-primary to-growzzy-dark p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
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

              {/* Services List */}
              <div className="p-6">
                <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                  {studio.services.length} Specialized Services
                </p>
                
                {expandedStudio === studio.id && (
                  <div className="space-y-3 animate-fade-in">
                    {studio.services.map((service) => (
                      <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        {/* Service Header */}
                        <button
                          onClick={() => toggleService(service.id)}
                          className="w-full p-4 text-left hover:bg-growzzy-light/30 transition-colors flex items-center justify-between group"
                        >
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-growzzy-primary transition-colors mb-1">
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
                          <div className="px-4 pb-4 bg-growzzy-light/20 animate-accordion-down">
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-growzzy-primary mr-2 mt-1 flex-shrink-0">✓</span>
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
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss which studio and services will work best for your business goals
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LeadForm 
                trigger={
                  <button className="btn-primary text-lg inline-flex items-center group">
                    Get Started with AI Marketing
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                }
                title="Ready to Transform Your Marketing?"
                description="Let's discuss which AI marketing services will work best for your business goals."
              />
              <Link to="/services" className="btn-outline text-lg inline-flex items-center group">
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
