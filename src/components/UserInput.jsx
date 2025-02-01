export default function UserInput({handleInput, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              handleInput(event, "initialInvestment")
            }
          ></input>
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => handleInput(event, "annualInvestment")}
          ></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => handleInput(event, "expectedReturn")}
          ></input>
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleInput(event, "duration")}
          ></input>
        </p>
      </div>
    </section>
  );
}
