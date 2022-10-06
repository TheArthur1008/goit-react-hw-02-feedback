import React from 'react';
// import PropTypes from 'prop-types';
import FeedbackButton from './FeedbackButton';
import FeedbackValue from './FeedbackValue';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelGoodButton = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  hendelNeutralButton = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  hendelBadButton = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  countPositiveFeedbackPercentage = () => (this.state.good * 100) / this.countTotalFeedback();

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.feedback}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <FeedbackButton
          onHendelGood={this.hendelGoodButton}
          onHendelNeutral={this.hendelNeutralButton}
          onHendelBad={this.hendelBadButton}
        />
        <FeedbackValue
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
