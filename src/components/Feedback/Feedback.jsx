import PropTypes from 'prop-types';
import css from 'components/Feedback/Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <ul className={css.bbn__list}>
    {options.map(option => (
      <li key={option} className={css.bbn__item}>
        <button
          className={css.btn}
          type="button"
          onClickCapture={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
