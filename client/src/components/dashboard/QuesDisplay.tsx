import { FC } from "react";
import { Ques } from "../../pages/Dashboard";

interface Props {
  questions: Ques[];
}
const QuesDisplay: FC<Props> = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>{question.question}</div>
      ))}
    </div>
  );
};

export default QuesDisplay;
