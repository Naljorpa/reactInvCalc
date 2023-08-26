import React, { useState } from 'react';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1000,
  'expected-return': 7,
  'duration': 10
}
const UserInput = (props) => {

  // const [currentSavings, setCurrentSavings] = useState('10000');
  // const [yearlyContribution, setYearlyContribution] = useState('1000');
  // const [expectedReturn, setExpectedReturn] = useState('7');
  // const [duration, setDuration] = useState('10');

  const [userInput, setUserInput] = useState(initialUserInput)

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === 'current-savings') {
  //     setCurrentSavings(value);
  //   } else if (identifier === 'yearly-contribution') {
  //     setYearlyContribution(value);
  //   } else if (identifier === 'expected-return') {
  //     setExpectedReturn(value);
  //   } else {
  //     setDuration(value);
  //   }
  // };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      }
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investingData = {
      currentSavings: userInput['current-savings'],
      yearlyContribution: userInput['yearly-contribution'],
      expectedReturn: userInput['expected-return'],
      duration: userInput['duration'],
    }
    

    props.onSaveInvestingData(investingData);

    setUserInput(initialUserInput);
  };

  // const resetHandler = () => {
  //   setCurrentSavings('');
  //   setYearlyContribution('');
  //   setExpectedReturn('');
  //   setDuration('');
  // }

  const resetHandler = () => {
    setUserInput(initialUserInput);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={userInput['current-savings']} onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={userInput['yearly-contribution']} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={userInput['expected-return']} onChange={(event) => inputChangeHandler('expected-return', event.target.value)} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={userInput['duration']} onChange={(event) => inputChangeHandler('duration', event.target.value)} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
};

export default UserInput;