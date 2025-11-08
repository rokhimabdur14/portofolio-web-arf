import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionTransition = ({ children, backgroundColor = '#0a0a0a' }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section
      ref={ref}
      style={{
        opacity,
        filter: blur.get ? `blur(${blur.get()}px)` : 'blur(0px)',
        scale,
        backgroundColor,
        position: 'relative',
        willChange: 'opacity, filter, transform',
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionTransition;
