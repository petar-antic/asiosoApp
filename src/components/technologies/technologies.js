import React, { useState } from 'react';
import classes from './Technologies.module.scss';
import { motion } from 'framer-motion';

import firstspirit from '../../assets/images/firstspirit.png';
import pimcore from '../../assets/images/pimcore.png';
import useWindowResize from '../../hooks/useWindowSize';

const technologies = [
  {
    id: 1,
    title: 'First Spirit',
    text: 'Impress customers with lively content',
    imgSrc: firstspirit,
  },
  {
    id: 2,
    title: 'Pimcore',
    text: 'Digital future with single source publishing',
    imgSrc: pimcore,
  },
];

const Technologies = () => {
  const { width } = useWindowResize();
  const [imgSrc, setImgSrc] = useState(technologies[0].imgSrc);
  const [active, setActive] = useState(1);

  const handleChange = (id, imgSrc) => {
    setImgSrc(imgSrc);
    setActive(id);
  };

  return (
    <div className={classes.technologies}>
      <div className={classes.technologiesAndCards}>
        <div className={classes.technologiesHeading}>
          <span>Technologies</span>
          <h2>Impressing our{<br />} customers</h2>
          <p>
            Our efforts to establish long-term and sustainable customer
            relationships are highly valued by our customers
          </p>
        </div>
        <div className={classes.technologiesCards}>
          {technologies.map((technology) => (
            <button
              key={technology.id}
              id={technology.id}
              className={classes.technologyCard}
              onClick={() => handleChange(technology.id, technology.imgSrc)}
              style={{
                backgroundColor:
                  active === technology.id ? '#F5F2F7' : '#FFFFFF',
              }}
            >
              {width > 767 && <i className="bi bi-check-lg"></i>}
              <div className={classes.cardHeading}>
                <h5 className={classes.cardTitle}>{technology.title}</h5>
                <p className={classes.cardText}>{technology.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={imgSrc} alt="technologyImg" />
      </motion.div>
    </div>
  );
};

export default Technologies;

// className={selected ? `card-img-top ${classes.productImg}`}
