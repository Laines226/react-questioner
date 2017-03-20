import React from 'react'

const Quiz = (props) => {
    console.log("Quiz [props.answer]", props.answer);
    const handleClick = (answerId) => {
        console.log("handleClick [props.quiz.id], [answerId]", props.quiz.id, answerId);
        props.onAnswerClick(props.quiz.id, answerId);
    }

    return (
        <div>
            <textarea value={props.quiz.question} readOnly={props.normalQuiz} onChange={ (event) => {props.onQuestionChange(event)}}/><br />
            {
                props.quiz.answerOptions.map((option) => {
                    return <div key={option.id} onClick={() => handleClick(option.id)} >{props.getSymbol(option.id)}  {props.normalQuiz ?<span>  {option.text}</span>:<span><input type="text" value={option.text}  onChange={ (event) => {props.onAnswerChange(event, option.id)}} /></span>} </div>;
                })
            }
        </div>
    )
}

Quiz.defaultProps = {
    normalQuiz: true
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