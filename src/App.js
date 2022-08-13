import { useState } from 'react';
import './App.css';
import LoanInfoBox from './LoanInfoBox/LoanInfoBox';
import RateInfoBox from './RateInfoBox/Rate';
import TimeInfoBox from './TimeInfoBox/Time';
import PieChart  from './PieChart/PieChart';


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
      <link href='https://fonts.googleapis.com/css?family=Bai Jamjuree' rel='stylesheet'></link>
      <header> Loan EMI Calculator</header>
      <div className="container">
        <div className="left">         
          <LoanInfoBox LoanAmount={setLoanAmount}/>
          <RateInfoBox  rate={setRate}/>
          <TimeInfoBox  time={setTime}/>
          
          <div className="details">
            <div className='amount-detail'>
               <div>Monthly EMI </div> 
               <div>₹{parseFloat(monthlyEmi.toFixed(2)).toLocaleString('en-IN')}</div>   
            </div>
            <div className='amount-detail'>
               <div>Principal Amount </div> 
               <div>₹{parseFloat(loanAmount.toFixed(2)).toLocaleString('en-IN')}</div>   
            </div>
            <div className='amount-detail'>
               <div>Total Interest</div> 
               <div>₹{parseFloat(totalInterest.toFixed(2)).toLocaleString('en-IN')}</div>   
            </div>
            <div className='amount-detail'>
               <div>Total Amount</div> 
               <div>₹{parseFloat(totalAmount.toFixed(2)).toLocaleString('en-IN')}</div>   
            </div>
          </div>
        </div>
        <div className="right">
          <PieChart labels={["Principal Amount", "Interest Amount"]} data={[loanAmount,totalInterest]}/>
        </div>
      </div>
      <footer> Source code : <a href="https://github.com/rahman351/loan-emi-calc">https://github.com/rahman351/loan-emi-calc</a></footer>
    </div>
  );
}

export default App;
