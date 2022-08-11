import { useState } from 'react';
import './App.css';
import LoanInfoBox from './LoanInfoBox/LoanInfoBox';
import RateInfoBox from './RateInfoBox/Rate';
import TimeInfoBox from './TimeInfoBox/Time';


function App() {
      const [loanAmount,setLoanAmount]=useState(5000000);
      const [rate,setRate]=useState(15);
      const [time,setTime]=useState(15);

      const calcFactorOne = () =>{
        let monthlyRate = (rate/12)/100;
        let totalMonths =time*12;
        
        let factor1= loanAmount*monthlyRate*Math.pow(1+monthlyRate,totalMonths);
        return factor1;

      }

      const calcFactorTwo = () =>{
        let monthlyRate = (rate/12)/100;
        console.log(monthlyRate);
        let totalMonths =time*12;
        let factor2 = Math.pow(1+monthlyRate,totalMonths)-1;
        return factor2;
         
      }

      var factor1 = calcFactorOne();
      var factor2 = calcFactorTwo();
      var monthlyEmi = factor1/factor2;
      var totalAmount= monthlyEmi*12*time;
      var totalInterest=totalAmount-loanAmount;
      




  return (
    <div className="App">
      <div className="container">
        <div className="left">         
          <LoanInfoBox LoanAmount={setLoanAmount}/>
          <RateInfoBox  rate={setRate}/>
          <TimeInfoBox  time={setTime}/>
          <div className="details">
            <div>Monthly EMI ₹{monthlyEmi.toFixed(2)} </div>
            <div>Principal Amount ₹{loanAmount.toFixed(2)}</div>
            <div>Total Interest ₹{totalInterest.toFixed(2)}</div>
            <div>Total Amount ₹{totalAmount.toFixed(2)} </div>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  );
}

export default App;
