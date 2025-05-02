
import React, { useEffect, useRef } from 'react';

const ScrollToReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElems = document.querySelectorAll('.fade-in-section');
    fadeElems.forEach(elem => {
      observer.observe(elem);
    });

    return () => {
      fadeElems.forEach(elem => {
        observer.unobserve(elem);
      });
    };
  }, []);

  return null;
};

export default ScrollToReveal;
