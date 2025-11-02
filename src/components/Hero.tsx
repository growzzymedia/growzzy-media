import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from './LeadForm';

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "AI-Powered Growth for Your Brand",
    "Where AI Meets Creativity",
    "Where Data Meets Design",
    "Where Brands Grow Smarter"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="bg-blob blob-1 animate-float"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-growzzy-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-growzzy-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-growzzy-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-growzzy-primary rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Headline */}
          <div className="mb-6 min-h-[180px] md:min-h-[200px] flex items-center justify-center">
            <h1 
              key={currentHeadline}
              className="text-4xl lg:text-6xl font-display font-bold leading-tight animate-fade-in md:text-5xl"
            >
              {headlines[currentHeadline].split(' ').map((word, idx) => {
                const isHighlight = word === 'AI-Powered' || word === 'AI' || word === 'Creativity' || word === 'Data' || word === 'Design' || word === 'Growth' || word === 'Smarter';
                return (
                  <span
                    key={idx}
                    className={`inline-block mr-3 ${
                      isHighlight ? 'text-growzzy-primary animate-pulse-scale' : ''
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* Sparkle Accent */}
          <div className="flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Sparkles className="w-5 h-5 text-growzzy-primary animate-spin-slow" />
            <span className="text-sm font-medium text-growzzy-primary uppercase tracking-wider">AI + Human Strategy</span>
            <Sparkles className="w-5 h-5 text-growzzy-primary animate-spin-slow" />
          </div>

          <p 
            style={{ animationDelay: '0.4s' }} 
            className="text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We combine human creativity + machine intelligence so you scale smarter, faster. Transform your marketing with AI-driven strategies that deliver real results.
          </p>
          {/* CTA Buttons with Enhanced Effects */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.6s' }}
          >
            <LeadForm 
              trigger={
                <button className="btn-primary text-lg group animate-pulse-glow hover-lift relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Book a Free Consultation Today!
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-growzzy-primary via-growzzy-secondary to-growzzy-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"></div>
                </button>
              }
              title="Start Your AI Marketing Journey"
              description="Tell us about your business goals and we'll create a custom AI marketing strategy for you."
            />
            <Link to="/services" className="btn-outline text-lg group hover-lift">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground mb-2">Scroll to Explore</span>
              <div className="w-6 h-10 border-2 border-growzzy-primary rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-growzzy-primary rounded-full animate-bounce-subtle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-20 md:mt-32">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl fade-in-section border border-gray-100" data-delay="0.8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-center">About Growzzy - Your AI Marketing Partner</h2>
            <p className="text-lg mb-4 text-center">
              We're India's most relatable AI-driven digital marketing agency, passionate about helping brands stand out using AI marketing automation and performance marketing strategies.
            </p>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              At Growzzy, we blend human storytelling with AI-powered marketing tools to deliver data-driven marketing campaigns that actually convert. Our founder-led approach ensures every AI marketing strategy is trained, tested, and tailored for maximum performance in 2025 and beyond.
              <br /><br />
              We don't follow trends. We predict them using AI and SEO integration strategies.
            </p>
            <div className="text-center">
              <Link to="/about" className="text-growzzy-primary font-semibold inline-flex items-center group hover:text-growzzy-dark transition-colors text-lg">
                Discover Our Story <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;