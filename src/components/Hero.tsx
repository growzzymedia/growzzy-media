
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="bg-blob blob-1"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We don't just market — <span className="text-growzzy-primary">we mesmerise.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Strategic. Creative. Unforgettable.
          </p>
          <a 
            href="#contact" 
            className="btn-primary text-lg opacity-0 animate-fade-in group"
            style={{ animationDelay: '0.6s' }}
          >
            Let's Grow Together
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      <div className="container mt-20 md:mt-32">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Meet Growzzy</h2>
            <p className="text-lg mb-4">
              A digital-first, performance-driven marketing agency.
            </p>
            <p className="text-muted-foreground">
              We blend creative ideas with marketing precision to help your brand shine in the crowded online world. Whether you're a startup or scaling brand, we're the team that gets it done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
