
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Our Work | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);
  
  // Sample portfolio data - in a real scenario, this would come from an API or CMS
  const portfolioItems = [
    {
      id: "ecommerce-growth",
      title: "E-commerce Growth Campaign",
      category: "Paid Advertising",
      metrics: "3.2x ROAS, 45% increase in conversion rate",
      image: "https://images.unsplash.com/photo-1553531384-cc64c863e30d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      client: "FashionCo",
      description: "A comprehensive Meta & Google ads campaign that transformed an e-commerce store's revenue."
    },
    {
      id: "saas-brand",
      title: "SaaS Brand Redesign",
      category: "Website Development",
      metrics: "68% increase in lead generation, 2.1x demo bookings",
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      client: "CloudSync",
      description: "Complete rebrand and website overhaul for a growing SaaS company targeting enterprise clients."
    },
    {
      id: "linkedin-campaign",
      title: "LinkedIn Thought Leadership",
      category: "LinkedIn Management",
      metrics: "10x profile growth, 24 speaking opportunities secured",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      client: "Executive Coach",
      description: "Personal branding and content strategy for a C-suite executive building their consulting practice."
    },
    {
      id: "social-media-growth",
      title: "Instagram Growth Strategy",
      category: "Organic Social Growth",
      metrics: "5x follower increase, 300% engagement rate improvement",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      client: "Wellness Brand",
      description: "Organic growth strategy for a wellness brand looking to build community and drive product sales."
    },
    {
      id: "lead-generation",
      title: "B2B Lead Generation",
      category: "Custom Online Solutions",
      metrics: "126 qualified leads, $450k pipeline value",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      client: "Consulting Firm",
      description: "Multi-channel lead generation campaign combining LinkedIn, email marketing, and retargeting."
    },
    {
      id: "video-campaign",
      title: "Video Marketing Series",
      category: "Content Production",
      metrics: "250k views, 3.7% conversion rate",
      image: "https://images.unsplash.com/photo-1574717024453-e0244203aff1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      client: "EdTech Platform",
      description: "Educational video series that positioned our client as the industry leader in their field."
    }
  ];

  // Group projects by category for better organization
  const categories = [...new Set(portfolioItems.map(item => item.category))];

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
                Our <span className="text-growzzy-primary">Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Real brands. Real results. Browse our portfolio of successful campaigns and projects.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="px-4 py-2 bg-growzzy-primary text-white rounded-md shadow-sm">
                All Projects
              </button>
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className="px-4 py-2 bg-white hover:bg-growzzy-light transition-colors border border-gray-200 rounded-md shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={`/portfolio/${item.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
                  data-delay={`${0.1 + index * 0.1}`}
                >
                  <div className="overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-growzzy-primary font-medium mb-2">{item.category}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.metrics}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Client: {item.client}</span>
                      <div className="text-growzzy-primary font-medium inline-flex items-center">
                        View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-light">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to be our next success story?</h2>
              <p className="text-lg mb-8">
                Let's discuss how we can help your business achieve similar results with a custom digital strategy.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start Your Project
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

export default PortfolioPage;
