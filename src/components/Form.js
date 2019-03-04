import React from 'react';
import './Slider.css';


const Slider = (props) => {
    const { sliderValue, handleSlide, handleSubmit, handleChange, notes } = props
    return (
        <div className="form-wrapper">
            {!!sliderValue && <p>{sliderValue}</p>}
            <input type="range" min="1" max="10" value={sliderValue} onChange={(event)=> handleSlide(event)}/>
            {!!sliderValue && <textarea placeholder="keep note on how you feel" rows="20" value={notes} cols="100" onChange={(event) => handleChange(event)}/>}
            {!!sliderValue && !!notes &&<button type="submit" onClick={handleSubmit}>Next</button>}
        </div>

    )
}

export default Slider;