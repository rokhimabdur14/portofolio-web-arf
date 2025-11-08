import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxText = ({
  children,
  speed = 0.8,
  className = '',
  direction = 'up' // 'up', 'down', 'left', 'right'
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const getTransform = () => {
    switch(direction) {
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [`${(speed - 1) * -100}%`, `${(1 - speed) * 100}%`]);
      case 'left':
        return { x: useTransform(scrollYProgress, [0, 1], ['0%', `${(speed - 1) * 100}%`]) };
      case 'right':
        return { x: useTransform(scrollYProgress, [0, 1], ['0%', `${(1 - speed) * 100}%`]) };
      case 'up':
      default:
        return useTransform(scrollYProgress, [0, 1], [`${(1 - speed) * 100}%`, `${(speed - 1) * 100}%`]);
    }
  };

  const transform = getTransform();
  const y = direction === 'up' || direction === 'down' ? transform : 0;
  const x = direction === 'left' || direction === 'right' ? transform.x : 0;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, x }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
