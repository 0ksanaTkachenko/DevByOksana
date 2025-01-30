import './avatar.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import head from '@assets/avatar/head.svg';
import pupils from '@assets/avatar/pupils.svg';
import hairLower from '@assets/avatar/hair-lower-part.svg';
import hairTop from '@assets/avatar/hair-top-part.svg';
import leftEar from '@assets/avatar/left-ear.svg';
import rightEar from '@assets/avatar/right-ear.svg';
import brows from '@assets/avatar/brows.svg';
import mouth from '@assets/avatar/mouth.svg';
import neckAndBody from '@assets/avatar/neck-and-body.svg';

const Avatar = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Обработчик движения мыши
  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setMouseX((clientX - centerX) / rect.width);
    setMouseY((clientY - centerY) / rect.height);
  };

  return (
    <div className="page-container" onMouseMove={handleMouseMove}>
      <div className="avatar-container">
        <motion.img
          className="avatar-head"
          src={head}
          alt="Head"
          animate={{
            x: mouseX * +4,
            y: mouseY * +4,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        />

        <motion.img
          className="avatar-pupils"
          src={pupils}
          alt="Pupils"
          animate={{
            x: mouseX * 9,
            y: mouseY * 9,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        />

        <motion.img
          className="avatar-hair-lower"
          src={hairLower}
          alt="Hair Lower Part"
          animate={{
            x: mouseX * -7,
            y: mouseY * -7,
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 10 }}
        />

        <motion.img
          className="avatar-hair-top"
          src={hairTop}
          alt="Hair Top Part"
          animate={{
            x: mouseX * +4,
            y: mouseY * +4,
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 10 }}
        />

        <motion.img
          className="avatar-left-ear"
          src={leftEar}
          alt="Left Ear"
          animate={{
            // x: mouseX * +1,
            y: mouseY * -5,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 12 }}
        />

        <motion.img
          className="avatar-right-ear"
          src={rightEar}
          alt="Right Ear"
          animate={{
            // x: mouseX * +1,
            y: mouseY * -5,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 12 }}
        />

        <motion.img
          className="avatar-brows"
          src={brows}
          alt="Brows"
          animate={{
            x: mouseX * +8,
            y: mouseY * +8,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 12 }}
        />

        <motion.img
          className="avatar-mouth"
          src={mouth}
          alt="Mouth"
          animate={{
            x: mouseX * +8,
            y: mouseY * +8,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 12 }}
        />

        <motion.img
          className="avatar-neck-body"
          src={neckAndBody}
          alt="Neck and Body"
        />
      </div>
    </div>
  );
};

export default Avatar;
