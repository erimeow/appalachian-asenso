import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.92,
    rotateX: 8,
    z: -100,
    filter: 'blur(6px)'
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    z: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.25, 1, 0.5, 1] // Custom cubic easing (Apple-level smoothness)
    }
  },
  exit: {
    opacity: 0,
    scale: 1.08,
    rotateX: -6,
    z: 100,
    filter: 'blur(8px)',
    transition: {
      duration: 0.45,
      ease: [0.7, 0, 0.84, 0]
    }
  }
};

export default function PageTransition({ children }) {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{
        width: '100%',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
}