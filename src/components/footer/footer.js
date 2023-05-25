import React from 'react';
import classes from './Footer.module.scss';
import useWindowResize from '../../hooks/useWindowSize';
import SubscribePart from './subscribe/subscribePart';
import { motion } from 'framer-motion';

const Footer = () => {
  const { width } = useWindowResize();

  return (
    <div className={classes.footer}>
      <SubscribePart />
      <div className={classes.contact}>
        <motion.div
          className={classes.contactHeading}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
        >
          <span>How can we help?</span>
          <h2>Contact us.{<br />} Let’s Talk</h2>
        </motion.div>
        <div className={classes.contactInfo}>
          {width > 767 && (
            <motion.div
              className={classes.resorce}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <h6>Resorce</h6>
              <div className={classes.resorceNav}>
                <span>Abous Us</span>
                <span>Dashboard & Tool</span>
                <span>Mobile Design</span>
              </div>
            </motion.div>
          )}
          <div className={classes.locationAndInfo}>
            <motion.div
              className={classes.location}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
            >
              {width > 767 && <h6>Where we are</h6>}
              <div className={classes.textAndIcon}>
                <i className="bi bi-geo-alt-fill"></i>
                <span>Wilhelmine-Reichard-Str.{<br />} 2680935 Munich</span>
              </div>
            </motion.div>
            <motion.div
              className={classes.information}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.1, ease: 'easeIn' }}
            >
              {width > 767 && <h6>Our contact info</h6>}
              <div className={classes.textAndIcon}>
                <i className="bi bi-envelope-fill"></i>
                <span>info@asioso.de</span>
              </div>
              <div className={classes.telephone}>
                <i className="bi bi-telephone-fill"></i>
                <a href="4989954570610">49 89 - 9 54 57 06 10</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
