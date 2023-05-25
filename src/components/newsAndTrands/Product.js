import React from 'react';
import classes from './NewsAndTrands.module.scss';
import noImage from '../../assets/images/noImage.jpg';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const product = props.product;

  const event = new Date(product.date);
  const jsonDate = event.toJSON();
  const dateString = new Date(jsonDate).toDateString();

  return (
    <div className={`card ${classes.card}`}>
      <Link to={`/news/${product.source.name}`} state={{ product, dateString }}>
        <img
          src={product.urlToImage === null ? noImage : product.urlToImage}
          className={`card-img-top ${classes.productImg}`}
          alt="newsImg"
          onClick={product.show}
        />
      </Link>
      <div className={`card-body ${classes.cardBody}`}>
        <span className={classes.newsDate}>{dateString}</span>
        <Link
          to={`/news/${product.source.name}`}
          state={{ product, dateString }}
          className="text-decoration-none"
        >
          <h6 className={classes.cardTitle} onClick={product.show}>
            {product.title}
          </h6>
        </Link>
      </div>
    </div>
  );
}
