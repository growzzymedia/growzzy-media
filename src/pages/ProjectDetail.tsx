
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { ArrowLeft, BarChart3, Users, Target, CheckCircle2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{id: string}>();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const getProject = () => {
      // Sample portfolio data
      const portfolioItems = [
        {
          id: "ecommerce-growth",
          title: "E-commerce Growth Campaign",
          category: "Paid Advertising",
          metrics: "3.2x ROAS, 45% increase in conversion rate",
          image: "https://images.unsplash.com/photo-1553531384-cc64c863e30d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "FashionCo",
          description: "A comprehensive Meta & Google ads campaign that transformed an e-commerce store's revenue.",
          challenge: "FashionCo was struggling with high ad spend and low return on investment. Their previous campaigns had poor targeting, resulting in wasted budget and minimal sales.",
          solution: "We rebuilt their campaign structure from scratch, focusing on high-intent audiences and creating more compelling ad creative. We implemented advanced tracking to optimize for purchase value rather than just clicks.",
          results: [
            "3.2x increase in Return On Ad Spend (ROAS)",
            "45% higher conversion rates across all campaigns",
            "28% reduction in customer acquisition cost",
            "114% increase in monthly revenue from paid channels"
          ],
          testimonial: {
            quote: "The Growzzy Media team transformed our digital marketing. We're reaching the right customers and seeing real results in our bottom line.",
            name: "Sarah Johnson",
            position: "Marketing Director, FashionCo"
          }
        },
        {
          id: "saas-brand",
          title: "SaaS Brand Redesign",
          category: "Website Development",
          metrics: "68% increase in lead generation, 2.1x demo bookings",
          image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "CloudSync",
          description: "Complete rebrand and website overhaul for a growing SaaS company targeting enterprise clients.",
          challenge: "CloudSync had a dated website that didn't reflect their innovative product. The site had poor conversion paths, unclear messaging, and wasn't optimized for lead generation.",
          solution: "We developed a complete brand identity refresh and built a new website focused on clear value propositions, testimonials, and strategic call-to-actions. The site included interactive elements and improved user experience.",
          results: [
            "68% increase in lead form submissions",
            "2.1x more demo bookings per month",
            "52% lower bounce rate on key landing pages",
            "3.7x improvement in site speed metrics"
          ],
          testimonial: {
            quote: "Our new website has completely transformed how prospects perceive our brand. The strategic design choices have measurably improved our conversion rates.",
            name: "Michael Chen",
            position: "CEO, CloudSync"
          }
        },
        {
          id: "linkedin-campaign",
          title: "LinkedIn Thought Leadership",
          category: "LinkedIn Management",
          metrics: "10x profile growth, 24 speaking opportunities secured",
          image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Executive Coach",
          description: "Personal branding and content strategy for a C-suite executive building their consulting practice.",
          challenge: "Our client, a former Fortune 500 executive, wanted to build a consulting practice but had limited visibility online and no content strategy to demonstrate expertise.",
          solution: "We developed a comprehensive LinkedIn strategy involving profile optimization, strategic content planning, ghost-written articles, and engagement tactics to build visibility in target industries.",
          results: [
            "10x growth in LinkedIn followers over 8 months",
            "24 speaking opportunities at industry conferences",
            "Featured in 5 major industry publications",
            "Generated 37 high-value client leads directly through LinkedIn"
          ],
          testimonial: {
            quote: "Growzzy Media's LinkedIn strategy completely transformed my professional brand. I'm now seen as a thought leader in my field and have more client inquiries than I can handle.",
            name: "Robert Taylor",
            position: "Executive Coach & Consultant"
          }
        },
        {
          id: "social-media-growth",
          title: "Instagram Growth Strategy",
          category: "Organic Social Growth",
          metrics: "5x follower increase, 300% engagement rate improvement",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Wellness Brand",
          description: "Organic growth strategy for a wellness brand looking to build community and drive product sales.",
          challenge: "The wellness brand had a stagnant social media presence with inconsistent posting and low engagement despite having quality products with positive customer feedback.",
          solution: "We implemented a cohesive content strategy with branded templates, user-generated content campaigns, influencer partnerships, and community-building tactics to increase visibility and engagement.",
          results: [
            "5x increase in Instagram followers in 6 months",
            "300% higher engagement on posts",
            "78% growth in website traffic from social channels",
            "42% of new customers reported discovering the brand through Instagram"
          ],
          testimonial: {
            quote: "The transformation of our social media presence has been remarkable. Growzzy Media helped us find our authentic voice and build a community that truly resonates with our brand values.",
            name: "Emma Rodriguez",
            position: "Founder, Wellness Brand"
          }
        },
        {
          id: "lead-generation",
          title: "B2B Lead Generation",
          category: "Custom Online Solutions",
          metrics: "126 qualified leads, $450k pipeline value",
          image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Consulting Firm",
          description: "Multi-channel lead generation campaign combining LinkedIn, email marketing, and retargeting.",
          challenge: "Our client needed to generate high-quality B2B leads for their consulting services but struggled with expensive, poor-quality leads from their existing channels.",
          solution: "We created an integrated approach using LinkedIn advertising, content marketing, email nurture sequences, and retargeting to identify and convert high-value prospects.",
          results: [
            "126 qualified leads generated in the first quarter",
            "Approximately $450k in pipeline value created",
            "35% reduction in cost per qualified lead",
            "18 closed deals directly attributed to the campaign"
          ],
          testimonial: {
            quote: "The lead generation strategy developed by Growzzy Media completely transformed our business development process. The quality of leads and conversion rates exceeded all our expectations.",
            name: "David Powell",
            position: "Managing Partner, Consulting Firm"
          }
        },
        {
          id: "video-campaign",
          title: "Video Marketing Series",
          category: "Content Production",
          metrics: "250k views, 3.7% conversion rate",
          image: "https://images.unsplash.com/photo-1574717024453-e0244203aff1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "EdTech Platform",
          description: "Educational video series that positioned our client as the industry leader in their field.",
          challenge: "The EdTech platform needed to establish credibility in a competitive market and drive sign-ups for their online courses but lacked compelling content to showcase their expertise.",
          solution: "We developed a 10-part educational video series that demonstrated the platform's unique teaching methodology while providing valuable free content to attract their target audience.",
          results: [
            "Over 250k views across all videos",
            "3.7% conversion rate from viewer to free trial",
            "85% increase in brand search volume",
            "Featured on 3 major education resource websites"
          ],
          testimonial: {
            quote: "The video series Growzzy Media created for us has become our most effective marketing asset. The quality and strategy behind the content has positioned us as authorities in our field.",
            name: "Jennifer Lee",
            position: "Marketing VP, EdTech Platform"
          }
        }
      ];
      
      const foundProject = portfolioItems.find(item => item.id === id);
      setProject(foundProject);
      
      if (foundProject) {
        document.title = `${foundProject.title} | Growzzy Media Portfolio`;
      } else {
        document.title = "Project Not Found | Growzzy Media";
      }
    };
    
    getProject();
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
              <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
              <Link to="/portfolio" className="btn-primary">
                Back to Portfolio
              </Link>
            </div>
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
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-growzzy-light relative overflow-hidden">
          <div className="bg-blob blob-1 animate-float"></div>
          
          <div className="container relative z-10">
            <Link to="/portfolio" className="inline-flex items-center text-growzzy-primary mb-8 hover:underline">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-section">
                <div className="text-sm text-growzzy-primary font-medium mb-3">{project.category}</div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white px-4 py-2 rounded-md shadow-sm">
                    <span className="text-sm text-muted-foreground">Client</span>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-md shadow-sm">
                    <span className="text-sm text-muted-foreground">Service</span>
                    <p className="font-medium">{project.category}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm inline-block">
                  <div className="text-growzzy-primary font-bold text-lg">Key Results</div>
                  <div className="font-medium">{project.metrics}</div>
                </div>
              </div>
              <div className="fade-in-section" data-delay="0.3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Challenge */}
                <div className="mb-12 fade-in-section">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center">
                    <Target className="w-8 h-8 mr-3 text-growzzy-primary" />
                    The Challenge
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow">
                    <p className="text-lg">{project.challenge}</p>
                  </div>
                </div>
                
                {/* Solution */}
                <div className="mb-12 fade-in-section" data-delay="0.2">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center">
                    <CheckCircle2 className="w-8 h-8 mr-3 text-growzzy-primary" />
                    Our Solution
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow">
                    <p className="text-lg">{project.solution}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 fade-in-section" data-delay="0.3">
                {/* Results */}
                <div className="bg-white p-8 rounded-lg shadow-lg sticky top-32">
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                    <BarChart3 className="w-7 h-7 mr-3 text-growzzy-primary" />
                    The Results
                  </h2>
                  <ul className="space-y-4">
                    {project.results.map((result: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-4 h-4 bg-growzzy-primary rounded-full flex-shrink-0 mt-1 mr-3"></span>
                        <span className="text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-16 fade-in-section" data-delay="0.4">
              <div className="bg-growzzy-light p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto">
                <div className="text-4xl text-growzzy-primary mb-6">"</div>
                <blockquote className="text-xl md:text-2xl mb-6 italic">
                  {project.testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-growzzy-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {project.testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{project.testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-growzzy-gray">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-6 fade-in-section">
                Ready to see similar results for your business?
              </h2>
              <p className="text-lg mb-8 fade-in-section" data-delay="0.1">
                Let's discuss how we can help you achieve your marketing goals with a tailored strategy.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center fade-in-section" data-delay="0.2">
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

export default ProjectDetail;
