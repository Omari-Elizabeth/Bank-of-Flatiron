import React, { useEffect, useState } from "react";

function Search({ change }) {
  const [string, setString] = useState("");
  useEffect(() => {
    change(string)
  }, [string]);

  function handleSearch(e){
    e.preventDefault();
    setString(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
