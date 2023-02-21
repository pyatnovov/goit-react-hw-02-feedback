import { GlobalStyle } from './GlobalStyle';
import { FeedbackBtnForm, List } from './App.styled';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = state => {
    const result = state.good + state.neutral + state.bad;
    return result;
  };
  countPositiveFeedbackPercentage = state => {
    const { good } = state;
    if (good === 0) {
      return 0;
    }
    const result = this.countTotalFeedback(this.state);
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  render() {
    <GlobalStyle />;
    return (
      <FeedbackBtnForm className="FeedbackForm">
        <h1 className="title">Please leave feedback</h1>
        <List>
          <li className="btnListItem">
            <button className="Btn">Good</button>
          </li>

          <li className="btnListItem">
            <button className="Btn">Normal</button>
          </li>

          <li className="btnListItem">
            <button className="Btn">Bad</button>
          </li>
        </List>
        <h2 className="title">Statistics</h2>
        <List className="List">
          <li className="Item">Good:{this.state.good}</li>
          <li className="Item">Neutral:{this.state.neutral}</li>
          <li className="Item">Bad:{this.state.bad}</li>
          <li className="Item">Total:{this.countTotalFeedback(this.state)}</li>
          <li className="Item">
            Positive feedback:{this.countPositiveFeedbackPercentage(this.state)}
            %
          </li>
        </List>
      </FeedbackBtnForm>
    );
  }
}
