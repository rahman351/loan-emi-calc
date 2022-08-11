import { useState } from 'react';
import './Slider.css';


const Slider = (props) => {
    const [sliderVal, setSliderVal] = useState(props.maxValue/2);
    const [gradient, setGradient] = useState('linear-gradient(to right,  '+props.bgcolor+' 0%,'+props.bgcolor+' 50%,#f6f6f6 50%,#f6f6f6 100%)')
    
    const doSlide = (e) => {
        setSliderVal(e.target.value);
        props.onChange(parseFloat(e.target.value));
        let position =(e.target.value/props.maxValue)*100;
        setGradient('linear-gradient(to right,  '+props.bgcolor+' 0%,'+props.bgcolor+' '+position+'%,#f6f6f6 '+position+'%,#f6f6f6 100%)')
    }
    return (
        <div>
            <div className='slider-container'>
                <input className='box' type="range" min="0" max={props.maxValue}
                value={sliderVal}
                step = {props.step} 
                onChange={(e)=> {doSlide(e)}} 
                style = {{background: gradient}}
                />
            </div>   
               
        </div>
    );
}
 
export default Slider;