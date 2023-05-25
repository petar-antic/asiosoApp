import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { motion } from 'framer-motion';

import classes from './NewsAndTrands.module.scss';
import Product from './Product';
import { responsive } from './data';

const fetchData = async (category) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=153e91e810634a27bb1bb22cc8e4165b`
  );
  return res.json();
};

const NewsAndTrands = () => {
  const [category, setCategory] = useState('');
  const { data } = useQuery(['news', category], () => fetchData(category), {
    keepPreviousData: true,
  });

  return (
    <div className={classes.newsAndTrands}>
      <div className={classes.newsAndTrandsHeading}>
        <span>Curiocity</span>
        <h2>News and Trands</h2>
      </div>
      <div className={classes.categoryFilter}>
        <p>Filter by category:</p>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="categoryInput"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <motion.div
        className={classes.newsList}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        <Carousel responsive={responsive} itemClass={classes.product}>
          {data ? (
            data?.articles.map((product, index) => {
              return <Product key={index} product={product} />;
            })
          ) : (
            <></>
          )}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default NewsAndTrands;
