import React from 'react';
import classes from '../Footer.module.scss';
import useWindowResize from '../../../hooks/useWindowSize';

const SubscribePart = () => {
  const { width } = useWindowResize();

  return (
    <div className={classes.subscribePart}>
      <div className={classes.subscribeHeading}>
        <h4>Subscribe to our{<br />} Newsletter!</h4>
        <p>Do you want to be part of something special?</p>
      </div>
      <form className="needs-validation was-validated" noValidate>
        <div
          className={`input-group ${
            width < 768 ? 'input-group-sm' : 'input-group-lg'
          }`}
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter your e-mail"
            required
          />
        </div>
        <button
          type="submit"
          className={`btn ${width < 768 ? 'btn-sm' : 'btn-lg'}`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribePart;
