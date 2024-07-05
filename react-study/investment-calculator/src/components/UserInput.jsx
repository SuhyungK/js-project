export default function UserInput({ values, onChangeInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    values;
  const onChangeInputData = (e) => {
    onChangeInput(e.target.name, e.target.value);
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment"
            name="initialInvestment"
            defaultValue={initialInvestment}
            onChange={onChangeInputData}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment"
            name="annualInvestment"
            defaultValue={annualInvestment}
            onChange={onChangeInputData}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected-return"
            name="expectedReturn"
            defaultValue={expectedReturn}
            onChange={onChangeInputData}
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            name="duration"
            defaultValue={duration}
            onChange={onChangeInputData}
          />
        </div>
      </div>
    </div>
  );
}
