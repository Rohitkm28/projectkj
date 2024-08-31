// src/components/Summary.js

import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const Summary = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expenses;

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default Summary;
