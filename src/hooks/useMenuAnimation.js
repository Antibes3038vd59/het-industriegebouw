import { useEffect } from 'react';

const useMenuAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.container');
      const circles = document.querySelectorAll('.circle');
      const isTablet = window.matchMedia('(max-width: 1024px)').matches;

      if (!container || !circles) return;

      if (isTablet) {
        if (window.scrollY > 300) {
          container.style.width = '134px';
          circles.forEach(circle => {
            circle.style.width = '62px';
            circle.style.height = '62px';
            circle.style.fontSize = '14px';
          });
        } else {
          container.style.width = '134px';
          circles.forEach(circle => {
            circle.style.width = '62px';
            circle.style.height = '62px';
            circle.style.fontSize = '14px';
          });
        }
      } else {
        if (window.scrollY > 250) {
          container.style.width = '260px';
          circles.forEach(circle => {
            circle.style.width = '125px';
            circle.style.height = '125px';
            circle.style.fontSize = '25px';
          });
        } else {
          container.style.width = '134px';
          circles.forEach(circle => {
            circle.style.width = '62px';
            circle.style.height = '62px';
            circle.style.fontSize = '14px';
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useMenuAnimation;
