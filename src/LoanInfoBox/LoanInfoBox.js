import { useState } from "react";
import Slider from "../slider/Slider";



const LoanInfoBox = (props) => {

      const [loanAmount,setLoanAmount]=useState(5000000);
      const getLoanAmount = (amount) =>{
        setLoanAmount(amount);
        props.LoanAmount(amount);


      }
  
    return (  
        <div className="left-info">
            <div className="left-top">
              <div className="left-top-left">Load Amount  </div>            
              <div className="left-top-right">
                <div className="currencysymbol">₹</div>
                <div className="loan-amount">
                  {parseFloat(loanAmount.toFixed(2)).toLocaleString('en-IN')}
                </div>
              </div>
            </div>
            <div className="left-bottom">
                <Slider step={50000} onChange={getLoanAmount} bgcolor="#00ff99" maxValue ={10000000} />
            </div>
          </div>
    );
}
 
export default LoanInfoBox;