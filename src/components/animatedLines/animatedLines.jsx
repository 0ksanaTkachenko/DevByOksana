import './animatedLines.css';

import { motion } from 'framer-motion';

const FadeLines = () => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="fade-lines-container position-absolute z-index-10">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="fade-lines position-absolute top-0 start-0 w-100 h-100 bg-transparent overflow-hidden"
      >
        <motion.path
          d="M0 20 Q 15 50, 50 40 T 100 60"
          className="line"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M0 40 Q 25 70, 50 50 T 100 70"
          className="line"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M0 60 Q 35 90, 50 60 T 100 80"
          className="line"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
};

const TwoCurvedLines = () => {
  const strokeWidth = 2;

  const path1 = `
    M 300,0
    C 300,112.5 225,-37.5 187.5,112.5 
    S 50,270 -50,270
  `;

  const path2 = `
    M 290,0
    C 300,132.5 225,-17.5 187.5,132.5 
    S 50,260 -50,260
  `;

  return (
    <>
      <svg
        className="curved-lines position-absolute d-block mx-auto bg-transparent"
        width="300"
        height="270"
        viewBox="0 0 300 270"
      >
        <motion.path
          d={path1}
          fill="none"
          stroke="#7227cf"
          strokeWidth={strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        <motion.path
          d={path2}
          fill="none"
          stroke="lightgray"
          strokeWidth={strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
        />
      </svg>
    </>
  );
};

export { FadeLines, TwoCurvedLines };
