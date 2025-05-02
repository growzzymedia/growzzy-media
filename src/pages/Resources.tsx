
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = "Resources - Growzzy Media";
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElems = document.querySelectorAll('.fade-in-section');
    fadeElems.forEach(elem => {
      observer.observe(elem);
    });

    return () => {
      fadeElems.forEach(elem => {
        observer.unobserve(elem);
      });
    };
  }, []);

  const resourceCategories = [
    {
      name: "Social Media Templates",
      description: "Ready-to-use templates for all your social platforms",
      items: [
        { title: "Content Calendar - Monthly Planner", price: "$19" },
        { title: "Instagram Story Templates (15 Pack)", price: "$29" },
        { title: "LinkedIn Personal Branding Kit", price: "$39" }
      ]
    },
    {
      name: "Marketing Strategy",
      description: "Research-backed strategies for digital growth",
      items: [
        { title: "Lead Generation Funnel Framework", price: "$49" },
        { title: "Meta Ads Performance Blueprint", price: "$59" },
        { title: "SEO Starter Kit for Small Business", price: "$39" }
      ]
    },
    {
      name: "Free Resources",
      description: "Valuable tools to help you get started",
      items: [
        { title: "Social Media Audit Template", price: "Free" },
        { title: "Creative Brief Template", price: "Free" },
        { title: "Marketing ROI Calculator", price: "Free" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-growzzy-light relative">
          <div className="bg-blob blob-1"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 fade-in-section">
                Marketing Resources
              </h1>
              <p className="text-xl text-muted-foreground mb-6 fade-in-section">
                Freebies, templates & tools to make your marketing life easier.
              </p>
              <p className="fade-in-section mb-8">
                Whether you're looking for plug-and-play social templates or full-scale strategy kits, we've curated a library to help marketers move faster and smarter.
              </p>
              <a 
                href="https://superprofile.bio/growzzymedia" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary fade-in-section group"
              >
                Visit Our SuperProfile
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">
                Our Resource Collection
              </h2>
              <p className="text-muted-foreground fade-in-section">
                All purchases and downloads are hosted on our SuperProfile
              </p>
            </div>
            
            <div className="space-y-16">
              {resourceCategories.map((category, i) => (
                <div key={i} className="fade-in-section">
                  <h3 className="text-2xl font-display font-semibold mb-3">{category.name}</h3>
                  <p className="text-muted-foreground mb-8">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, j) => (
                      <div key={j} className="service-card">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-semibold">{item.title}</h4>
                          <span className={`${item.price === 'Free' ? 'bg-growzzy-accent' : 'bg-growzzy-light'} text-growzzy-primary px-3 py-1 rounded-full text-sm font-medium`}>
                            {item.price}
                          </span>
                        </div>
                        <a 
                          href="https://superprofile.bio/growzzymedia" 
                          target="_blank"
                          rel="noreferrer"
                          className="text-growzzy-primary font-medium inline-flex items-center hover:text-growzzy-dark transition-colors mt-4"
                        >
                          View Resource <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center fade-in-section">
              <h3 className="text-2xl font-display font-semibold mb-6">Need Custom Resources?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you're looking for custom marketing materials or personalized strategies, our team can help create resources tailored to your specific needs.
              </p>
              <a href="/contact" className="btn-primary">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
