
import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const AddTransaction = () => {
  const { addTransaction } = useContext(FinanceContext);
  const [formData, setFormData] = useState({
    type: 'income',
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.category || !formData.date) {
      alert('Please fill out all fields.');
      return;
    }
    addTransaction(formData);
    setFormData({
      type: 'income',
      amount: '',
      category: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <div>
        <label>Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;

