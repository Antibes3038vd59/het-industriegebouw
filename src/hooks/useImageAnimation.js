import { useEffect } from 'react';

const useImageAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const startScrollPercentage = 0;
      const scrollPercentage = Math.min(Math.max((scrollPosition - (windowHeight * startScrollPercentage / 100)) / windowHeight * 100, 0), 100);
      const clipPathValue1 = `circle(${Math.min(scrollPercentage * 5.5, 100)}% at 50% 50%)`;
      const clipPathValue2 = `circle(${Math.min(Math.max(scrollPercentage * 6.5 - 30, 0), 100)}% at 50% 50%)`;
      const clipPathValue3 = `circle(${Math.min(Math.max(scrollPercentage * 7.5 - 60, 0), 100)}% at 50% 50%)`;

      const secondImage = document.querySelector('.second-image');
      const thirdImage = document.querySelector('.third-image');
      const fourthImage = document.querySelector('.fourth-image');

      if (secondImage) secondImage.style.clipPath = clipPathValue1;
      if (thirdImage) thirdImage.style.clipPath = clipPathValue2;
      if (fourthImage) fourthImage.style.clipPath = clipPathValue3;
    };

    const handleScrollKlein = () => {
      const container = document.querySelector(".scroll-container-klein");
      const second = document.querySelector(".second-image-klein");
      const third = document.querySelector(".third-image-klein");
      const fourth = document.querySelector(".fourth-image-klein");

      if (!container || !second || !third || !fourth) return;

      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const startScrollPercentage = 100;
      const scrollPercentage = Math.min(Math.max((scrollPosition - (windowHeight * startScrollPercentage / 100) - containerRect.top) / windowHeight * 100, 0), 100);
      const clip1 = `circle(${Math.min(scrollPercentage * 2.5, 100)}% at 50% 50%)`;
      const clip2 = `circle(${Math.min(Math.max(scrollPercentage * 2.5 - 30, 0), 100)}% at 50% 50%)`;
      const clip3 = `circle(${Math.min(Math.max(scrollPercentage * 2.5 - 60, 0), 100)}% at 50% 50%)`;

      second.style.clipPath = clip1;
      third.style.clipPath = clip2;
      fourth.style.clipPath = clip3;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollKlein);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollKlein);
    };
  }, []);
};

export default useImageAnimation;
