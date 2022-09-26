import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
 const [transactions, setTransactions ]= useState([])
 useEffect(() => {
  fetch ('http://localhost:8001/transactions')
  .then (res => res.json())
  .then (transactions => setTransactions(transactions) )
 },[])

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
