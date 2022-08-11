import Slider from "../slider/Slider";
import { useState } from "react";

const RateInfoBox = (props) => {

    const [rate,setRate]=useState(15);
      const ratePercentage= (rate) =>{
        setRate(rate);
        props.rate(rate);

      }
    return (
        <div className="left-info">
        <div className="left-top">
          <div className="left-top-left">Rate</div>            
          <div className="left-top-right">            
            <div className="loan-amount">{rate}</div>
            <div className="currencysymbol">%</div>
          </div>
        </div>
        <div className="left-bottom">
            <Slider step={0.25}onChange ={ratePercentage} bgcolor="#33adff" maxValue={30}/>
        </div>
      </div>
    );
}
 
export default RateInfoBox;