import './aboutScreen.css';
import React from 'react';
import { motion } from 'framer-motion';
import laptopImg from '@assets/laptop.png';

const AboutScreen = React.forwardRef(({}, ref) => {
  return (
    <>
      <motion.div
        className="aboutScreen container-fluid h-100 overflow-hidden position-relative"
        ref={ref}
      >
        <div className="background-rgadient h-100">
          <div className="container-sm">
            <div className="about-container pt-5">
              <div className="about-text p-5 w-100">
                <h4>About.</h4>
                <p className="text-row-1">
                  I'm a frontend developer based in sunny Vietnam
                </p>
                <p className="text-row-2">Marketing Specialist in the past</p>
                <p className="text-row-3">
                  For me, development is the perfect combination of logic and
                  creativity
                </p>
              </div>
              <div className="about-img d-flex justify-content-center align-items-center">
                <img className="laptopImg h-auto" src={laptopImg} alt="" />
                <motion.div
                  className="learn-more-circle position-absolute rounded-circle d-flex"
                  initial={{
                    scale: 1, // Увеличение при наведении
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)', // Добавление тени
                  }}
                  whileHover={{
                    scale: 1.1, // Увеличение при наведении
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)', // Добавление тени
                    rotate: 5, // Легкий наклон для динамичного эффекта
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }} // Плавность анимации
                >
                  <div className="circle-text-container d-flex flex-column justify-content-center align-items-center text-center">
                    <p>My story</p>
                    <p>Learn a little bit more about me</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <hr className="full-width-line w-100"></hr>
          </div>
        </div>
      </motion.div>
    </>
  );
});

export default AboutScreen;
