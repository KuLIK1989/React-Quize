import Answer from "./Answer";

const Question = ({questions}) => {
  console.log("questions", questions)
  return (
    <div>
      <div className="question">text of the Question</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
