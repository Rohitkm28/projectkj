// src/context/FinanceContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FinanceContext = createContext();

const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:5000/transactions');
      setTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    const response = await axios.post(
      'http://localhost:5000/transactions',
      transaction
    );
    setTransactions([...transactions, response.data]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
