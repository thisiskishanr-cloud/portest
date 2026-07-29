import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { Code2 } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinate motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, code, pre, [data-interactive="true"]'
        );
        setIsHovered(interactive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Code-Studio Ring / Ring Bracket */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full transition-colors duration-200 ${
          isHovered
            ? 'w-12 h-12 border-2 border-blue-500/80 bg-blue-500/15 shadow-lg shadow-blue-500/20 backdrop-blur-[1px]'
            : 'w-8 h-8 border border-blue-400/40 bg-blue-500/5 shadow-xs'
        }`}
      >
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="text-blue-600"
          >
            <Code2 size={12} className="stroke-[2.5]" />
          </motion.div>
        )}
      </motion.div>

      {/* Inner Precision Code Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xs shadow-blue-500/50"
      />
    </>
  );
};
