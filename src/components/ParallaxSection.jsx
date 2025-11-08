import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({
  children,
  speed = 0.5,
  className = '',
  offset = ['start end', 'end start']
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${(speed - 1) * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
