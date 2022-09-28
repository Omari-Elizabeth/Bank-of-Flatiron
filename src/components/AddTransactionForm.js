import React, { useState, useEffect } from "react";

function AddTransactionForm({postTransaction,}) {
  const [postedTransactions, setPostedTransactions] = useState(null);
  useEffect(() => {
    postTransaction(postedTransactions)
  },[postedTransactions]);

  // const [date, setDate] = useState([]);
  // const [description, setDescription] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [amount, setAmount] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
    };
    setPostedTransactions(newTransaction)
    // console.log(newTransaction)
    // const updatedTransaction = [...transactions, newTransaction];
      e.target.reset()
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            // value={date}
            // onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
