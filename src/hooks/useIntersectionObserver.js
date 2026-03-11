import { useEffect } from 'react';

const useIntersectionObserver = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".wrapperNieuwsKlein .wrapper:not(.no-animation)");
    let elementsToAnimate = [];

    wrappers.forEach(wrapper => {
      const links = wrapper.querySelectorAll("a");
      if (links[0]) {
        const img = links[0].querySelector("img");
        const text = links[0].querySelector("h2");
        if (img) {
          img.classList.add("from-left");
          elementsToAnimate.push(img);
        }
        if (text) {
          text.classList.add("from-left");
          elementsToAnimate.push(text);
        }
      }
      if (links[1]) {
        const img = links[1].querySelector("img");
        const text = links[1].querySelector("h2");
        if (img) {
          img.classList.add("from-right");
          elementsToAnimate.push(img);
        }
        if (text) {
          text.classList.add("from-right");
          elementsToAnimate.push(text);
        }
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => observer.observe(el));

    const fadeElements = document.querySelectorAll(".fotoNieuws1, .fotoMain2");
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useIntersectionObserver;
