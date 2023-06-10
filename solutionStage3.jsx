const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Withdrawal"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  
  return (
    <label className="label huge">
      { (isDeposit === true || isDeposit === false) && <h3> {choice[Number(!isDeposit)]}</h3> }
      { (isDeposit === true || isDeposit === false) && <input type="number" width="200" onChange={onChange}></input> }
      { (isDeposit === true || isDeposit === false) && <input type="submit" width="200" value="Submit"></input> }
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(null);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    if (isDeposit === false && deposit > totalState){
      alert("Insufficient funds. Please enter a smaller amount to  withdraw.");
      setTotalState(totalState);
      event.preventDefault();
    } else {    
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Withdrawal</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
