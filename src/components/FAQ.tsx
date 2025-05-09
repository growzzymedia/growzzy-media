
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "I'm a small business owner. Is Growzzy Media the right fit for me?",
      answer: "Absolutely! We work with businesses of all sizes — and especially love helping small brands scale with tailored, affordable digital strategies."
    },
    {
      question: "What services do you specialize in?",
      answer: "We offer: Paid Ads (Meta & Google), Social Media Management, LinkedIn Branding, Website Development, Lead Gen, Brand Strategy, Reputation Management. Basically, your entire online presence — managed and grown, start to finish."
    },
    {
      question: "How do you use AI in your services?",
      answer: "We blend AI with creativity to improve targeting, analyze data faster, and create smarter campaigns — so you get better results, faster."
    },
    {
      question: "Can I choose only one or two services instead of a full package?",
      answer: "Yes! Every business has unique needs — we offer modular service plans to match your goals and budget."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes — we proudly serve clients globally, with deep understanding of regional nuances and audience behaviors."
    },
    {
      question: "What's the process to get started?",
      answer: "Simple: Book a discovery call, we'll audit your needs & goals, you get a tailored roadmap, and then we execute and grow together!"
    }
  ];

  return (
    <section id="faq" className="section-padding bg-growzzy-light">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 fade-in-section">Frequently Asked Questions</h2>
          <p className="text-muted-foreground fade-in-section" data-delay="0.1">
            Got questions? We've got answers. Here's everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 fade-in-section" data-delay="0.2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-growzzy-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
