import React from 'react';

const Question = (props) => {
    console.log("Quiz [props.answer]", props.answer);
    const handleClick = (answerId) => {
        props.onClick( answerId);
    };
    return (
        props.normalQuiz?
          <button className="btn btn-primary col-xs-12 col-sm-12 col-md-6 col-lg-6" onClick={() => handleClick(props.option.id)} >{props.option.text}</button>
          :
            <div className="input-group col-xs-12 col-sm-12 col-md-6 col-lg-6" key={props.option.id}>

              <span className="input-group-addon">
                <input type="checkbox" onClick={() => handleClick(props.option.id)} />
              </span>
              <input type="text" className="form-control" value={props.option.text} onClick={() => handleClick(props.option.id)} onChange={(event) => {props.onAnswerChange(event, props.option.id);}} />
            </div>

        );
};

Question.propTypes = {
};

export default Question;
