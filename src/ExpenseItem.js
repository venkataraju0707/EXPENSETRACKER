import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const ExpenseItem = ({ expense, updateExpense, deleteExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <div>
      {isEditing ? (
        <ExpenseForm
          expenseToEdit={expense}
          editExpense={(updatedExpense) => {
            updateExpense(updatedExpense);
            setIsEditing(false);
          }}
        />
      ) : (
        <div>
          <span>{expense.name}</span>
          <span>{expense.amount}</span>
          <span>{expense.date}</span>
          <span>{expense.category}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;
