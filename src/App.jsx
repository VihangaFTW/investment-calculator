import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";


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
      [name]: +event.target.value,
    }));
  }


  return (
    <>
      <Header/>
      <UserInput userInput={inputData} handleInput={handleOnInputChange}/>
      <Results userInput={inputData}/>
    </>
  );
}

export default App;
