import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import "../styles/dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Dashboard() {
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
  });

  // GET TOKEN
  const token = localStorage.getItem("token");

  // FETCH EXPENSES
  const fetchExpenses = async () => {
    try {
      const response = await API.get("/expenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // LOAD EXPENSES
  useEffect(() => {
    fetchExpenses();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD EXPENSE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/expenses", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Expense Added");

      setFormData({
        title: "",
        amount: "",
        category: "",
      });

      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE EXPENSE
  const deleteExpense = async (id) => {
    try {
      await API.delete(`/expenses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  // CHART DATA
  const categoryData = expenses.map((expense) => ({
    name: expense.category,
    value: expense.amount,
  }));

  // CHART COLORS
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
  ];

  // TOTAL EXPENSE
  const totalAmount = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="dashboard">
      <div className="top-bar">
        <h1>Expense Tracker</h1>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="total-box">
        <h2>Total Expense: ₹{totalAmount}</h2>
      </div>

      <div className="form-box">
        <h2>Add Expense</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Expense title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <button className="add-btn" type="submit">
            Add Expense
          </button>
        </form>
      </div>

      <div className="total-box">
        <h2>Expense Analytics</h2>

        <PieChart width={window.innerWidth < 768 ? 300 : 400} height={300}>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </div>

      <h2>Your Expenses</h2>

      {expenses.length === 0 ? (
        <p className="no-expense">No expenses found</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense._id} className="expense-card">
            <h3>{expense.title}</h3>

            <p>Amount: ₹{expense.amount}</p>

            <p>Category: {expense.category}</p>

            <button
              className="delete-btn"
              onClick={() => deleteExpense(expense._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;