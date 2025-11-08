import { useState, useEffect } from 'react';

/**
 * Custom hook for mouse parallax effect
 * @param {number} intensity - Movement intensity (default: 20px)
 * @param {boolean} smooth - Enable smooth transitions (default: true)
 * @returns {object} - { x, y } position values
 */
export const useMouseParallax = (intensity = 20, smooth = true) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on desktop (not mobile)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate normalized position (-1 to 1)
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;

      // Apply intensity
      setMousePosition({
        x: x * intensity,
        y: y * intensity,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return mousePosition;
};

/**
 * Custom hook for mouse tilt effect (3D card tilt)
 * @param {number} maxTilt - Maximum tilt angle in degrees (default: 10)
 * @returns {object} - { rotateX, rotateY } rotation values
 */
export const useMouseTilt = (maxTilt = 10) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e, element) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return { tilt, handleMouseMove, handleMouseLeave };
};
