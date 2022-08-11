import { useState } from 'react';
import './Slider.css';


const Slider = (props) => {
    const [sliderVal, setSliderVal] = useState(50);
    const [gradient, setGradient] = useState('linear-gradient(to right,  '+props.bgcolor+' 0%,'+props.bgcolor+' 50%,#f6f6f6 50%,#f6f6f6 100%)')
    
    const doSlide = (e) => {
        setSliderVal(e.target.value);
        props.onChange(e.target.value);
        setGradient('linear-gradient(to right,  '+props.bgcolor+' 0%,'+props.bgcolor+' '+e.target.value+'%,#f6f6f6 '+e.target.value+'%,#f6f6f6 100%)')
    }
    return (
        <div>
            <div className='slider-container'>
                <input className='box' type="range" min="0" max="100" 
                onChange={(e)=> {doSlide(e)}} 
                style = {{background: gradient}}
                />
            </div>   
               
        </div>
    );
}
 
export default Slider;