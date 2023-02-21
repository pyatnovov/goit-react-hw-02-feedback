import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <section class="FeedbackForm">
      <GlobalStyle />
      <FeedbackBtn />
      <Statistics />
    </section>
  );
};
