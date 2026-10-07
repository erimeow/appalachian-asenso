import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  // Lighter scale & depth animation on mobile phones to prevent overflow
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: isMobile ? 0.96 : 0.92,
      rotateX: isMobile ? 0 : 8,
      filter: 'blur(4px)'
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: isMobile ? 0.45 : 0.65,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: isMobile ? 1.03 : 1.08,
      rotateX: isMobile ? 0 : -6,
      filter: 'blur(4px)',
      transition: {
        duration: isMobile ? 0.35 : 0.45,
        ease: [0.7, 0, 0.84, 0]
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{
        width: '100%',
        overflowX: 'hidden',
        perspective: isMobile ? 'none' : '1200px',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  );
}