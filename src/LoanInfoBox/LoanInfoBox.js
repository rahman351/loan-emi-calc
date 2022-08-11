import { useState } from "react";
import Slider from "../slider/Slider";
import "./LoanInfoBox.css"


const LoanInfoBox = () => {

      const [loanAmount,setLonaAmount]=useState(5000000);
      const getLoanAmount = (amount) =>{
        setLonaAmount(amount);

      }
  
    return (  
        <div className="left-info">
            <div className="left-top">
              <div className="left-top-left">Load Amount  </div>            
              <div className="left-top-right">
                <div className="currencysymbol">₹</div>
                <div className="loan-amount">{loanAmount}</div>
              </div>
            </div>
            <div className="left-bottom">
                <Slider onChange={getLoanAmount} bgcolor="#00ff99" maxValue ={10000000} />
            </div>
          </div>
    );
}
 
export default LoanInfoBox;