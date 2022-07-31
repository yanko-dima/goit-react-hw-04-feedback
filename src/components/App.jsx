import { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import Feedback from 'components/Feedback';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import 'index.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const onClickBtn = btnId => {
    btnId === 'good' && setGood(good => good + 1);
    btnId === 'neutral' && setNeutral(neutral => neutral + 1);
    btnId === 'bad' && setBad(bad => bad + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const persentage = (good * 100) / (good + neutral + bad);

    return good ? Math.round(persentage) : 0;
  };

  const btnKeys = Object.keys(options).map(key => key);
  const noFeedback = good || neutral || bad;

  return (
    <>
      <Section title={'Please leave feedback'}>
        <Feedback options={btnKeys} onLeaveFeedback={onClickBtn} />
      </Section>
      <Section title={'Please leave feedback'}>
        {noFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </>
  );
};
