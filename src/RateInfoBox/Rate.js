import Slider from "../slider/Slider";
import { useState } from "react";

const RateInfoBox = () => {

    const [rate,setRate]=useState(15);
      const ratePercentage= (rate) =>{
        setRate(rate);

      }
    return (
        <div className="left-info">
        <div className="left-top">
          <div className="left-top-left">Rate</div>            
          <div className="left-top-right">
            <div className="currencysymbol">%</div>
            <div className="loan-amount">{rate}</div>
          </div>
        </div>
        <div className="left-bottom">
            <Slider onChange ={ratePercentage} bgcolor="#33adff" maxValue={30}/>
        </div>
      </div>
    );
}
 
export default RateInfoBox;