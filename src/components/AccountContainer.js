import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
 const [transactions, setTransactions ]= useState([])
 const [transactionUpdate, setTransactionUpdate]=useState({...transactions})

//  const [searchValue, setSearchValue ]= useState([])
 useEffect(() => {
  fetch ('http://localhost:8001/transactions')
  .then (res => res.json())
  .then (transaction =>{
      // console.log(transaction)
      setTransactions(transaction)
      // setSearchValue(transaction)
    } )
 },[transactionUpdate])

// search 
async function searchTransaction(string){
  fetch ('http://localhost:8001/transactions')
  .then (res => res.json())
  .then (transaction =>{
      // console.log(transaction)
      let filteredTransaction = transaction.filter(items => {
        // filter to get unique
        return items.description.includes(string)
      })
      // update fetched data
      setTransactions(filteredTransaction)
      // setSearchValue(transaction)
    } )
  }




 async function postTransaction(obj){

  await fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers:{
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(obj)
       
    })
      .then((response) => response.json())
      .then((response) => 
      {
        let res = []
        res.push(response)
        setTransactionUpdate(...res)
      })
 }

//  function change(event){
//   console.log(event.target.value)
//  }
  // console.log(transactions)

  return (
    <div>
      <Search change={searchTransaction} />
      <AddTransactionForm postTransaction={postTransaction}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
