import React from 'react';
import classes from './OurFocus.module.scss';
import { motion } from 'framer-motion';

import cardImg1 from '../../assets/images/focusCard1.png';
import cardImg2 from '../../assets/images/focusCard2.png';
import cardImg3 from '../../assets/images/focusCard3.png';

const OurFocus = () => {
  return (
    <div className={classes.ourFocus}>
      <div className={classes.focusHeading}>
        <span>What do we do?</span>
        <h2>Our Focus</h2>
      </div>
      <div className={classes.focusList}>
        {/* Focus Card 1 */}
        <motion.div
          className={classes.focusCard}
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <img src={cardImg1} alt="cardimg" />
          <div className={classes.cardBody}>
            <h5 className={classes.cardTitle}>Customer</h5>
            <p className={classes.cardText}>
              We are not industry oriented,{<br />} we are customer oriented.
            </p>
            <button type="button" className="btn btn-light btn-sm">
              View Details
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </motion.div>
        {/* Focus Card 2 */}
        <motion.div
          className={classes.focusCard}
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
        >
          <img src={cardImg2} alt="cardimg" />
          <div className={classes.cardBody}>
            <h5 className={classes.cardTitle}>Content</h5>
            <p className={classes.cardText}>
              Our decades of experience with{<br />} Content & customer
              experiences{<br />} help us to do this.
            </p>
            <button type="button" className="btn btn-light btn-sm">
              Learn More
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </motion.div>
        {/* Focus Card 3 */}
        <motion.div
          className={classes.focusCard}
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.1, ease: 'easeIn' }}
        >
          <img src={cardImg3} alt="cardimg" />
          <div className={classes.cardBody}>
            <h5 className={classes.cardTitle}>Touchpoints</h5>
            <p className={classes.cardText}>
              In every project we try to bring{<br />} out the best for our
              client.
            </p>
            <button type="button" className="btn btn-light btn-sm">
              Contact With Us
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurFocus;
