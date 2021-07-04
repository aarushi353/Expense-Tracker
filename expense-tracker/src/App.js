import "./App.css";
import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "New book",
      amount: 99.31,
      date: new Date(2020, 10, 1),
    },
    { id: "e2", title: "New TV", amount: 869.92, date: new Date(2021, 12, 17) },
    {
      id: "e3",
      title: "New Chair",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
