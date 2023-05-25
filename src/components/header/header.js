import React, { useState } from 'react';
import { motion } from 'framer-motion';

import NavBar from '../navBar/navBar';
import classes from './Header.module.scss';
import useWindowResize from '../../hooks/useWindowSize';
import VideoModal from '../modal/videoModal';

const Header = () => {
  const { width } = useWindowResize();
  const [modal, setModal] = useState(false);

  return (
    <header className={classes.header}>
      <NavBar />
      <div className={classes.content}>
        <motion.div
          className={classes.headings}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {width > 767 && <span>We are asioso</span>}
          <h1>
            We make digital{<br />}
            business simple
          </h1>
          <p>
            In everything we do, we simply want to inspire people. Through our
            ideas we{<br />} strongthen brands and inspire their customers. We
            create great digital{<br />} experiecnces for your visitors.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className={classes.buttons}
        >
          <div className={classes.explore}>
            <button
              type="button"
              className={`btn btn-outline-light ${
                width < 1440 ? 'btn-sm' : 'btn-lg'
              } `}
            >
              Explore Now
              {width > 767 && <i className="bi bi-arrow-right"></i>}
            </button>
          </div>
          <div className={classes.play}>
            <button
              type="button"
              className={`btn btn-light ${width < 1440 ? 'btn-sm' : 'btn-lg'} `}
              onClick={() => setModal(true)}
            >
              <i className="bi bi-play"></i>
            </button>
            {width > 767 && <span>Watch Video</span>}
          </div>
        </motion.div>
      </div>
      {modal === true ? (
        <VideoModal
          hide={() => setModal(false)}
          backdrop="static"
          keyboard={false}
        />
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
