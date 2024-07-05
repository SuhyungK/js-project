import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [values, setValues] = useState(INITIAL_VALUES);

  // const results = calculateInvestmentResults(values);
  // function deriveResults() {
  //   console.log(results);

  //   return results.map((value, idx, arr) => {
  //     return {
  //       year: value.year,
  //       interest: formatter.format(value.interest),
  //       totalInterest: formatter.format(
  //         arr.slice(0, idx + 1).reduce((acc, cur) => {
  //           return acc + cur.interest;
  //         }, 0)
  //       ),
  //       investmentValue: formatter.format(value.valueEndOfYear),
  //       investedCapital: formatter.format(
  //         values.initialInvestment + value.annualInvestment * (idx + 1)
  //       ),
  //     };
  //   });
  // }

  // const resultArray = deriveResults();
  const handleInputValue = (valueName, valueData) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [valueName]: +valueData,
      };
    });
  };
  return (
    <main>
      <Header />
      <UserInput values={values} onChangeInput={handleInputValue} />
      <Result values={values} />
    </main>
  );
}

export default App;
