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
                  I'm a frontend developer based in Toronto, Canada
                </p>
                <p className="text-row-2">Marketing Specialist in the past</p>
                <p className="text-row-3">
                  For me, development is the perfect combination of logic and
                  creativity
                </p>
              </div>
              <div className="about-img d-flex justify-content-center align-items-center">
                <img className="laptopImg h-auto" src={laptopImg} alt="" />
                <div className="learn-more-circle position-absolute rounded-circle d-flex">
                  <div className="circle-text-container d-flex flex-column justify-content-center align-items-center text-center">
                    <p>My story</p>
                    <p>Learn a little bit more about me</p>
                  </div>
                </div>
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
