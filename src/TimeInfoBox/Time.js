import Slider from "../slider/Slider";
import { useState } from "react";

const TimeInfoBox = (props) => {

    const [time,setTime]=useState(15);
      const timeperiod= (time) =>{
        setTime(time);
        props.time(time);
      }
    
    return (
        <div className="left-info">
        <div className="left-top">
          <div className="left-top-left">Years</div>            
          <div className="left-top-right">
            <div className="loan-amount">{time}</div>
            <div className="currencysymbol">Yr</div>
          </div>
        </div>
        <div className="left-bottom">
            <Slider step={1}onChange ={timeperiod} bgcolor="#ff3385" maxValue={30}/>
        </div>
      </div>
    );
}
 
export default TimeInfoBox;