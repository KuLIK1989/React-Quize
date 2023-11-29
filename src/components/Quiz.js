import Question from "./Question";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log("state", quizState);
  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question questions={quizState.questions} />
        <div
          className="next-button"
          onClick={() => dispatch({ type: "NEXT_QESTION" })}
        >
          Next Question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
