import { List } from './Statistics.styled';
export const Statistics = proops => {
  return (
    <>
      <h2 className="title">Statistics</h2>
      <List className="List">
        <li className="Item">Good:</li>
        <li className="Item">Neutral:</li>
        <li className="Item">Bad:</li>
      </List>
    </>
  );
};
