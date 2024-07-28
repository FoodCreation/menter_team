"use client"
import React, { useState } from 'react';
import "app/styles/hunger-slider.css"

export default function HungerSlider() {
    const [hungerLevel, setHungerLevel] = useState(6);

    const handleSliderChange = (event) => {
        setHungerLevel(event.target.value);
    };

    return (
        <div className='my-10 text-slate-900 w-full'>
            <h1 className='text-2xl font-bold py-3'>今の空腹度を選んでね！（0〜10）</h1>
            <input
                type="range"
                min={1}
                max="10"
                value={hungerLevel}
                onChange={handleSliderChange}
                step="1"
                className="w-full inputRange mt-5 mb-2"
            />
            <div className="flex justify-between text-lg font-bold pt-2 text-slate-900 mx-3">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
        </div>
    );
}