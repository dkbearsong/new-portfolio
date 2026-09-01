import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Directional page transition component
 * direction > 0 means moving right in tabs (incoming slides from right, outgoing slides to left)
 * direction < 0 means moving left in tabs (incoming slides from left, outgoing slides to right)
 *
 * Specific fade requirement:
 * "as it loads the content should fade out and in, only completely fading out as the first page nears the window border"
 */

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
    width: '100%',
    transition: {
      x: { type: 'tween', ease: [0.2, 0.7, 0.2, 1], duration: 0.55 },
      // Fade in quickly at the START of the slide-in (easeOut front-loads the change)
      opacity: { duration: 0.35, ease: 'easeOut' }
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    // Keyframes: hold fully visible for the first 60% of the slide,
    // then fade completely as the page nears the window border
    opacity: [1, 1, 0],
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    transition: {
      x: { type: 'tween', ease: [0.2, 0.7, 0.2, 1], duration: 0.55 },
      opacity: {
        duration: 0.35,
        ease: 'easeIn',
        times: [0, 0.6, 1]
      }
    }
  })
};

export default function PageTransition({ pageKey, direction, children }) {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: 'calc(100vh - 160px)' }}>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={pageKey}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ width: '100%' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
