import "./App.css";
import { useState } from "react";
// import { useEffect } from "react";

function App() {
  //count how many expense items
  let count = 0;

  //information to be collected for expense tracker
  const [userInput, setInput] = useState({
    Item: "",
    Amount: "",
    Category: "",
    ExpenseDate: "",
  });

  //set user input
  const handleChange = (e) => {
    const label = e.target.name;
    const input = e.target.value;
    setInput({ ...userInput, [label]: input });
    console.log(userInput);
  };

  //store expense item in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    count++;
    console.log("this is submit " + userInput);
    window.localStorage.setItem(`expense${count}`, JSON.stringify(userInput));
    window.localStorage.setItem("count", JSON.stringify(count));
  };

  // const handleDisplay = () => {
  //   const getExpense = JSON.parse(window.localStorage.getItem("expense"));
  //   console.log(getExpense);
  // };

  // useEffect(() => {
  //   handleDisplay();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">Expense Tracker</header>
      <div>
        <form>
          <input type="text" name="Item" onChange={handleChange} />
          <input type="text" name="Amount" onChange={handleChange} />
          <input type="text" name="Category" onChange={handleChange} />
          <input type="date" name="ExpenseDate" onChange={handleChange} />
          {/* <input type="submit" value="Add Expense" /> */}
        </form>
        <button onClick={handleSubmit}>Add Expenses</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
