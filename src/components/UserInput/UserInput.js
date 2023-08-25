import React, { useState } from 'react';

const UserInput = (props) => {

  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'current-savings') {
      setCurrentSavings(value);
    } else if (identifier === 'yearly-contribution') {
      setYearlyContribution(value);
    } else if (identifier === 'expected-return') {
      setExpectedReturn(value);
    } else {
      setDuration(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investingData = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    }

    props.onSaveInvestingData(investingData);
    setCurrentSavings('');
    setYearlyContribution('');
    setExpectedReturn('');
    setDuration('');
  };

  // <form onSubmit={submitHandler}>
  // <div className='new-expense__controls'>
  //     <div className='new-expense__control'>
  //         <label>Title</label>
  //         <input type="text" value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} />
  //     </div>

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings"  value={currentSavings} onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={expectedReturn} onChange={(event) => inputChangeHandler('expected-return', event.target.value)}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={duration} onChange={(event) => inputChangeHandler('duration', event.target.value)}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
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