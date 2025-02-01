import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

function App() {

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
    <>
      <Header></Header>
      <UserInput userInput={inputData} handleInput={handleOnInputChange}></UserInput>
    </>
  );
}

export default App;
