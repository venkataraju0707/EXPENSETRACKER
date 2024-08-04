import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  // Summarize expenses by category
  const categorySummary = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += parseFloat(expense.amount);
    return acc;
  }, {});

  // Prepare data for the chart
  const data = {
    labels: Object.keys(categorySummary),
    datasets: [
      {
        data: Object.values(categorySummary),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA64D6', '#64D6AA'],
      },
    ],
  };

  return (
    <div>
      <h2>Expense Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;
