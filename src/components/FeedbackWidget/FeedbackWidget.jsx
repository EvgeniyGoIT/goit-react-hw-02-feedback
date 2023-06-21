import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (category) => {
    this.setState((prevState) => ({
      [category]: prevState[category] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const handleFeedback = this.handleFeedback;
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onClickFeedback={handleFeedback}
          />
        </Section>
        
        <Section title='Statistics'>
          {totalFeedback > 0 ? (
            <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            totalFeedback = {totalFeedback}
            positiveFeedbackPercentage = {positiveFeedbackPercentage}
          />
          ) : (
              <Notification message="There is no feedback" />
          )}
          
        </Section>
             
      </>
    );
  }
}

export default FeedbackWidget;