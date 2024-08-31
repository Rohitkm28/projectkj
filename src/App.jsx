import React from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import CategoryBreakdown from "./components/CategoryBreakdown";
import FinanceProvider from "./context/FinanceContext";

const App = () => {
  return (
    <FinanceProvider>
      <div className="App">
        <h1>Personal Finance Tracker</h1>
        <AddTransaction />
        <TransactionList />
        <Summary />
        <CategoryBreakdown />
      </div>
    </FinanceProvider>
  );
};

export default App;
