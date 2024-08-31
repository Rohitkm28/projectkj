// src/components/TransactionList.js

import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const TransactionList = () => {
  const { transactions } = useContext(FinanceContext);

  return (
    <div>
      <h3>Transaction List</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.date}</span> -{' '}
            <span>{transaction.category}</span>: ${transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
