import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import Feedback from 'components/Feedback';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import 'index.css';

export class App extends Component {
  static propTypes = {
    state: PropTypes.arrayOf(
      PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = btnId => {
    this.setState(prevState => ({ [btnId]: prevState[btnId] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const persentage = (good * 100) / (good + neutral + bad);

    return good ? Math.round(persentage) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnKeys = Object.keys(this.state).map(key => key);
    const noFeedback = good || neutral || bad;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Feedback options={btnKeys} onLeaveFeedback={this.onClickBtn} />
        </Section>
        <Section title={'Please leave feedback'}>
          {noFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </>
    );
  }
}
