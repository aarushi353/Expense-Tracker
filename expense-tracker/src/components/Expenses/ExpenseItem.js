import './ExpenseItem.css';
import Card from '../UI Components/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  return (
    <div className="expense">
      <Card className="expense-item">
       <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
       </Card>
    </div>
  );
}
export default ExpenseItem;
