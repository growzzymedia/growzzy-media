
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 LinkedIn Strategies That Actually Worked in 2025",
      excerpt: "We analyzed 100+ campaigns to find what's actually working now.",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Why Most Google Ads Campaigns Fail (And How to Fix It)",
      excerpt: "Common mistakes we've seen after managing $2M+ in ad spend.",
      date: "April 23, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Art of Content that Converts: Our Framework",
      excerpt: "Turn passive scrollers into active customers with this approach.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-growzzy-gray">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Behind the Campaigns</h2>
          <p className="text-muted-foreground fade-in-section">
            Read stories from the field, marketing experiments, LinkedIn tips, and BTS from our agency journey.
            We keep it real. No fluff. All growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <a href="#" className="text-growzzy-primary font-medium inline-flex items-center hover:text-growzzy-dark transition-colors">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
