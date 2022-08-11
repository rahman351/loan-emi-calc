import './App.css';
import LoanInfoBox from './LoanInfoBox/LoanInfoBox';
import RateInfoBox from './RateInfoBox/Rate';
import TimeInfoBox from './TimeInfoBox/Time';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">         
          <LoanInfoBox/>
          <RateInfoBox/>
          <TimeInfoBox/>
          <div className="details">
            <div>Monthly EMI </div>
            <div>Principal Amount </div>
            <div>Total Interest </div>
            <div>Total Amount </div>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  );
}

export default App;
