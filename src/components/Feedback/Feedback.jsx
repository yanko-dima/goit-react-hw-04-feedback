import PropTypes from 'prop-types';
import { Component } from 'react';
import css from 'components/Feedback/Feedback.module.css';
import { render } from '@testing-library/react';

const Feedback = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button className={css.btn} type="button" onClick={onGood}>
        Good
      </button>
      <button className={css.btn} type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button className={css.btn} type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

Feedback.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default Feedback;
