'use client';

import { useState, useEffect } from "react";

export default function Questions(props) {

    const question = props.question;
    const [hideAnswer, setHideAnswer] = useState(true);
    const [answerHeight, setAnswerHeight] = useState(0);

    const ToggleAnswer = (e) => {
        setHideAnswer(!hideAnswer);
        if(hideAnswer) {
            setAnswerHeight('auto');
        } else {
            setAnswerHeight(0);
        }
    }

    return(
        <div className={`content ${hideAnswer && 'hide'}`}>
            <h2 onClick={(e) => ToggleAnswer(e)}>{question.question}</h2>
            <p className="answer" style={{height: answerHeight}}>{question.answer}</p>  
        </div> 
    )
}
