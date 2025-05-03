
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { ExternalLink } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "5 LinkedIn Strategies That Actually Worked in 2025",
      excerpt: "We analyzed 100+ campaigns to find what's actually working now. In this article, we break down the exact strategies that are generating results.",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://www.notion.so/growzzy/linkedin-strategies",
      category: "LinkedIn"
    },
    {
      title: "Why Most Google Ads Campaigns Fail (And How to Fix It)",
      excerpt: "Common mistakes we've seen after managing $2M+ in ad spend and the exact steps we take to turn underperforming campaigns around.",
      date: "April 23, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://www.notion.so/growzzy/google-ads-mistakes",
      category: "Paid Ads"
    },
    {
      title: "The Art of Content that Converts: Our Framework",
      excerpt: "Turn passive scrollers into active customers with this approach. We share our battle-tested content framework that works across all platforms.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://www.notion.so/growzzy/content-framework",
      category: "Content Strategy"
    },
    {
      title: "Behind the Scenes: How We Tripled an E-commerce Brand's ROAS",
      excerpt: "A detailed case study of how we restructured a struggling ad account and implemented a new strategy that delivered exceptional results.",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1553531384-cc64c863e30d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://www.notion.so/growzzy/ecommerce-case-study",
      category: "Case Study"
    },
    {
      title: "Website Conversion Optimization: Small Changes, Big Impact",
      excerpt: "Learn about the subtle design and UX changes that significantly increased conversion rates for our clients.",
      date: "March 30, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://www.notion.so/growzzy/website-conversion",
      category: "Website Design"
    },
    {
      title: "Building Your Personal Brand: A Step-by-Step Guide",
      excerpt: "Everything you need to know about establishing yourself as a thought leader in your industry through strategic content and positioning.",
      date: "March 22, 2025",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "https://www.notion.so/growzzy/personal-branding",
      category: "Personal Branding"
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

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
                Behind the <span className="text-growzzy-primary">Campaigns</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 fade-in-section" data-delay="0.2">
                Read stories from the field, marketing experiments, LinkedIn tips, and BTS from our agency journey.
                We keep it real. No fluff. All growth.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="px-4 py-2 bg-growzzy-primary text-white rounded-md shadow-sm">
                All Posts
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
                  data-delay={`${0.1 + index * 0.1}`}
                >
                  <div className="overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-xs bg-growzzy-light text-growzzy-primary px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <span className="text-growzzy-primary font-medium inline-flex items-center hover:text-growzzy-dark transition-colors">
                      Read Article <ExternalLink className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-24 bg-growzzy-gray">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-3xl mx-auto fade-in-section">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Get marketing insights delivered</h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter for exclusive marketing tips, case studies, and industry insights.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-growzzy-primary"
                    required
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

export default BlogPage;
