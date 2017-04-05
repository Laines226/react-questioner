import React from 'react';
import Question from './Question';

const Quiz = (props) => {

    const handleClick = (answerId) => {
      props.onAnswerClick(props.quiz.id, answerId);
    };

    return (
      <div className="row">
        <input className=" col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text" value={props.quiz.question} readOnly={props.normalQuiz} onChange={(event) => {props.onQuestionChange(event);}}  />
        {
          props.quiz.answerOptions.map((option) => {
            return (
              <div key={option.id} >
                <Question option={option} normalQuiz={props.normalQuiz} onAnswerChange={props.onAnswerChange} onClick={handleClick} />
              </div>
            );
          })
        }
      </div>
    );
};

Quiz.defaultProps = {
    normalQuiz: true
};

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
};

export default Quiz;
