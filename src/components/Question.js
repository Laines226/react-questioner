import React from 'react'

const Question = (props) => {
    console.log("Quiz [props.answer]", props.answer);
    const handleClick = (answerId) => {
        console.log("handleClick [props.quiz.id], [answerId]",props.quiz.id,  answerId);
        props.onAnswerClick(props.quiz.id, answerId);
    }
    const getSymbol = (option) => {
        console.log("getSymbol [option]" , option);
        if (!props.answer || option.id !== props.answer.answerId) {
            return <span>&#9744;</span>;
        }
        else if (props.answer.right) {
            return <span>&#9745;</span>;
        }
        else {
            return <span>&#9746;</span>;
        }
    }
    return (
        <div> question </div>
        )
    //        <button key={option.id} onClick={() => handleClick(option.id)} ><input value={option.text} ref={(input) => option.text = input} /></button>

}

Question.propTypes = {
}

export default Question