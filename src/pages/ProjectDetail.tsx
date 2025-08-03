import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import { 
  ArrowLeft, 
  BarChart3, 
  Users, 
  Target, 
  CheckCircle2, 
  TrendingUp, 
  Link as LinkIcon,
  ChartBar
} from 'lucide-react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '../components/ui/chart';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

const ProjectDetail = () => {
  const { id } = useParams<{id: string}>();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const getProject = () => {
      // Sample portfolio data
      const portfolioItems = [
        {
          id: "hitfit-health",
          title: "HitFit Health – Local Lead Generation via Meta Ads",
          category: "Meta Ads | Healthcare Marketing | Lead Generation",
          metrics: "300 leads generated in a single month at ₹33/lead",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "HitFit Health",
          description: "Modern multi-specialty healthcare platform offering surgery coordination, insurance support, and post-op recovery services.",
          challenge: "HitFit Health needed to generate high-quality medical leads in limited time windows while building localized brand awareness for surgical and consultation services. The challenge was maintaining low cost per lead while improving lead quality within a tight budget of ₹10,000/month.",
          solution: "We designed hyper-local Meta Ads campaigns targeting a 50km radius from hospital partners. Our creative direction focused on regional targeting, relatable pain points, and urgency-based callouts. We used static creatives and testimonials with real patient success stories, emphasizing affordability, insurance support, and free second opinions.",
          results: [
            "300 leads generated in a single month",
            "Average Cost per Lead: ₹33",
            "Best-performing campaign achieved ₹28/lead",
            "50+ converted patients with 60% follow-up success rate",
            "Built recurring lead pipeline for sustainable growth",
            "Enhanced trust and local brand awareness within weeks"
          ],
          chartData: [
            { name: 'Week 1', value: 45 },
            { name: 'Week 2', value: 68 },
            { name: 'Week 3', value: 92 },
            { name: 'Week 4', value: 95 }
          ],
          leadSourceData: [
            { name: 'Facebook', value: 65 },
            { name: 'Instagram', value: 35 }
          ],
          conversionData: [
            { name: 'Converted', value: 60 },
            { name: 'Follow-up Pending', value: 40 }
          ],
          website: "https://hitfithealth.in",
          testimonial: {
            quote: "Growzzy delivered exactly what we needed - quality leads at scale with minimal budget. Their understanding of healthcare marketing nuances made all the difference.",
            name: "HitFit Health Team",
            position: "Healthcare Platform"
          }
        },
        {
          id: "humara-pandit",
          title: "Humara Pandit – Faith Meets Performance Marketing",
          category: "Ads Management | Lead Generation | Brand Building",
          metrics: "CPL as low as ₹2.8 • High-quality leads consistently • Exceptional CTR and ROAS",
          image: "https://images.unsplash.com/photo-1614107707379-283a65f5b1d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Humara Pandit",
          description: "Faith-tech startup redefining how modern devotees access spiritual rituals.",
          challenge: "Humara Pandit approached us with a clear mission — they didn't just want clicks; they wanted connections. The challenge was to create ad strategies that resonated with spiritual seekers while delivering measurable results.",
          solution: "We restructured their Google and Meta ad accounts, built niche-focused audiences, and developed campaigns that blended emotion with action. Whether it was highlighting the sacredness of temple blessings or showcasing limited-edition Prasad, every creative we delivered was spiritually resonant and high-converting.",
          results: [
            "Cost Per Lead (CPL) as low as ₹2.8",
            "Generated high-quality leads consistently",
            "Executed sales campaigns with exceptional CTR and ROAS",
            "Ongoing consultations and strategic inputs led to a massive turnaround in digital performance"
          ],
          chartData: [
            { name: 'Initial ROAS', value: 100 },
            { name: 'After 3 Months', value: 125 },
            { name: 'Festival Sprint', value: 280 }
          ],
          engagementData: [
            { name: 'Regular Audience', value: 100 },
            { name: 'Spiritual Interest', value: 400 }
          ],
          website: "https://humarapandit.com/",
          testimonial: {
            quote: "It wasn't just about selling — it was about building trust in faith, digitally.",
            name: "Humara Pandit Team",
            position: "Faith-Tech Startup"
          }
        },
        {
          id: "claysip",
          title: "ClaySip – Crafting an Online Identity from Clay",
          category: "Brand Building + Website + Organic Reach",
          metrics: "50,000+ impressions in 2 months (80% organic reach)",
          image: "https://images.unsplash.com/photo-1509527855516-5ab203a0a0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "ClaySip",
          description: "Building a digital identity for handcrafted terracotta drinkware from scratch.",
          challenge: "ClaySip came to us with a dream and a product — beautifully handcrafted terracotta drinkware — but no digital identity. The challenge was to build an entire brand from scratch in just 60 days.",
          solution: "From naming the brand to logo design, packaging, setting up the e-commerce website, and launching social media, we captured the essence of tradition with a modern twist. Our earthy-toned visuals and storytelling-focused captions helped the brand connect with audiences looking for sustainability and authenticity.",
          results: [
            "Website launched in 3 weeks with full catalog and checkout",
            "Professional product shoot + creatives for social + ads",
            "50,000+ impressions in 2 months (with 80% organic reach)",
            "Audience resonated with stories behind each piece — 'From Mud to Mug'"
          ],
          chartData: [
            { name: 'Organic Reach', value: 40000 },
            { name: 'Paid Reach', value: 10000 }
          ],
          timelineData: [
            { name: 'Week 1', value: 'Branding & Strategy' },
            { name: 'Week 2', value: 'Product Shoot' },
            { name: 'Week 3', value: 'Website Launch' },
            { name: 'Week 6', value: 'Social Media Setup' },
            { name: 'Week 8', value: '50k Impressions' }
          ],
          website: "https://claysip.com/ | @clay_sip",
          social: "https://www.instagram.com/clay_sip/",
          testimonial: {
            quote: "We built trust with every sip, one story at a time.",
            name: "ClaySip Founders",
            position: "Sustainable Drinkware Brand"
          }
        },
        {
          id: "polki-sarees",
          title: "Polki Sarees – Reviving the Saree, One Reel at a Time",
          category: "Organic Social Growth | Reels Strategy",
          metrics: "8 million+ views, 100% organically",
          image: "https://images.unsplash.com/photo-1619411281075-8272e104115e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Polki Sarees",
          description: "D2C brand founded by women for women, driving awareness through organic content.",
          challenge: "Polki Sarees, a D2C brand founded by women for women, had a powerful product but minimal reach — just 2,000 followers on Instagram. Our goal was to drive awareness and emotion around the everyday saree, using only organic content.",
          solution: "We leaned into relatable reels — grandma's wardrobe stories, nostalgia around first sarees, the pride in draping tradition daily. Each reel struck a chord with the audience and created an emotional connection to the brand.",
          results: [
            "8 million+ views, 100% organically",
            "Instagram reach 20x in 4 months",
            "Dozens of viral reels shared by fashion & culture pages",
            "Conversions began to flow — with zero ad spend"
          ],
          chartData: [
            { name: 'Month 1', value: 10000 },
            { name: 'Month 2', value: 50000 },
            { name: 'Month 3', value: 120000 },
            { name: 'Month 4', value: 200000 }
          ],
          followersData: [
            { name: 'Initial', value: 2000 },
            { name: 'After Campaign', value: 40000 }
          ],
          website: "https://polkisarees.com/",
          social: "https://www.instagram.com/polki_sarees/",
          testimonial: {
            quote: "When your content speaks to the heart, algorithms follow.",
            name: "Polki Sarees Team",
            position: "Women's Fashion Brand"
          }
        },
        {
          id: "advocate-rashi",
          title: "Advocate Rashi Singhal – Building a Digital Legal Brand",
          category: "Personal Branding | Organic Social Growth",
          metrics: "Impressions: 870 → 450,678+ • Followers: 850 → 1,800+ • Strategic LinkedIn positioning",
          image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Adv. Rashi Singhal",
          description: "Positioning a legal professional as a credible, insightful voice in the ecosystem.",
          challenge: "In a field like law, digital presence is rare — but powerful. We partnered with Adv. Rashi Singhal to position her as a credible, insightful voice in the legal ecosystem on LinkedIn.",
          solution: "From posts on legal rights to simplified law explainers and her personal journey as a woman in law, our content made her profile both human and professional. We created a content strategy that showcased her expertise while making legal concepts accessible.",
          results: [
            "Impressions: 870 → 450,678+",
            "Profile visits surged from top-tier clients and law firms",
            "Direct inquiries from potential clients",
            "Followers doubled from 850 → 1,800+",
            "Strategic brand positioning as a legal expert on LinkedIn"
          ],
          chartData: [
            { name: 'Before', value: 870 },
            { name: 'After', value: 450678 }
          ],
          followersData: [
            { name: 'Initial', value: 850 },
            { name: 'After 4 Months', value: 1800 }
          ],
          contentTypesData: [
            { name: 'Legal Explainers', value: 40 },
            { name: 'Personal Stories', value: 25 },
            { name: 'Industry News', value: 20 },
            { name: 'Career Advice', value: 15 }
          ],
          website: "https://www.linkedin.com/in/rashi-singhal-326076213",
          testimonial: {
            quote: "The law may be black and white — but your brand doesn't have to be.",
            name: "Adv. Rashi Singhal",
            position: "Legal Professional"
          }
        },
        {
          id: "bedtime-essentials",
          title: "Bedtime Essentials – From Manufacturer to D2C Brand",
          category: "Funnel Creation | Social Media | D2C Storefront",
          metrics: "1.6x increase in revenue in 60 days",
          image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Bedtime Essentials",
          description: "Transforming an offline bedsheet manufacturer into a digital D2C brand.",
          challenge: "An offline manufacturer of bedsheets wanted to go digital — not just to sell online, but to generate wholesale leads and build a trusted identity. The challenge was to create a strategy that worked for both B2C and B2B audiences.",
          solution: "We launched their Instagram with high-quality visuals, created simple lead-gen forms for B2B customers, and rolled out a D2C store on a no-code platform. Our strategy covered two very different audiences — and served both well.",
          results: [
            "1.6x increase in revenue in 60 days",
            "Inbound inquiries for bulk orders via DMs & forms",
            "Direct purchases via smart-link storefront",
            "Custom audience targeting for future remarketing"
          ],
          chartData: [
            { name: 'Before', value: 100 },
            { name: 'After', value: 160 }
          ],
          channelData: [
            { name: 'D2C Store', value: 45 },
            { name: 'Wholesale', value: 55 }
          ],
          website: "https://bedtimeessentials.dm2buy.com/",
          social: "https://www.instagram.com/bed_timeessentials/",
          testimonial: {
            quote: "We turned fabric into stories — and stories into sales.",
            name: "Bedtime Essentials Team",
            position: "Bedding Manufacturer"
          }
        },
        {
          id: "pace-institute",
          title: "PACE Institute – Hyperlocal Campaigns with National Impact",
          category: "Paid Ads | Education Sector",
          metrics: "₹5,000 ad spend → 180+ qualified leads",
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "PACE Institute",
          description: "Generating local awareness and leads for CUET coaching in Delhi with limited budget.",
          challenge: "PACE, a leading institute for Engineering/Medical/Olympiads, was expanding into CUET coaching in Delhi. The challenge was to generate local awareness and leads — fast — with a small budget.",
          solution: "We designed creatives that highlighted results, student stories, and key course benefits. With just ₹5,000 in ad budget, we generated over 180 qualified leads via Google + Meta. Every click was tracked, every rupee optimized.",
          results: [
            "₹5,000 ad spend → 180+ qualified leads",
            "CRM integration support provided",
            "Counselors reported 70% lead relevancy",
            "Strong hyperlocal visibility built in 3 weeks"
          ],
          chartData: [
            { name: 'Ad Spend (₹)', value: 5000 },
            { name: 'Lead Cost (₹)', value: 27.8 }
          ],
          leadQualityData: [
            { name: 'Qualified', value: 70 },
            { name: 'Unqualified', value: 30 }
          ],
          platformData: [
            { name: 'Google', value: 65 },
            { name: 'Meta', value: 35 }
          ],
          website: "https://iitianspace.com/",
          testimonial: {
            quote: "Every lead was a potential future topper — and we didn't let them slip.",
            name: "PACE Institute Director",
            position: "Education Provider"
          }
        },
        {
          id: "that-blingy-thing",
          title: "That Blingy Thing – Turning Passion into Profit",
          category: "Ads Management | Brand Building | Organic Social Growth",
          metrics: "From 0 to 10–15 online orders in the first month with just 10 posts",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "That Blingy Thing",
          description: "Turning a passion project into a monetized brand within weeks.",
          challenge: "That Blingy Thing was a passion project struggling to take its first commercial leap. With no previous online sales and limited product confidence, the founder needed more than just content—they needed direction, clarity, and motivation.",
          solution: "We ran a focused 2-month pilot. This included: Planning and directing content shoots to highlight product aesthetics, Reworking product presentation and positioning, Running performance-oriented Meta ads and organic posts, Consistent support to boost founder's confidence and execution.",
          results: [
            "10–15 orders generated within the first 30 days",
            "Achieved this with only 10 Instagram posts",
            "Improved product clarity, shoot aesthetics, and founder narrative",
            "Turned a passion project into a monetized brand—within weeks"
          ],
          chartData: [
            { name: 'Week 1', value: 2 },
            { name: 'Week 2', value: 5 },
            { name: 'Week 3', value: 8 },
            { name: 'Week 4', value: 15 }
          ],
          contentData: [
            { name: 'Product Shots', value: 6 },
            { name: 'Lifestyle Posts', value: 4 }
          ],
          social: "https://www.instagram.com/that.blingy.thingy",
          testimonial: {
            quote: "We needed more than just content—we needed confidence. Growzzy gave us both.",
            name: "That Blingy Thing Founder",
            position: "Jewelry Brand"
          }
        },
        {
          id: "dr-karan-chawla",
          title: "Dr. Karan Chawla – Voice of Finance for Doctors",
          category: "Personal Branding | Organic Social Growth",
          metrics: "Educated fellow doctors through reels & grew community organically",
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Dr. Karan Chawla",
          description: "Established authority and relevance in niche medical creator economy.",
          challenge: "Dr. Karan wanted to be more than a practicing doctor—he aimed to become a thought leader guiding fellow medicos through finance, strategy, and growth. But with no structured content, he needed a voice and visuals that matched his vision.",
          solution: "We stepped in with: Scripting & editing end-to-end content (mainly reels), Strategic positioning for thought leadership, Educative, community-first narrative style, Weekly themes built around finance, growth, and career for medical professionals.",
          results: [
            "Reels with high engagement & shares in the doctor niche",
            "Increased following and organic reach",
            "Earned credibility as a relatable, sharp personal brand",
            "Established authority and relevance in niche medical creator economy"
          ],
          chartData: [
            { name: 'Month 1', value: 1200 },
            { name: 'Month 2', value: 3400 },
            { name: 'Month 3', value: 5800 },
            { name: 'Month 4', value: 8500 }
          ],
          contentTypesData: [
            { name: 'Finance Education', value: 40 },
            { name: 'Career Guidance', value: 30 },
            { name: 'Strategy Tips', value: 20 },
            { name: 'Personal Stories', value: 10 }
          ],
          social: "https://www.instagram.com/dr.karanchawla",
          testimonial: {
            quote: "From doctor to thought leader—Growzzy helped me find my voice in the medical creator space.",
            name: "Dr. Karan Chawla",
            position: "Medical Professional & Finance Educator"
          }
        },
        {
          id: "aerie-academy",
          title: "Aerie Academy – Cracking GATE with Precision",
          category: "Ads Management | Lead Generation",
          metrics: "Reduced CPL and achieved enrolment targets through targeted funnels",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Aerie Academy",
          description: "Restored trust in marketing ROI and scaled with clarity for architecture students.",
          challenge: "The brand had great intent but struggled with high CPL and a lack of qualified leads. Their funnel felt broken, and ghost leads made it harder to hit batch goals.",
          solution: "We came in with a creative-funnel-audit-first approach: Redesigned landing page + ads to directly hit pain points of architecture students, Introduced alumni-driven messaging and mentor assurance, Built campaigns around urgency, clarity, and credibility.",
          results: [
            "CPL reduced significantly in 2 weeks",
            "Batch enrollment goals achieved",
            "Fixed ghost lead issue and improved closure rate",
            "Restored trust in marketing ROI and scaled with clarity"
          ],
          chartData: [
            { name: 'Before CPL (₹)', value: 450 },
            { name: 'After CPL (₹)', value: 180 }
          ],
          leadQualityData: [
            { name: 'Qualified Leads', value: 85 },
            { name: 'Ghost Leads', value: 15 }
          ],
          website: "https://aerieacademy.com",
          testimonial: {
            quote: "From broken funnels to batch goals—Growzzy fixed our lead generation completely.",
            name: "Aerie Academy Team",
            position: "Architecture Coaching Institute"
          }
        },
        {
          id: "dr-jivika-singh",
          title: "Dr. Jivika Singh – Educating Parents, Building Presence",
          category: "Personal Branding | Organic Social Growth",
          metrics: "Built early-stage brand trust as a pediatric voice through educational content",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          client: "Dr. Jivika Singh",
          description: "Built foundation for organic medical brand in first year of PG.",
          challenge: "As a pediatric resident, Dr. Jivika wanted to build visibility among young parents and establish herself as a credible digital doctor—without losing her voice to trends.",
          solution: "We offered a low-effort yet research-driven content plan: 3 carousels/week backed by pediatric science & trends, 1 reel/week with scripts and edits from our side, Aesthetic planning in beige-cream tones, Strategic positioning to fight misinformation & create responsible engagement.",
          results: [
            "Built early trust and credibility with new parents",
            "Positioned as an educative pediatric voice",
            "Consistent engagement growth while the doctor handled stories and DMs",
            "Built the foundation for an organic medical brand in her first year of PG"
          ],
          chartData: [
            { name: 'Week 1', value: 150 },
            { name: 'Week 4', value: 400 },
            { name: 'Week 8', value: 750 },
            { name: 'Week 12', value: 1200 }
          ],
          contentTypesData: [
            { name: 'Educational Carousels', value: 60 },
            { name: 'Myth-busting Reels', value: 25 },
            { name: 'Parent Tips', value: 15 }
          ],
          social: "https://www.instagram.com/dr.jivikasingh",
          testimonial: {
            quote: "Building trust with new parents while staying true to medical science—that's what great content does.",
            name: "Dr. Jivika Singh",
            position: "Pediatric Resident"
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

  // Colors for charts
  const COLORS = ['#0D8B8B', '#5AAA95', '#C1EFF1', '#E6F9FA', '#F5F7F7'];

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

  // Extract website and social links
  const websiteUrl = project.website?.split('|')[0].trim();
  const websiteLabel = project.website?.includes('|') 
    ? project.website 
    : websiteUrl;

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
                  {websiteUrl && (
                    <div className="bg-white px-4 py-2 rounded-md shadow-sm">
                      <span className="text-sm text-muted-foreground">Website</span>
                      <a 
                        href={websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-growzzy-primary hover:underline"
                      >
                        <LinkIcon className="w-3 h-3 mr-1" /> {project.client}
                      </a>
                    </div>
                  )}
                  {project.social && (
                    <div className="bg-white px-4 py-2 rounded-md shadow-sm">
                      <span className="text-sm text-muted-foreground">Social</span>
                      <a 
                        href={project.social} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-growzzy-primary hover:underline"
                      >
                        <LinkIcon className="w-3 h-3 mr-1" /> @{project.social.split('/').pop()}
                      </a>
                    </div>
                  )}
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

                {/* Performance Metrics */}
                <div className="mb-12 fade-in-section" data-delay="0.3">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-growzzy-primary" />
                    Performance Metrics
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Primary Chart */}
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold mb-4">
                        {project.id === "hitfit-health" ? "Weekly Lead Generation" : 
                         project.id === "humara-pandit" ? "ROAS Growth" : 
                         project.id === "claysip" ? "Reach Breakdown" :
                         project.id === "polki-sarees" ? "Audience Growth" :
                         project.id === "advocate-rashi" ? "Impression Growth" :
                         project.id === "bedtime-essentials" ? "Revenue Growth" :
                         "Campaign ROI"}
                      </h3>
                      <div className="h-64">
                        <ChartContainer config={{}}>
                          <BarChart data={project.chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="value" fill="#0D8B8B" />
                          </BarChart>
                        </ChartContainer>
                      </div>
                    </div>

                    {/* Secondary Chart */}
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-semibold mb-4">
                        {project.id === "hitfit-health" ? "Lead Source Distribution" : 
                         project.id === "humara-pandit" ? "Audience Engagement" : 
                         project.id === "claysip" ? "Timeline" :
                         project.id === "polki-sarees" ? "Follower Growth" :
                         project.id === "advocate-rashi" ? "Content Breakdown" :
                         project.id === "bedtime-essentials" ? "Revenue Channels" :
                         "Lead Quality"}
                      </h3>
                      <div className="h-64">
                        {project.timelineData ? (
                          <div className="flex flex-col justify-center h-full">
                            {project.timelineData.map((item: any, index: number) => (
                              <div key={index} className="flex items-center mb-4">
                                <div className="w-3 h-3 rounded-full bg-growzzy-primary mr-3"></div>
                                <div className="font-medium">{item.name}:</div>
                                <div className="ml-2">{item.value}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ChartContainer config={{}}>
                            {(project.leadSourceData || project.engagementData || project.followersData || project.contentTypesData || project.channelData || project.leadQualityData || project.platformData || project.conversionData) && (
                              <PieChart>
                                <Pie
                                  data={project.leadSourceData || project.engagementData || project.followersData || project.contentTypesData || project.channelData || project.leadQualityData || project.platformData || project.conversionData || []}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                  label={renderCustomizedLabel}
                                >
                                  {(project.leadSourceData || project.engagementData || project.followersData || project.contentTypesData || project.channelData || project.leadQualityData || project.platformData || project.conversionData || []).map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                              </PieChart>
                            )}
                          </ChartContainer>
                        )}
                      </div>
                    </div>
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

                  {/* Client Impact */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-growzzy-primary" />
                      Client Impact
                    </h3>
                    <div className="bg-growzzy-light p-4 rounded-md">
                      <p className="text-lg font-medium text-growzzy-dark">
                        {project.id === "hitfit-health" ? "Generated sustainable lead pipeline for healthcare growth" : 
                         project.id === "humara-pandit" ? "Connected devotees with rituals digitally" : 
                         project.id === "claysip" ? "Created a sustainable brand identity" :
                         project.id === "polki-sarees" ? "Revitalized traditional fashion" :
                         project.id === "advocate-rashi" ? "Established legal thought leadership" :
                         project.id === "bedtime-essentials" ? "Transformed manufacturing to D2C" :
                         "Delivered quality leads within budget"}
                      </p>
                    </div>
                  </div>
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
              <a 
                href="https://superprofile.bio/lf/67a5d624b08b3900136a29b9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center fade-in-section" 
                data-delay="0.2"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToReveal />
    </div>
  );
};

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-md">
        <p className="font-medium">{label || payload[0].name}</p>
        <p className="text-growzzy-primary">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

// Custom label for pie charts
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 0.8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="#333" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize="12"
    >
      {name} ({value})
    </text>
  );
};

export default ProjectDetail;
