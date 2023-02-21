import { List, FeedbackBtnForm } from './FeedbackBtn.styled';
export const FeedbackBtn = proops => {
  return (
    <FeedbackBtnForm>
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
    </FeedbackBtnForm>
  );
};
