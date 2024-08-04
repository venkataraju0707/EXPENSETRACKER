import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ExpenseForm = ({ addExpense, editExpense, expenseToEdit }) => {
  const [expense, setExpense] = useState(expenseToEdit || { name: '', amount: '', date: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof addExpense === 'function') {
      if (expenseToEdit) {
        editExpense(expense);
      } else {
        addExpense({ ...expense, id: Date.now() });
      }
      setExpense({ name: '', amount: '', date: '', category: '' });
    } else {
      console.error('addExpense is not a function');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="name" value={expense.name} onChange={handleChange} placeholder="Expense Name" required />
      <Input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" required />
      <Input type="date" name="date" value={expense.date} onChange={handleChange} required />
      <Input type="text" name="category" value={expense.category} onChange={handleChange} placeholder="Category" required />
      <Button type="submit">{expenseToEdit ? 'Update' : 'Add'} Expense</Button>
    </Form>
  );
};

export default ExpenseForm;
