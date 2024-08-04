import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import SignUp from './components/SignUp';
import ExpenseChart from './ExpenseChart';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';
import ExpenseSummary from './ExpenseSummary';

function App() {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const handleSignUp = (userInfo) => {
    setUser(userInfo);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  const deleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <Router>
      <div>
        <Header user={user} />

        <Routes>
          <Route
            path="/expenselist"
            element={
              <ExpenseList
                expenses={expenses}
                updateExpense={updateExpense}
                deleteExpense={deleteExpense}
              />
            }
          />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
          <Route path="/expenseform" element={<ExpenseForm setExpenses={setExpenses} />} />
          <Route
            path="/expenseitem"
            element={
              <ExpenseItem
                expenses={expenses}
                updateExpense={updateExpense}
                deleteExpense={deleteExpense}
              />
            }
          />
          <Route path="/expensesummary" element={<ExpenseSummary expenses={expenses} />} />
          <Route path="/expensechart" element={<ExpenseChart expenses={expenses} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
