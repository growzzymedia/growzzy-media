import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from './LeadForm';
const Hero = () => {
  return <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="bg-blob blob-1 animate-float"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 style={{
          animationDelay: '0.2s'
        }} className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6 opacity-0 animate-fade-in md:text-5xl">
            AI-Powered <span className="text-growzzy-primary">Growth</span> for Your Brand
          </h1>
          <p style={{
          animationDelay: '0.4s'
        }} className="text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in md:text-lg max-w-3xl mx-auto leading-relaxed">
            We combine human creativity + machine intelligence so you scale smarter, faster. Transform your marketing with AI-driven strategies that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <LeadForm 
              trigger={
                <button className="btn-primary text-lg group shadow-2xl shadow-growzzy-primary/30 hover:shadow-growzzy-primary/50">
                  Book a Free Consultation Today!
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              }
              title="Start Your AI Marketing Journey"
              description="Tell us about your business goals and we'll create a custom AI marketing strategy for you."
            />
            <Link to="/services" className="btn-outline text-lg group">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
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
    </section>;
};
export default Hero;