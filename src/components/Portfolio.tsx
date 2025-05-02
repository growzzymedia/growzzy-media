
import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Growth Campaign",
      category: "Paid Advertising",
      metrics: "3.2x ROAS, 45% increase in conversion rate",
      image: "https://images.unsplash.com/photo-1553531384-cc64c863e30d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SaaS Brand Redesign",
      category: "Website Development",
      metrics: "68% increase in lead generation, 2.1x demo bookings",
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LinkedIn Thought Leadership",
      category: "LinkedIn Management",
      metrics: "10x profile growth, 24 speaking opportunities secured",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Our Work</h2>
          <p className="text-xl font-medium mb-2 fade-in-section">Real brands. Real results.</p>
          <p className="text-muted-foreground fade-in-section">
            Scroll through our favourite success stories — campaigns that tripled reach, brands that blew up, and websites that made waves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="text-sm text-growzzy-primary font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.metrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
