import Repeater from "./survey/Repeater";

const { render, useState } = wp.element;

const SurveyRepeater = () => {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>Survey Repeater</h1>

      <button onClick={handleClick}>New Question</button>
      <div>
        {Array.from(Array(counter)).map((c, index) => {
          return (
            <Repeater
              key={index}
              classes={`question_item reapetaer_btn_${index}`}
              htmlForData={"question_" + index}
              textLabel={`Question Survey`}
              type="text"
              inputId={"question_" + index}
            />
          );
        })}
      </div>
    </div>
  );
};
render(<SurveyRepeater />, document.getElementById(`react-app`));
