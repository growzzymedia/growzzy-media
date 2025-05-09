import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | Growzzy Media";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('All Posts');

  const blogPosts = [
    {
      id: "building-online-presence",
      title: "Building Your Business's Online Presence",
      excerpt: "In a world where digital is default, your online presence is more than just a fancy website or Instagram page. It's your business's personality, credibility, and discoverability — all rolled into one.",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Varuni Bansal",
      category: "Digital Strategy",
      content: `
        <p class="mb-4">In a world where digital is default, your online presence is more than just a fancy website or Instagram page. It's your business's personality, credibility, and discoverability — all rolled into one. But building it? That's a whole journey.</p>
        
        <p class="mb-4">Here's how to start:</p>
        
        <h3 class="text-xl font-semibold my-4">Clarity First</h3>
        <p class="mb-4">Know what you stand for and who you serve. Your brand voice, messaging, and visuals should all reflect this.</p>
        
        <h3 class="text-xl font-semibold my-4">Website > Everything Else</h3>
        <p class="mb-4">Think of your website as your digital home. Make it SEO-optimized, mobile-friendly, and conversion-focused.</p>
        
        <h3 class="text-xl font-semibold my-4">Social Media Strategy</h3>
        <p class="mb-4">Choose platforms based on where your audience hangs out. Be consistent, not just present.</p>
        
        <h3 class="text-xl font-semibold my-4">Content is Currency</h3>
        <p class="mb-4">Blog posts, reels, newsletters — the more value you offer, the more trust you build.</p>
        
        <h3 class="text-xl font-semibold my-4">Google My Business + Listings</h3>
        <p class="mb-4">Don't sleep on local SEO. GMB is your best friend for foot traffic and credibility.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Your online presence doesn't need to be perfect on day one. It needs to be intentional, authentic, and constantly evolving.</p>
      `
    },
    {
      id: "our-glow-up-story",
      title: "Our Glow-Up Story: How Growzzy Media Became That Digital Marketing Agency",
      excerpt: "We didn't start with a full team, fancy tools, or massive retainers. We started with a Canva free account, one client who took a chance, and a Wi-Fi connection that worked 60% of the time.",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Company Story",
      content: `
        <p class="mb-4">We didn't start with a full team, fancy tools, or massive retainers. We started with a Canva free account, one client who took a chance, and a Wi-Fi connection that worked 60% of the time.</p>
        
        <p class="mb-4">Then came the glow-up.</p>
        
        <h3 class="text-xl font-semibold my-4">The Learning Curve</h3>
        <p class="mb-4">We learned (the hard way) how to run ads that actually convert.</p>
        <p class="mb-4">We figured out SEO isn't just keywords — it's strategy.</p>
        <p class="mb-4">We stopped saying yes to everyone and niched down.</p>
        <p class="mb-4">We made mistakes, lost sleep, and sometimes even lost confidence.</p>
        
        <p class="mb-4">But we stayed real. Every brand we helped grow became proof we were doing something right.</p>
        
        <h3 class="text-xl font-semibold my-4">Today?</h3>
        <p class="mb-4">We're a team that breathes digital. From ghostwriting for LinkedIn influencers to managing multi-channel ad funnels — we've evolved into a full-stack agency with heart.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Moral of the story: You don't have to start perfect. You just have to start. And stay obsessed with learning.</p>
      `
    },
    {
      id: "beginners-guide-to-seo",
      title: "Beginner's Guide to SEO",
      excerpt: "Search Engine Optimization is how you show up when someone Googles 'best [your service] near me.' It's how you get found organically, without paying for ads.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1572573089284-38d13a9e973e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Varuni Bansal",
      category: "SEO",
      content: `
        <h3 class="text-xl font-semibold my-4">What even is SEO?</h3>
        <p class="mb-4">Search Engine Optimization is how you show up when someone Googles "best [your service] near me." It's how you get found organically, without paying for ads.</p>
        
        <p class="mb-4">The basics:</p>
        
        <h4 class="text-lg font-semibold my-3">On-page SEO</h4>
        <p class="mb-4">Headlines, keywords, and meta descriptions. These help Google "read" your content.</p>
        
        <h4 class="text-lg font-semibold my-3">Technical SEO</h4>
        <p class="mb-4">Site speed, mobile-friendliness, clean URLs. If your site loads like it's stuck in 2005, that's a problem.</p>
        
        <h4 class="text-lg font-semibold my-3">Off-page SEO</h4>
        <p class="mb-4">Backlinks from reputable sites. Think of them as "votes of confidence" for your content.</p>
        
        <h4 class="text-lg font-semibold my-3">Content is (still) king</h4>
        <p class="mb-4">Write blogs that answer real questions. Optimize them with relevant keywords.</p>
        
        <h3 class="text-xl font-semibold my-4">Tools to explore:</h3>
        <p class="mb-4">Google Search Console, Ubersuggest, Ahrefs (if you're fancy), and Yoast (for WordPress).</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Quick tip: Don't keyword-stuff. You're writing for humans first, algorithms second.</p>
      `
    },
    {
      id: "marketing-trends-2025",
      title: "The Top Marketing Trends You Can't Afford to Ignore in 2025",
      excerpt: "From AI tools to community-led growth and the evolution of search behavior, here's what's shaping digital marketing in 2025.",
      date: "April 3, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Marketing Trends",
      content: `
        <h3 class="text-xl font-semibold my-4">1. AI Everywhere</h3>
        <p class="mb-4">From copywriting to customer service — AI tools are not a threat, but a tool. Use them to scale smarter.</p>
        
        <h3 class="text-xl font-semibold my-4">2. Search is Changing</h3>
        <p class="mb-4">People now search on Instagram, TikTok, and even Reddit. Think beyond Google — optimize content where your audience searches.</p>
        
        <h3 class="text-xl font-semibold my-4">3. Personal Branding > Business Pages</h3>
        <p class="mb-4">Founders are becoming influencers. People want to hear from humans, not logos.</p>
        
        <h3 class="text-xl font-semibold my-4">4. Community-Led Growth</h3>
        <p class="mb-4">Private groups, Discord servers, and exclusive newsletters are where loyalty is built.</p>
        
        <h3 class="text-xl font-semibold my-4">5. Micro Content is Winning</h3>
        <p class="mb-4">60-second videos, carousels, stories — if your content can't hold attention in 3 seconds, it's gone.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Final word: 2025 isn't about doing everything. It's about doing the right things, consistently, and building genuine relationships with your audience.</p>
      `
    }
  ];

  const categories = ['All Posts', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = filter === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

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
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`px-4 py-2 rounded-md shadow-sm transition-colors ${filter === category ? 'bg-growzzy-primary text-white' : 'bg-white hover:bg-growzzy-light border border-gray-200'}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.id}`}
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <span className="text-xs bg-growzzy-light text-growzzy-primary px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm">
                        <User className="w-4 h-4 mr-1 text-growzzy-primary" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-growzzy-primary font-medium inline-flex items-center hover:text-growzzy-dark transition-colors">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
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
