
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="bg-blob blob-1 animate-float"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Marketing that <span className="text-growzzy-primary">Moves People.</span> Strategy that <span className="text-growzzy-primary">Builds Brands.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Growzzy Media helps businesses grow online with smart strategy, powerful visuals, and scroll-stopping content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/contact" 
              className="btn-primary text-lg group"
            >
              Let's Work Together
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="btn-outline text-lg group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mt-20 md:mt-32">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg fade-in-section" data-delay="0.8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">About Growzzy</h2>
            <p className="text-lg mb-4">
              We're a passionate team of digital marketers, creatives, and strategists driven to help brands stand out in the noisy online world.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether you're a startup finding your footing or an established brand seeking a refresh, we bring the perfect blend of strategic thinking and creative execution to elevate your digital presence.
            </p>
            <Link to="/services" className="text-growzzy-primary font-medium inline-flex items-center group hover:text-growzzy-dark transition-colors">
              Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
