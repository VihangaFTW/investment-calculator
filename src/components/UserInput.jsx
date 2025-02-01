import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function UserInput() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleOnInputChange(event, name) {
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: event.target.value,
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={inputData.initialInvestment}
            required
            onChange={(event) =>
              handleOnInputChange(event, "initialInvestment")
            }
          ></input>
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={(event) => handleOnInputChange(event, "annualInvestment")}
          ></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={(event) => handleOnInputChange(event, "expectedReturn")}
          ></input>
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={inputData.duration}
            onChange={(event) => handleOnInputChange(event, "duration")}
          ></input>
        </p>
      </div>
    </section>
  );
}
