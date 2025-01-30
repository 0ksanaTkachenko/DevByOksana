import './cards.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollIndicator } from '../elements/elements';

const Card = ({ index, isCardsHidden }) => {
  const firstRowText = 'OKSANA';
  const lastRowText = ['frontend', 'developer'];

  const [isFlipped, setFlipped] = useState(false);

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setFlipped(false);
    }, 400);
    return () => clearTimeout(timer);
  };

  const cardContent = (
    <p className={index < 6 ? 'firstRowText' : 'lastRowText'}>
      {index < 6 ? firstRowText[index] : lastRowText[index - 6]}
    </p>
  );

  const cardAnimationProps = () => ({
    exit: {
      opacity: 0,
      scale: 1.4,
      x: Math.random() * 300 - 150,
      y: Math.random() * 150 - 75,
      filter: 'blur(6px)',
      rotateZ: Math.random() * 10 - 5,
    },
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  });

  return (
    <motion.div
      {...cardAnimationProps()}
      className={`custom-card position-relative ${isCardsHidden || isFlipped ? 'flipped' : ''}`}
      onMouseOver={isCardsHidden ? null : () => setFlipped(true)}
      onMouseLeave={isCardsHidden ? null : handleMouseLeave}
    >
      <div className="card-inner w-100 h-100">
        {['card-front', 'card-back'].map((side) => (
          <div
            key={side}
            className={`${side} position-absolute w-100 h-100 shadow rounded d-flex align-items-center justify-content-center`}
          >
            {cardContent}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Cards = ({ isCardsHidden }) => {
  const cardsCount = Array.from({ length: 8 }, (_, index) => index);
  const [shouldHideCards, setShouldHideCards] = useState(false);

  useEffect(() => {
    if (isCardsHidden) {
      const timer = setTimeout(() => {
        setShouldHideCards(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isCardsHidden]);

  return (
    <AnimatePresence>
      {!shouldHideCards && (
        <div className="card-container vh-100 vw-100 position-relative p-2">
          {cardsCount.map((index) => (
            <Card key={index} index={index} isCardsHidden={isCardsHidden} />
          ))}
          <ScrollIndicator isCardsHidden={isCardsHidden} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cards;
