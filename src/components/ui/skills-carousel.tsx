'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillsCarouselProps {
  skills: Skill[];
  direction?: 'left' | 'right';
  speed?: number;
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ 
  skills, 
  direction = 'left', 
  speed = 20 
}) => {
  // Duplicate skills to create seamless loop
  const carouselSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <motion.div
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
        animate={{
          x: direction === 'left' ? '-50%' : '0%',
        }}
        initial={{
          x: direction === 'left' ? '0%' : '-50%',
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {carouselSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group relative flex flex-col items-center justify-center gap-2 mx-8 min-w-[100px] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-4 rounded-xl bg-secondary/30 backdrop-blur-sm border border-white/5 group-hover:border-primary/50 group-hover:bg-secondary/50 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_-5px_var(--primary)]">
              <div className="text-4xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {skill.icon}
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsCarousel;
