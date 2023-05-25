import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const News = () => {
  let { state } = useLocation();
  const product = state.product;
  const date = state.dateString;

  console.log(state);

  return (
    <motion.div
      className="news"
      initial={{ x: -500 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
    >
      <h6>{product.title}</h6>
      <motion.div
        className="imageContainer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={product.urlToImage} alt="newsImg" />
        <div className="authorAndDate">
          <span>{product.author}</span>
          <span>{date}</span>
        </div>
      </motion.div>
      <span>{product.description}</span>
      <p>
        Link to news: <a href={product.url}>{product.url}</a>
      </p>
    </motion.div>
  );
};

export default News;
