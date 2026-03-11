import { useEffect } from 'react';

const useCursorAnimation = () => {
  useEffect(() => {
    const dots = [
      { el: document.getElementById('dot1'), x: 0, y: 0, size: 15 },
      { el: document.getElementById('dot2'), x: 0, y: 0, size: 5 },
    ];
    let mouseX = 0, mouseY = 0;
    let lastClientX = 0, lastClientY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
      lastClientX = e.clientX;
      lastClientY = e.clientY;
    };

    const handleScroll = () => {
      const point = document.elementFromPoint(lastClientX, lastClientY);
      if (point) {
        mouseX = window.scrollX + lastClientX;
        mouseY = window.scrollY + lastClientY;
      }
    };

    const animate = () => {
      dots[0].x += (mouseX - dots[0].x) * 0.2;
      dots[0].y += (mouseY - dots[0].y) * 0.2;
      for (let i = 1; i < dots.length; i++) {
        dots[i].x += (dots[i - 1].x - dots[i].x) * 0.2;
        dots[i].y += (dots[i - 1].y - dots[i].y) * 0.2;
      }
      dots.forEach(dot => {
        if (dot.el) {
          dot.el.style.left = dot.x + 'px';
          dot.el.style.top = dot.y + 'px';
          dot.el.style.width = dot.size + 'px';
          dot.el.style.height = dot.size + 'px';
        }
      });
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useCursorAnimation;
