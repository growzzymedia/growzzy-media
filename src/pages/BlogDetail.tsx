
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample blog posts data (in a real application, this would come from an API)
  const blogPosts = [
    {
      id: "linkedin-strategies",
      title: "5 LinkedIn Strategies That Actually Worked in 2025",
      excerpt: "We analyzed 100+ campaigns to find what's actually working now. In this article, we break down the exact strategies that are generating results.",
      date: "May 1, 2025",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Varuni Bansal",
      category: "LinkedIn",
      content: `
        <p class="mb-4">LinkedIn has transformed from a simple job-hunting platform to one of the most powerful B2B marketing channels available today. However, what worked just a year ago is already becoming less effective as the algorithm evolves.</p>
        
        <p class="mb-4">After analyzing over 100 campaigns for our clients in 2025, we've identified the strategies that are actually driving real engagement and business results.</p>
        
        <h3 class="text-xl font-semibold my-4">1. Authentic Video Storytelling</h3>
        
        <p class="mb-4">The days of polished, corporate videos are over. Our highest-performing content has been authentic, single-person videos that share genuine stories and insights. The key is creating content that feels like a one-to-one conversation rather than a broadcast.</p>
        
        <h3 class="text-xl font-semibold my-4">2. Strategic Comment Engagement</h3>
        
        <p class="mb-4">Rather than trying to be everywhere, we've found focusing on becoming a regular, thoughtful commenter on 5-10 strategic accounts yields far better results than random engagement. This focused approach helps build genuine relationships that later convert to business opportunities.</p>
        
        <h3 class="text-xl font-semibold my-4">3. The "Document, Don't Create" Approach</h3>
        
        <p class="mb-4">Content that shares real experiences and lessons outperforms theoretical advice by a significant margin. Our clients who share their day-to-day journey, complete with challenges and failures, consistently see higher engagement rates.</p>
        
        <h3 class="text-xl font-semibold my-4">4. Data-Driven Storytelling</h3>
        
        <p class="mb-4">Posts that combine personal narrative with unique data points get 3x more engagement. The LinkedIn algorithm favors content that offers genuine insight backed by evidence.</p>
        
        <h3 class="text-xl font-semibold my-4">5. Consistency Over Frequency</h3>
        
        <p class="mb-4">Our analysis shows that consistent posting (2-3 times per week) outperforms daily posting in terms of meaningful engagement and business results. Quality truly beats quantity on today's LinkedIn.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Want to implement these strategies for your business? Get in touch to learn how we can help optimize your LinkedIn presence.</p>
      `
    },
    {
      id: "google-ads-mistakes",
      title: "Why Most Google Ads Campaigns Fail (And How to Fix It)",
      excerpt: "Common mistakes we've seen after managing $2M+ in ad spend and the exact steps we take to turn underperforming campaigns around.",
      date: "April 23, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Paid Ads",
      content: `
        <p class="mb-4">After managing over $2 million in Google Ads spend across various industries, we've identified patterns in why so many campaigns underperform or fail completely.</p>
        
        <p class="mb-4">If you're not seeing the results you expected from your Google Ads investment, you might be making one of these common mistakes:</p>
        
        <h3 class="text-xl font-semibold my-4">1. Targeting Keywords, Not Intent</h3>
        
        <p class="mb-4">Many campaigns focus on keyword volume rather than user intent. We've found that organizing campaigns around user intent journeys rather than just keywords improves conversion rates by up to 60%.</p>
        
        <h3 class="text-xl font-semibold my-4">2. Poor Landing Page Alignment</h3>
        
        <p class="mb-4">Even the best ad targeting fails when landing pages don't deliver on the ad's promise. Ensuring message match between ads and landing pages has reduced our clients' bounce rates by an average of 40%.</p>
        
        <h3 class="text-xl font-semibold my-4">3. Ignoring Quality Score</h3>
        
        <p class="mb-4">Many advertisers don't realize that improving quality scores is often more cost-effective than increasing bids. We've helped clients reduce cost-per-acquisition by 30% simply by focusing on quality score improvement.</p>
        
        <h3 class="text-xl font-semibold my-4">4. Not Leveraging AI-Driven Insights</h3>
        
        <p class="mb-4">Google's AI capabilities have evolved dramatically, but many advertisers aren't taking advantage of them. Properly configured Performance Max campaigns are showing 20% better ROAS than traditional campaign structures for many of our clients.</p>
        
        <h3 class="text-xl font-semibold my-4">5. Neglecting Conversion Tracking</h3>
        
        <p class="mb-4">Accurate conversion tracking remains the foundation of optimization, yet we regularly audit accounts with incorrect or incomplete tracking. Fixing tracking issues has immediately revealed optimization opportunities that were previously invisible.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Ready to transform your Google Ads performance? Let's audit your campaigns and identify opportunities for immediate improvement.</p>
      `
    },
    {
      id: "content-framework",
      title: "The Art of Content that Converts: Our Framework",
      excerpt: "Turn passive scrollers into active customers with this approach. We share our battle-tested content framework that works across all platforms.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Varuni Bansal",
      category: "Content Strategy",
      content: `
        <p class="mb-4">Creating content that not only engages but actually drives conversions is both an art and a science. After years of testing and refining, we've developed a framework that consistently helps our clients turn passive scrollers into active customers.</p>
        
        <h3 class="text-xl font-semibold my-4">The AEIOU Framework</h3>
        
        <p class="mb-4">Our content framework is built around five key elements:</p>
        
        <h4 class="text-lg font-semibold my-3">A - Attention</h4>
        <p class="mb-4">Every piece of content must grab attention in the first 3 seconds (for video) or first line (for text). We use pattern interrupts, surprising statements, or compelling questions to stop the scroll.</p>
        
        <h4 class="text-lg font-semibold my-3">E - Emotion</h4>
        <p class="mb-4">Content that triggers an emotional response is shared and remembered. We identify the core emotion most relevant to your offering and ensure it's woven throughout the content.</p>
        
        <h4 class="text-lg font-semibold my-3">I - Information</h4>
        <p class="mb-4">Value delivery is non-negotiable. Every piece provides genuinely useful information that positions your brand as a helpful authority rather than just a seller.</p>
        
        <h4 class="text-lg font-semibold my-3">O - Objection Handling</h4>
        <p class="mb-4">Great content anticipates and addresses potential objections before they become roadblocks to conversion. This builds trust and removes friction from the buyer's journey.</p>
        
        <h4 class="text-lg font-semibold my-3">U - Urgency</h4>
        <p class="mb-4">Every piece of content should include a reason to act now rather than later, whether that's through limited-time offers, scarcity, or simply highlighting the cost of delay.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Want to implement this framework for your content strategy? Contact us to discuss how we can help transform your content from merely engaging to actively converting.</p>
      `
    },
    {
      id: "ecommerce-case-study",
      title: "Behind the Scenes: How We Tripled an E-commerce Brand's ROAS",
      excerpt: "A detailed case study of how we restructured a struggling ad account and implemented a new strategy that delivered exceptional results.",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1553531384-cc64c863e30d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Case Study",
      content: `
        <p class="mb-4">When a fashion e-commerce brand came to us with a struggling ad account and diminishing returns, they were spending $15,000 per month with a ROAS of just 1.2x. Here's how we transformed their results and tripled their return on ad spend in just 90 days.</p>
        
        <h3 class="text-xl font-semibold my-4">The Challenge</h3>
        
        <p class="mb-4">The brand was running generic campaigns with broad targeting, creative that wasn't standing out, and a conversion path that wasn't optimized for the customer journey. Their ad account structure made it difficult to identify which products and audiences were actually performing well.</p>
        
        <h3 class="text-xl font-semibold my-4">Our Approach</h3>
        
        <h4 class="text-lg font-semibold my-3">1. Account Restructuring</h4>
        <p class="mb-4">We completely rebuilt the account structure around customer intent and product categories, allowing for much more precise optimization. This also gave us clearer data on which products deserved more budget allocation.</p>
        
        <h4 class="text-lg font-semibold my-3">2. Advanced Audience Segmentation</h4>
        <p class="mb-4">Instead of broad targeting, we created detailed customer personas based on purchase behavior and engagement patterns. This allowed us to create highly relevant ad experiences for each segment.</p>
        
        <h4 class="text-lg font-semibold my-3">3. Creative Overhaul</h4>
        <p class="mb-4">We developed a distinctive visual language for the brand's ads that stood out in crowded feeds. By focusing on lifestyle imagery that highlighted the emotional benefits of the products, we saw click-through rates increase by 40%.</p>
        
        <h4 class="text-lg font-semibold my-3">4. Landing Page Optimization</h4>
        <p class="mb-4">We created dedicated landing pages for key product categories that were specifically designed to continue the story started in the ads, resulting in a 25% improvement in landing page conversion rate.</p>
        
        <h3 class="text-xl font-semibold my-4">The Results</h3>
        
        <p class="mb-4">Within 90 days, we achieved:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>ROAS increase from 1.2x to 3.8x</li>
          <li>45% reduction in cost per acquisition</li>
          <li>28% increase in average order value</li>
          <li>190% increase in total revenue from ads</li>
        </ul>
        
        <p class="mt-6 text-growzzy-primary font-medium">Want similar results for your e-commerce store? Contact us for a free strategy session to explore how we can transform your ad performance.</p>
      `
    },
    {
      id: "website-conversion",
      title: "Website Conversion Optimization: Small Changes, Big Impact",
      excerpt: "Learn about the subtle design and UX changes that significantly increased conversion rates for our clients.",
      date: "March 30, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Varuni Bansal",
      category: "Website Design",
      content: `
        <p class="mb-4">When it comes to website conversion optimization, sometimes the smallest changes make the biggest difference. Over the past year, we've run dozens of optimization experiments for our clients, and we've consistently found that subtle adjustments can lead to dramatic improvements in conversion rates.</p>
        
        <h3 class="text-xl font-semibold my-4">Key Changes That Drove Results</h3>
        
        <h4 class="text-lg font-semibold my-3">1. Button Text Optimization</h4>
        <p class="mb-4">Changing a button from "Submit" to "Get My Free Quote" increased click-through rates by 34% for a financial services client. The specificity and value-focus of the new text made the action more appealing.</p>
        
        <h4 class="text-lg font-semibold my-3">2. Form Field Reduction</h4>
        <p class="mb-4">For a B2B client, reducing their lead form from 9 fields to just 4 essential ones resulted in a 56% increase in form completions without any meaningful decrease in lead quality.</p>
        
        <h4 class="text-lg font-semibold my-3">3. Social Proof Positioning</h4>
        <p class="mb-4">Moving testimonials from a separate page to strategically placed spots throughout the conversion funnel increased conversion rates by 18% for an e-commerce client.</p>
        
        <h4 class="text-lg font-semibold my-3">4. Mobile Navigation Simplification</h4>
        <p class="mb-4">Redesigning a client's mobile menu to prioritize the top 3 user journeys resulted in a 23% increase in mobile conversion rate as users could more easily find what they were looking for.</p>
        
        <h4 class="text-lg font-semibold my-3">5. Strategic White Space</h4>
        <p class="mb-4">Adding more breathing room around key call-to-action elements increased click rates by 20% for a SaaS client. The visual hierarchy became clearer, drawing more attention to conversion elements.</p>
        
        <p class="mt-6 text-growzzy-primary font-medium">Want to identify the small changes that could make a big impact on your website's conversion rate? Contact us for a conversion audit and actionable recommendations.</p>
      `
    },
    {
      id: "personal-branding",
      title: "Building Your Personal Brand: A Step-by-Step Guide",
      excerpt: "Everything you need to know about establishing yourself as a thought leader in your industry through strategic content and positioning.",
      date: "March 22, 2025",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Mayank Goel",
      category: "Personal Branding",
      content: `
        <p class="mb-4">Personal branding has evolved from a nice-to-have to an essential professional asset. Whether you're an entrepreneur, executive, or professional looking to advance your career, strategically building your personal brand opens doors to opportunities that would otherwise remain closed.</p>
        
        <h3 class="text-xl font-semibold my-4">The 5-Step Personal Branding Framework</h3>
        
        <h4 class="text-lg font-semibold my-3">Step 1: Define Your Brand DNA</h4>
        <p class="mb-4">Before creating content or engaging online, you need clarity on your unique positioning. Answer these key questions:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>What specific expertise do you offer that others don't?</li>
          <li>What are 3-5 core topics you want to be known for?</li>
          <li>Who specifically are you trying to influence or help?</li>
          <li>What's your unique perspective or approach?</li>
        </ul>
        
        <h4 class="text-lg font-semibold my-3">Step 2: Create Your Content Strategy</h4>
        <p class="mb-4">Content is the foundation of modern personal branding. Develop a sustainable content strategy by:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>Choosing 1-2 primary platforms (don't try to be everywhere)</li>
          <li>Developing content pillars around your core topics</li>
          <li>Creating a realistic content calendar you can stick to</li>
          <li>Balancing thought leadership with personal storytelling</li>
        </ul>
        
        <h4 class="text-lg font-semibold my-3">Step 3: Build Your Visual Identity</h4>
        <p class="mb-4">Consistency in your visual presence builds recognition. Focus on:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>Professional photography that reflects your brand personality</li>
          <li>Consistent color schemes and visual elements</li>
          <li>A cohesive look across all platforms</li>
          <li>Visual elements that reflect your industry but help you stand out</li>
        </ul>
        
        <h4 class="text-lg font-semibold my-3">Step 4: Strategic Networking</h4>
        <p class="mb-4">Personal brands grow faster with the right connections. Implement:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>A targeted engagement strategy with key influencers in your space</li>
          <li>Collaborative content opportunities</li>
          <li>Consistent community engagement</li>
          <li>Value-first relationship building</li>
        </ul>
        
        <h4 class="text-lg font-semibold my-3">Step 5: Create Your Opportunity Flywheel</h4>
        <p class="mb-4">Convert your growing influence into real opportunities:</p>
        <ul class="list-disc pl-5 mb-4">
          <li>Develop a clear call-to-action strategy</li>
          <li>Create a system for capturing opportunities</li>
          <li>Build authority accelerators (podcasts, speaking, books, etc.)</li>
          <li>Regularly reassess and refine your strategy based on results</li>
        </ul>
        
        <p class="mt-6 text-growzzy-primary font-medium">Want help implementing this framework for your personal brand? We specialize in helping executives and entrepreneurs build influential personal brands. Contact us to discuss your goals.</p>
      `
    }
  ];

  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Growzzy Media Blog`;
    } else {
      document.title = "Blog Post Not Found | Growzzy Media";
    }
    window.scrollTo(0, 0);
  }, [post]);
  
  // Related posts based on category (excluding current post)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-growzzy-light relative overflow-hidden">
          <div className="bg-blob blob-1 animate-float"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-growzzy-primary hover:text-growzzy-dark mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 fade-in-section">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-growzzy-primary" />
                  <span>{post.date}</span>
                </div>
                
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1 text-growzzy-primary" />
                  <span>{post.author}</span>
                </div>
                
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1 text-growzzy-primary" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container -mt-16 mb-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl fade-in-section" data-delay="0.1">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto fade-in-section" data-delay="0.2">
              <div 
                className="prose lg:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-growzzy-primary/10 flex items-center justify-center text-growzzy-primary mr-4">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Co-Founder, Growzzy Media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-growzzy-light">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center fade-in-section">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={index}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-white rounded-lg overflow-hidden shadow card-hover fade-in-section group"
                    data-delay={`${0.1 + index * 0.1}`}
                  >
                    <div className="overflow-hidden">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs bg-growzzy-light text-growzzy-primary px-2 py-1 rounded-full mb-2 inline-block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-growzzy-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <span className="text-growzzy-primary font-medium inline-flex items-center">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link to="/blog" className="btn-primary inline-flex items-center">
                  See All Articles <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto text-center fade-in-section">
              <h2 className="text-3xl font-display font-semibold mb-4">Ready to grow your business?</h2>
              <p className="text-lg mb-8">
                Let's discuss how we can help your business achieve remarkable growth with our AI-powered digital solutions.
              </p>
              <Link to="/connect" className="btn-primary inline-flex items-center">
                Let's Connect <ArrowRight className="ml-2 w-5 h-5" />
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

export default BlogDetail;
