import './ExpenseItem.css';
import React, { useState } from 'react';
import Card from '../UI Components/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  const [title, setTitle]=useState(props.title);
    

    const clickHandler=()=>{
       setTitle('Updated!');
       console.log(title);
    };
  return (
    <div className="expense">
      <Card className="expense-item">
       <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
       </Card>
    </div>
  );
}
export default ExpenseItem;
