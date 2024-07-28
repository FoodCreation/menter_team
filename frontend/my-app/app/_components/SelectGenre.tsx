"use client";
import React from "react";
import { useState } from "react";

export default function SelectGenre() {

    type ButtonValue = 'chineseCuisineValue' | 'japaneseCuisineValue' | 'westernCuisineValue';

    const [selectedButton, setSelectedButton] = useState<ButtonValue | null>(null);
    const [abc, setAbc] = useState<string>('defaultAbc');
    const [recommendation, setRecommendation] = useState<string>('');

    const handleButtonClick = (value: ButtonValue) => {
        setSelectedButton(value);
    };

    const handleSubmit = async () => {
        const food_type = selectedButton;
        const hunger_level = 6;

        const response = await fetch('http://localhost:8000/recommend', { // FastAPIのエンドポイントに送信
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ food_type, hunger_level }), // 変数を送信
        });
        const result = await response.json();
        setRecommendation(result.recommendation); // recommendationのステートに結果を設定
    };

    return (
        <div className="py-10 w-full">
            <h1 className='text-2xl font-bold py-3'>好みの料理タイプを選んでね！</h1>
            <div className="mx-auto flex justify-between pt-3">
                <input type="radio" name="genre" className="btn btn-wide text-lg" aria-label="和食"
                    onClick={() => handleButtonClick('japaneseCuisineValue')}
                ></input>
                <input type="radio" name="genre" className="btn btn-wide text-lg" aria-label="養殖"
                    onClick={() => handleButtonClick('westernCuisineValue')}
                ></input>
                <input type="radio" name="genre" className="btn btn-wide text-lg" aria-label="中華人民共和国"
                    onClick={() => handleButtonClick('chineseCuisineValue')}
                ></input>
            </div>

            <div className="text-center mt-20 mb-10">
                <button className="btn btn-wide btn-lg text-slate-50 btn-primary text-4xl" onClick={handleSubmit}>送信</button>
            </div>

        </div>
    );
}