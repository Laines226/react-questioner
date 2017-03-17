import React from 'react'

const Quiz = (props) => {
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
        <div>
            <textarea value={props.quiz.question} readOnly /><br />
            {
                props.quiz.answerOptions.map((option) => {
                    return <button key={option.id} onClick={() => handleClick(option.id)} >{getSymbol(option)}  {option.text} </button>;
                })
            }
        </div>
    )
}

Quiz.propTypes = {
    quiz: React.PropTypes.shape({
        question: React.PropTypes.string.isRequired,
        answerOptions: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                text: React.PropTypes.string.isRequired
            })
        ).isRequired,
        rightAnswerId: React.PropTypes.number.isRequired
    })
}

export default Quiz