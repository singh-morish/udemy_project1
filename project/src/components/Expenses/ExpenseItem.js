import Card from "../UI/Card";
// import { useState } from "react"; // useState is a react hook, all the react hook start with word "use". react hook can't be called outside the functions or nor inside any nested function
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title); // we will be assigning the value using the useState function, first element in the array is the current state value and the second element is the function for updating the first value
  // const expenseDate = new Date(2021, 2, 28 )
  // const expenseTitle = "car insurance";
  // const expenseAmount = 213.337;
  // let title = props.title;



  // const buttonChangeHandl


  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div>
       */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
        <div className="expense-item__price">$ {props.amount}</div>
      {/* event and event handler  we wish to change the title of the component when the chnage title button is clicked*/}
    </Card>
    // <div className = "expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //     <div className = "expense-item__description">
    //         <h2>{expenseTitle}</h2>
    //     <div className = "expense-item__price">
    //         {expenseAmount}</div>
    //     </div>
    // </div>
    // <div className = "expense-item">
    //     <div>March 28 2021</div>
    //     <div className = "expense-item__description">
    //         <h2>Car insurance</h2>
    //     <div className = "expense-item__price">
    //         $213.43</div>
    //     </div>
    // </div>
  );
}

export default ExpenseItem;
