import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-100, window.innerHeight * -1],
            x: `calc(${Math.random() * 100}vw + ${(Math.random() - 0.5) * 200}px)`
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "easeInOut"
          }}
        >
          <Heart 
            className="text-pink-300/20" 
            style={{
              width: 20 + Math.random() * 30,
              height: 20 + Math.random() * 30,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartAnimation;