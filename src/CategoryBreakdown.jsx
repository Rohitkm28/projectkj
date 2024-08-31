// src/components/CategoryBreakdown.js

import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { FinanceContext } from '../context/FinanceContext';

const CategoryBreakdown = () => {
  const { transactions } = useContext(FinanceContext);

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === 'expense'
  );

  const categories = [...new Set(expenseTransactions.map((t) => t.category))];
  const data = categories.map((category) =>
    expenseTransactions
      .filter((t) => t.category === category)
      .reduce((acc, curr) => acc + Number(curr.amount), 0)
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h3>Category Breakdown</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default CategoryBreakdown;
