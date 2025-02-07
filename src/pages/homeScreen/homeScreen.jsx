import './homeScreen.css';
import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import oksanaPhoto from '@assets/oksana.png';
import photoForMobile from '@assets/oksana-mobile.png';
import {
  FadeLines,
  TwoCurvedLines,
} from '@components/animatedLines/animatedLines';
import { ContactIcons } from '@components/elements/elements';
import Cards from '@components/cards/cards';

const CardsScreenContent = ({ isCardshidden }) => {
  const contentContainerAnimation = {
    initial: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  };

  const buttonHoverAnimation = {
    whileHover: {
      scale: 1.2,
      boxShadow: '0 0 15px #7227cf',
    },
    whileTap: {
      scale: 0.8,
    },
  };

  return (
    <>
      {
        <AnimatePresence>
          isCardshidden && (
          <FadeLines />
          <div className="home-page-container container-sm position-relative">
            <motion.div
              {...contentContainerAnimation}
              className="contentContainer"
            >
              <div className="home-content-container w-100 d-flex align-items-center px-4">
                <div className="info-column d-flex justify-content-center text-center">
                  <div className="info-container position-relative">
                    <div className="text-container d-flex flex-column text-start">
                      <h1 className="my-2">
                        I`m <span className="name-text">Oksana Tkachenko</span>
                      </h1>
                      <p>Frontend developer</p>
                    </div>
                    <div className="contacts-container gx-4 d-flex justify-content-start">
                      <div className="contact-btn-container">
                        <motion.button
                          className="custom-btn rounded-pill w-100  py-2 px-4"
                          {...buttonHoverAnimation}
                        >
                          Contact
                        </motion.button>
                      </div>
                      <div className="social-media d-flex align-items-end gap-2">
                        {!isCardshidden && <ContactIcons />}
                      </div>
                    </div>
                    <TwoCurvedLines />
                  </div>
                </div>
              </div>
              <div className="image-back px-4 overflow-hidden col-4 d-flex align-items-end">
                <picture>
                  <source media="(max-width: 768px)" srcSet={photoForMobile} />
                  <source media="(min-width: 768px)" srcSet={oksanaPhoto} />
                  <img
                    className="oksanaPhoto img-fluid d-block w-100 h-100"
                    src={oksanaPhoto}
                    alt="Oksana"
                  />
                </picture>
              </div>
            </motion.div>
          </div>
          )
        </AnimatePresence>
      }
    </>
  );
};

const HomeScreen = React.forwardRef(
  ({ setCardsHidden, isCardsHidden }, ref) => {
    const isMobile = useMemo(
      () =>
        /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768,
      []
    );

    const handleFlipCards = () => {
      if (isMobile) return;
      setCardsHidden(true);
      document.body.classList.add('no-scroll');

      setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 1000);
    };

    useEffect(() => {
      if (isMobile) return;
      const handleScroll = () => {
        handleFlipCards();
        window.removeEventListener('scroll', handleScroll);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <motion.div className="homeScreen" ref={ref} onClick={handleFlipCards}>
        {isMobile ? (
          <CardsScreenContent />
        ) : (
          <>
            <Cards isCardsHidden={isCardsHidden} />
            {isCardsHidden && <CardsScreenContent />}
          </>
        )}
      </motion.div>
    );
  }
);

HomeScreen.displayName = 'HomeScreen';
export default HomeScreen;
