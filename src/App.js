import "./App.css";
import { useState } from "react";

function App() {
  //initialise array
  let arr = [];

  //count how many expense items
  let count;

  //checks if count and expense are in local storage
  if (window.localStorage.getItem("count") === null) {
    count = 0;
    console.log("this is count " + count);
  } else {
    count = JSON.parse(window.localStorage.getItem("count"));
    for (let i = 1; i <= count; i++) {
      arr.push(JSON.parse(window.localStorage.getItem(`expense${i}`)));
    }
    console.log("this is count " + count);
  }

  //check if delete is trigger
  const [del, setDel] = useState(false);

  //maps all expenses
  const displayExpenses = arr.map((item) => (
    <li key={new Date() + Math.random()}>{item.Item}</li>
  ));

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

  //store expense item in local storage and clear form
  const handleSubmit = (e) => {
    e.preventDefault();
    count++;
    console.log("this is submit " + userInput);
    window.localStorage.setItem(`expense${count}`, JSON.stringify(userInput));
    window.localStorage.setItem("count", JSON.stringify(count));
    setDel(false);
    setInput({
      Item: "",
      Amount: "",
      Category: "",
      ExpenseDate: "",
    });
    let dropDown = document.getElementById("cat");
    dropDown.selectedIndex = "";
  };

  //clear all items in local storage
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("delete clicked");
    window.localStorage.clear();
    count = 0;
    arr = [];
    setDel(true);
  };

  return (
    <div className="App">
      <header className="App-header">Expense Tracker</header>
      <div>
        <form>
          <label htmlFor="Item">Expense: </label>
          <input
            type="text"
            name="Item"
            value={userInput.Item}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="Amount">Amount($): </label>
          <input
            type="text"
            name="Amount"
            value={userInput.Amount}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="Category">Category: </label>
          <select name="Category" onChange={handleChange} id="cat">
            <option value=""></option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Insurance">Insurance</option>
            <option value="Loans">Loans</option>
          </select>
          <br />
          <br />
          <label htmlFor="Amount">Date of Expenditure: </label>
          <input
            type="date"
            name="ExpenseDate"
            value={userInput.ExpenseDate}
            onChange={handleChange}
          />
          <br />
          <br />
        </form>
        <button onClick={handleSubmit}>Add Expenses</button>
        <button onClick={handleDelete}>Clear All Expenses</button>
      </div>
      <div>
        <ol type="1">{del ? "" : displayExpenses}</ol>
      </div>
    </div>
  );
}

export default App;
