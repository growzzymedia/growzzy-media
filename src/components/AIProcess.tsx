import React, { useEffect, useRef, useState } from 'react';
import { Database, Brain, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const AIProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Input',
      description: 'We gather insights from your brand, audience, and market trends',
      color: 'from-growzzy-primary to-growzzy-secondary'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Analysis',
      description: 'Our AI processes thousands of data points to identify opportunities',
      color: 'from-growzzy-secondary to-growzzy-accent'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creative Strategy',
      description: 'Human creativity meets AI precision to craft winning campaigns',
      color: 'from-growzzy-accent to-growzzy-primary'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Optimized Growth',
      description: 'Continuous AI monitoring and optimization for maximum ROI',
      color: 'from-growzzy-primary to-growzzy-dark'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setActiveStep((prev) => (prev + 1) % steps.length);
            }, 3000);
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-growzzy-gray relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="bg-blob blob-2 animate-float-slow"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 fade-in-section">
            How <span className="text-growzzy-primary">AI + Human Strategy</span> Work Together
          </h2>
          <p className="text-lg text-muted-foreground fade-in-section" data-delay="0.2">
            Our proven process combines artificial intelligence with creative expertise
          </p>
        </div>

        {/* Desktop View - Horizontal Process */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-growzzy-primary via-growzzy-secondary to-growzzy-primary transform -translate-y-1/2 animate-shimmer"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative fade-in-section ${
                    activeStep === index ? 'animate-scale-up' : ''
                  }`}
                  data-delay={`${0.2 + index * 0.1}`}
                >
                  {/* Step Card */}
                  <div
                    className={`bg-white rounded-2xl p-6 border-2 transition-all duration-500 hover-lift ${
                      activeStep === index
                        ? 'border-growzzy-primary shadow-2xl scale-105'
                        : 'border-gray-200 hover:border-growzzy-primary shadow-lg'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 mx-auto ${
                        activeStep === index ? 'animate-pulse-scale' : ''
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-growzzy-dark">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-growzzy-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-growzzy-primary animate-bounce-subtle" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Process */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`fade-in-section ${
                activeStep === index ? 'animate-scale-up' : ''
              }`}
              data-delay={`${0.2 + index * 0.1}`}
            >
              <div
                className={`bg-white rounded-2xl p-6 border-2 transition-all duration-500 ${
                  activeStep === index
                    ? 'border-growzzy-primary shadow-2xl'
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white flex-shrink-0 ${
                      activeStep === index ? 'animate-pulse-scale' : ''
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 bg-growzzy-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-growzzy-dark">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-growzzy-primary to-growzzy-secondary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProcess;