
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Your Business's Online Presence",
      excerpt: "In a world where digital is default, your online presence is more than just a fancy website or Instagram page. It's your business's personality, credibility, and discoverability.",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "/blog/building-online-presence"
    },
    {
      title: "Our Glow-Up Story: How Growzzy Media Became That Digital Marketing Agency",
      excerpt: "We didn't start with a full team, fancy tools, or massive retainers. We started with a Canva free account, one client who took a chance, and a Wi-Fi connection that worked 60% of the time.",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      url: "/blog/our-glow-up-story"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-growzzy-gray">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Behind the Campaigns</h2>
          <p className="text-muted-foreground fade-in-section" data-delay="0.1">
            Read stories from the field, marketing experiments, LinkedIn tips, and BTS from our agency journey.
            We keep it real. No fluff. All growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.url}
              className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
              data-delay={`${0.2 + index * 0.1}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="text-growzzy-primary font-medium inline-flex items-center hover:text-growzzy-dark transition-colors">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center fade-in-section" data-delay="0.4">
          <Link to="/blog" className="btn-primary inline-flex items-center group">
            Read More Blogs
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Explore our full collection of marketing insights and strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
