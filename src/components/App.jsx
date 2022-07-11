import { Component } from 'react';
import Feedback from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    console.log('Good');
  };

  onClickNeutral = () => {
    console.log('Neutral');
  };
  onClickBad = () => {
    console.log('Bad');
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Feedback
          onGood={this.onClickGood}
          onNeutral={this.onClickNeutral}
          onBad={this.onClickBad}
        />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}
