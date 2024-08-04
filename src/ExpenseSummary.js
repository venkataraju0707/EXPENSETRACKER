import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  const categorySummary = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <h3>By Category:</h3>
      {Object.keys(categorySummary).map(category => (
        <p key={category}>{category}: ${categorySummary[category].toFixed(2)}</p>
      ))}
    </div>
  );
};

export default ExpenseSummary;
