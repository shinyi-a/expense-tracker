import "./App.css";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  //initialise array
  let arr = [];

  //count how many expense items
  let count;

  //checks if count and expense are in local storage
  if (window.localStorage.getItem("count") === null) {
    count = 0;
    // console.log("this is count " + count);
  } else {
    count = JSON.parse(window.localStorage.getItem("count"));
    for (let i = 1; i <= count; i++) {
      arr.push(JSON.parse(window.localStorage.getItem(`expense${i}`)));
    }
    // console.log("this is count " + count);
  }

  //check if delete is trigger
  const [del, setDel] = useState(false);

  //maps all expenses
  const displayExpenses = arr.map((item) => (
    <tr key={new Date() + Math.random()}>
      <td>{arr.indexOf(item) + 1}.</td>
      <td>{item.Item}</td>
      <td>{item.Amount}</td>
      <td>{item.Category}</td>
      <td>{item.ExpenseDate}</td>
    </tr>
  ));

  let totalAmt = 0;
  let totalFood = 0;
  let totalEntertainment = 0;
  let totalShopping = 0;
  let totalBills = 0;
  let totalInsurance = 0;
  let totalLoans;

  arr.map((item) => {
    if (item.Category === "Food") {
      totalFood = totalFood + parseFloat(item.Amount);
    }
    if (item.Category === "Entertainment") {
      totalEntertainment = totalEntertainment + parseFloat(item.Amount);
    }
    if (item.Category === "Shopping") {
      totalShopping = totalShopping + parseFloat(item.Amount);
    }
    if (item.Category === "Bills") {
      totalBills = totalBills + parseFloat(item.Amount);
    }
    if (item.Category === "Insurance") {
      totalInsurance = totalInsurance + parseFloat(item.Amount);
    }
    if (item.Category === "Loans") {
      totalLoans = totalLoans + parseFloat(item.Amount);
    }
    totalAmt = totalAmt + parseFloat(item.Amount);
    return totalAmt;
  });
  console.log("totalfood " + totalFood);

  const data = {
    labels: [
      "Food",
      "Entertainment",
      "Shopping",
      "Bills",
      "Insurance",
      "Loans",
    ],
    datasets: [
      {
        data: [
          totalFood,
          totalEntertainment,
          totalShopping,
          totalBills,
          totalInsurance,
          totalLoans,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //information to be collected for expense tracker
  const [userInput, setInput] = useState({
    Item: "",
    Amount: "",
    Category: "",
    ExpenseDate: "",
  });

  //check if all inputs are entered
  const [inputError, setInputError] = useState(false);

  //set user input
  const handleChange = (e) => {
    const label = e.target.name;
    const input = e.target.value;
    setInput({ ...userInput, [label]: input });
    // console.log(userInput);
  };

  //to validate if amount is in numbers and 2 decimal place
  const validateAmount = (amt) => {
    const re = /^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/;
    return re.test(amt);
  };

  //to check if amount is in number and 2 decimal place
  const [amtDecimal, setAmtDecimal] = useState(null);

  //to check amount on blur
  const handleAmtBlur = () => {
    let amtValid = validateAmount(userInput.Amount);
    amtValid ? setAmtDecimal(true) : setAmtDecimal(false);
  };

  //store expense item in local storage and clear form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInput.Item &&
      userInput.Amount &&
      userInput.Category &&
      userInput.ExpenseDate &&
      validateAmount(userInput.Amount)
    ) {
      setInputError(false);
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
    } else {
      setInputError(true);
    }
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
    <div className="container">
      <div className="expensetracker">
        <header className="header">Expense Tracker</header>
        <div className="headerline" />
        <div className="expenseform">
          <div className="piecontainer">
            <div className="piechart">
              <Pie
                data={data}
                height={"300px"}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
          <form>
            <div className="expenseinput">
              <label htmlFor="Item">Expense: </label>
              <input
                type="text"
                name="Item"
                value={userInput.Item}
                onChange={handleChange}
              />
            </div>
            <div className="expenseinput">
              <label htmlFor="Amount">Amount($): </label>
              <input
                type="text"
                name="Amount"
                value={userInput.Amount}
                onChange={handleChange}
                onBlur={handleAmtBlur}
              />
            </div>
            {amtDecimal === false ? (
              <span className="inputerror">
                Please enter a 2 decimal number
              </span>
            ) : (
              ""
            )}
            <div className="expenseinput">
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
            </div>
            <div className="expenseinput">
              <label htmlFor="Amount">Date of Expenditure: </label>
              <input
                type="date"
                name="ExpenseDate"
                value={userInput.ExpenseDate}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="expenseinput">
            <button onClick={handleSubmit}>Add Expenses</button>
          </div>
          {inputError ? (
            <span className="inputerror">Please enter all the fields</span>
          ) : (
            ""
          )}
        </div>
        <div className="expensetable">
          <table>
            <tbody>
              <tr>
                <th>No.</th>
                <th>Expenses</th>
                <th>Amount ($)</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
              {del ? "" : displayExpenses}
            </tbody>
          </table>
          <div className="expenseinput">
            <button onClick={handleDelete}>Clear All Expenses</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
