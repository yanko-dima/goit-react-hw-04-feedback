import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statictcs__list}>
      <li className={css.statictcs__item}>Good: {good}</li>
      <li className={css.statictcs__item}>Neutral: {neutral}</li>
      <li className={css.statictcs__item}>Bad: {bad}</li>
      <li className={css.statictcs__item}>Total: {total}</li>
      <li className={css.statictcs__item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
