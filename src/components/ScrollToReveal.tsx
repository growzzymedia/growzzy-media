
import React, { useEffect } from 'react';

const ScrollToReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Handle special animations based on data attributes
          if (entry.target.hasAttribute('data-delay')) {
            entry.target.style.animationDelay = `${entry.target.getAttribute('data-delay')}s`;
          }
          
          if (entry.target.hasAttribute('data-animation')) {
            const animationType = entry.target.getAttribute('data-animation');
            entry.target.classList.add(`animate-${animationType}`);
          }
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Target all elements with fade-in-section class
    const animatedElements = document.querySelectorAll('.fade-in-section, .slide-in-section, .scale-in-section');
    animatedElements.forEach(elem => {
      observer.observe(elem);
    });

    return () => {
      animatedElements.forEach(elem => {
        observer.unobserve(elem);
      });
    };
  }, []);

  return null;
};

export default ScrollToReveal;
