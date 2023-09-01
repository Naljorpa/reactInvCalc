import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';


function App() {

  const [userInput, setUserInput] = useState([]);

  const yearlyData = []; // per-year results

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onSaveInvestingData={calculateHandler} />
      {yearlyData.length > 0 ? (
        <ResultsTable yearlyData={yearlyData} />
      ) : (
        <p>No data available yet.</p>
      )}
    </div>
  );
}

export default App;
