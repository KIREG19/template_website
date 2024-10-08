import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SideProject from './sideProject';
import WatchTower from './WatchTower';
import Meteor from './meteor';

function Project() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.8,
      },
    },
  };

  const techStack = 'bg-gray-300 text-black rounded-md p-1';

  return (
    <motion.div
      className='relative h-100% flex flex-col items-center justify-around'
      variants={variants}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      ref={ref}
    >
      <Meteor />
      <motion.div
        className='flex-1 mt-100px justify-center flex items-center gap-5 <md:(self-center text-center flex-col)'
        variants={variants}
      >
        <h1 className='font-bold text-8vh justify-center text-center <md:mb-4'>
          My Projects
        </h1>
      </motion.div>
      <WatchTower variants={variants} techStack={techStack} />
      <SideProject variants={variants} techStack={techStack} />
    </motion.div>
  );
}

export default Project;
