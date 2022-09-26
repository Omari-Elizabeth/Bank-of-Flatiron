import React from "react";

function Transaction(props) {
 const newTransaction = props.transactions.map ((transaction) => {
   
    return (
      <tr key = {transaction.id}>
        
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  })
 return (
  <React.Fragment>
    {newTransaction}
  </React.Fragment>
 )
}

export default Transaction;
