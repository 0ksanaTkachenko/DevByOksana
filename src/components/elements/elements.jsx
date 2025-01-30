import './elements.css';

import { motion } from 'motion/react';

export const ContactIcons = () => {
  const animationProps = (timeToDelay) => ({
    initial: {
      opacity: 0,
      y: -50,
      scale: 1,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: timeToDelay,
      },
    },
    whileHover: {
      scale: 1.1,
      rotate: 15,
      transition: {
        duration: 0.3,
      },
    },
    whileTap: {
      scale: 0.9,
      rotate: -15,
    },
  });

  const AnimatedIcon = ({ children, timeToDelay, link }) => {
    return (
      <motion.a
        href={link}
        target="_blank"
        className="icon-container z-index-20"
        {...animationProps(timeToDelay)}
      >
        {children}
      </motion.a>
    );
  };

  return (
    <>
      <AnimatedIcon timeToDelay={2} link="https://www.instagram.com/__ksuf.ka_">
        <svg
          className="instagram"
          width="40px"
          height="40px"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
            fill="currentColor"
          />
        </svg>
      </AnimatedIcon>
      <AnimatedIcon
        timeToDelay={2.2}
        link="https://github.com/0ksanaTkachenko/"
      >
        <svg
          className="github"
          width="800px"
          height="800px"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: 'currentColor' }}
        >
          <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
        </svg>
      </AnimatedIcon>
      <AnimatedIcon timeToDelay={2.4} link="https://t.me/Ksu_fka">
        <svg
          className="telegram"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            stroke: 'currentColor',
            background: 'none',
          }}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z"
          />
        </svg>
      </AnimatedIcon>
      <AnimatedIcon
        timeToDelay={2.6}
        link="https://www.linkedin.com/in/oksana-tkachenko-86568829b/"
      >
        <svg
          className="linkedin"
          width="800px"
          height="800px"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <rect
            width="132"
            height="132"
            x="30"
            y="30"
            stroke="currentColor"
            stroke-width="12"
            rx="16"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="12"
            d="M66 86v44"
          />
          <circle cx="66" cy="64" r="8" fill="currentColor" />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="12"
            d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
          />
        </svg>
      </AnimatedIcon>
      <AnimatedIcon timeToDelay={2.8} link="https://wa.me/0639362203">
        <svg
          className="whatsapp"
          fill="currentColor"
          width="800px"
          height="800px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M6,59a1,1,0,0,1-.95-1.32L9,46.06A27.1,27.1,0,0,1,13,13,26.93,26.93,0,0,1,51,13h0A26.94,26.94,0,0,1,20.22,56.23L6.2,59Zm14.35-4.85a1,1,0,0,1,.45.11A24.94,24.94,0,0,0,49.63,14.37h0a24.93,24.93,0,0,0-35.26,0,25.08,25.08,0,0,0-3.4,31,1,1,0,0,1,.1.86L7.51,56.72,20.17,54.2Z" />
          <path d="M39.17,46a8.46,8.46,0,0,1-.92,0c-5.31-.58-12-5.83-13.89-7.68h0c-1.85-1.85-7.11-8.58-7.68-13.89-.46-4.24,2.37-7.12,3.61-8.17a2.87,2.87,0,0,1,2-.69l2.7.09a1,1,0,0,1,.9.65c.6,1.59,2.54,6.88,2.54,8.25,0,1.2-1.06,2.13-2,2.95-.2.17-.47.41-.63.58a28.74,28.74,0,0,0,3.61,5.16,28.77,28.77,0,0,0,5.16,3.61c.17-.17.41-.44.58-.63.82-.94,1.75-2,3-2,1.37,0,6.66,1.94,8.25,2.54a1,1,0,0,1,.65.9l.09,2.7a3,3,0,0,1-.69,2A9.82,9.82,0,0,1,39.17,46ZM25.78,36.88c1.65,1.65,8,6.6,12.69,7.11,3.29.35,5.59-1.92,6.43-2.91a1,1,0,0,0,.22-.66l-.07-2a47.65,47.65,0,0,0-6.92-2.18c-.32,0-1.11.93-1.45,1.32-.68.78-1.22,1.39-2,1.39-1.27,0-5.7-3.28-6.69-4.27S23.75,29.23,23.75,28c0-.75.61-1.29,1.39-2,.38-.34,1.29-1.12,1.32-1.45a47.7,47.7,0,0,0-2.18-6.92l-2-.07a1,1,0,0,0-.66.22c-1,.84-3.27,3.14-2.91,6.42.51,4.72,5.46,11,7.11,12.69Zm9,0Z" />
        </svg>
      </AnimatedIcon>
    </>
  );
};

export const ScrollIndicator = ({ isCardsHidden }) => {
  const text = 'Scroll';

  const letterAnimation = {
    hidden: { y: 0, color: '#FFFFFF', opacity: 1 },
    visible: (index) => ({
      y: [-5, 0, -5],
      color: ['#FFFFFF', '#7e128d', '#FFFFFF'],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 3,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <>
      {!isCardsHidden && (
        <div className="scroll-elem position-absolute text-center">
          <div className="scroll-text d-flex justify-content-center gap-2 mb-2">
            {Array.from(text).map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="scroll-letter"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="scroll-line mx-auto"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          ></motion.div>
        </div>
      )}
    </>
  );
};
