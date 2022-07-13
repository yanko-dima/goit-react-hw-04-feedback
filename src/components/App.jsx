import { Component } from 'react';
import PropTypes from 'prop-types';
import Feedback from 'components/Feedback';
import Statistics from 'components/Statistics';
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

  onClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onClickNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onClickBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const persentage = (good * 100) / (good + neutral + bad);

    return good ? Math.round(persentage) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <section className="section">
        <h1>Please leave feedback</h1>
        <Feedback
          onGood={this.onClickGood}
          onNeutral={this.onClickNeutral}
          onBad={this.onClickBad}
        />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}
