import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({
  src,
  alt,
  speed = 0.5,
  className = '',
  scale = false
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${(1 - speed) * 50}%`, `${(speed - 1) * 50}%`]);
  const scaleValue = scale ? useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.95]) : 1;
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          scale: scaleValue,
          opacity
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
