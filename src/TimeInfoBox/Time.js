import Slider from "../slider/Slider";
import { useState } from "react";

const TimeInfoBox = () => {

    const [time,setTime]=useState(50);
      const timeperiod= (time) =>{
        setTime(time);
      }
    
    return (
        <div className="left-info">
        <div className="left-top">
          <div className="left-top-left">Years</div>            
          <div className="left-top-right">
            <div className="currencysymbol">Yr</div>
            <div className="loan-amount">{time}</div>
          </div>
        </div>
        <div className="left-bottom">
            <Slider onChange ={timeperiod}bgcolor="#00ff99" />
        </div>
      </div>
    );
}
 
export default TimeInfoBox;