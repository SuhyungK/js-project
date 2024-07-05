import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ values }) {
  const results = calculateInvestmentResults(values);
  console.log(results);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((re) => {
          const totalInterest =
            re.valueEndOfYear -
            re.annualInvestment * re.year -
            initialInvestment;

          const totalAmountInvested = re.valueEndOfYear - totalInterest;
          return (
            <tr key={re.year}>
              <td>{re.year}</td>
              <td>{formatter.format(re.valueEndOfYear)}</td>
              <td>{formatter.format(re.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
        {/* {results.map((re) => (
          <tr>
            <td>{re.year}</td>
            <td>{re.investmentValue}</td>
            <td>{re.interest}</td>
            <td>{re.totalInterest}</td>
            <td>{re.investedCapital}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}
