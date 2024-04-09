import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedCharactersProps {
  text: string;
  type: 'paragraph' | 'heading1' | 'heading2';
  className?: string;
}

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({ text, type, className }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLParagraphElement | HTMLHeadingElement | null>(null);

  useEffect(() => {
    let isMounted = true;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isMounted) {
          setTimeout(() => {
            controls.start('visible');
          }, 200);
        }
      },
      { root: null, threshold: 0.1 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [controls]);

  const item = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.03, duration: 0.8, ease: 'backOut' },
    }),
  };

  const Tag = tagMap[type];

  let delayOffset = 0;

  return React.createElement(
    Tag,
    { className, ref, style: { overflow: 'hidden' } },
    text.split(' ').map((word, wordIndex) => {
      return (
        <React.Fragment key={wordIndex}>
          <span style={{ display: 'inline-block' }}>
            {word.split('').map((char, charIndex) => {
              const totalIndex = delayOffset + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  variants={item}
                  initial="hidden"
                  animate={controls}
                  custom={totalIndex}
                  style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
          {wordIndex < text.length - 1 && <span style={{ whiteSpace: '' }}>&nbsp;</span>}
        </React.Fragment>
      );
    })
  );
};

export default AnimatedCharacters;
