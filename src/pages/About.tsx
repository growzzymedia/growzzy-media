
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { Check } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

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
                About <span className="text-growzzy-primary">Growzzy Media</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Your partner in digital growth. We combine creativity with data, strategy with storytelling — and most importantly, we grow with you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Growzzy Media Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section">
                <h2 className="text-3xl font-display font-bold mb-6">Why Growzzy Media?</h2>
                <p className="text-lg mb-4"><span className="font-medium">Growzzy is short for "growth made eazy."</span></p>
                <p className="text-muted-foreground mb-6">
                  In today's digital-first world, where everyone is racing ahead online, we believe every business — big or small — deserves a fair chance to grow. 
                  Growzzy Media was born to make digital growth easy, accessible, and impactful.
                </p>
                <p className="text-muted-foreground mb-6">
                  We combine creativity with data, strategy with storytelling — and most importantly, we grow with you.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg fade-in-section" data-delay="0.2">
                <img 
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Marketing Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg fade-in-section">
                <div className="w-14 h-14 bg-growzzy-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-growzzy-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower modern businesses with the tools, strategies, and content needed to stand out and scale in today's competitive digital landscape.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg fade-in-section" data-delay="0.2">
                <div className="w-14 h-14 bg-growzzy-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-growzzy-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the most trusted growth partner for businesses globally by leveraging AI-powered, result-oriented digital solutions.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16 fade-in-section" data-delay="0.3">
              <p className="text-xl font-medium text-growzzy-primary">
                Serving clients globally with a focus on AI-powered digital solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Founder's Diary */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-display font-bold mb-12 text-center fade-in-section">Founder's Diary</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Varuni Profile */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg fade-in-section" data-delay="0.1">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Varuni Bansal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Varuni Bansal</h3>
                      <p className="text-growzzy-primary">Co-Founder</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Marketing has always been my first love. From early on, I was captivated by how brands grow, evolve, and connect in the digital world.
                    </p>
                    <p className="text-muted-foreground">
                      I pursued my BBA and MBA in marketing, and spent 2–3 years gaining hands-on experience across social media, paid ads, branding, and more.
                    </p>
                    <p className="text-muted-foreground">
                      But deep down, I always wanted to build something of my own. I started Growzzy to help others achieve digital growth alongside me — and to my surprise, we scaled from 1 to 10 clients in just a few months.
                    </p>
                    <p className="text-muted-foreground">
                      Turns out, when your work speaks — people listen. :)
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mayank Profile */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg fade-in-section" data-delay="0.2">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Mayank Goel" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Mayank Goel</h3>
                      <p className="text-growzzy-primary">Co-Founder</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Though I hold a degree in B.Com (Hons) in International Accounting & Finance, my heart slowly veered toward marketing.
                    </p>
                    <p className="text-muted-foreground">
                      Growing up in a business family, entrepreneurship was always in my DNA. After diving into digital marketing and gaining expertise in paid ads and personal branding, I knew it was time to build something bigger.
                    </p>
                    <p className="text-muted-foreground">
                      We believe in using AI not as a threat, but as a tool for growth. This journey has been thrilling — and it's only just begun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center fade-in-section">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to grow with us?</h2>
              <p className="text-lg mb-8">
                Let's discuss how we can help your business achieve remarkable growth with our AI-powered digital solutions.
              </p>
              <Link to="/connect" className="btn-primary inline-flex items-center">
                Let's Connect
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

export default AboutPage;
