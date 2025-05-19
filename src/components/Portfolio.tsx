
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: "humara-pandit",
      title: "Humara Pandit – Faith Meets Performance Marketing",
      category: "Ads Management | Meta + Google",
      metrics: "25% ROAS growth in just 3 months",
      image: "https://images.unsplash.com/photo-1614107707379-283a65f5b1d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "claysip",
      title: "ClaySip – Crafting an Online Identity from Clay",
      category: "Brand Building + Website + Organic Reach",
      metrics: "50,000+ impressions in 2 months (80% organic reach)",
      image: "https://images.unsplash.com/photo-1509527855516-5ab203a0a0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "polki-sarees",
      title: "Polki Sarees – Reviving the Saree, One Reel at a Time",
      category: "Organic Social Growth | Reels Strategy",
      metrics: "8 million+ views, 100% organically",
      image: "https://images.unsplash.com/photo-1619411281075-8272e104115e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Our Work</h2>
          <p className="text-xl font-medium mb-2 fade-in-section" data-delay="0.1">Real brands. Real results.</p>
          <p className="text-muted-foreground fade-in-section" data-delay="0.2">
            Scroll through our favourite success stories — campaigns that tripled reach, brands that blew up, and websites that made waves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link 
              key={index} 
              to={`/portfolio/${item.id}`}
              className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
              data-delay={`${0.2 + index * 0.1}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-growzzy-primary font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.metrics}</p>
                <div className="mt-4 text-growzzy-primary font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section" data-delay="0.6">
          <Link to="/portfolio" className="btn-primary inline-flex items-center group">
            See Full Portfolio
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
