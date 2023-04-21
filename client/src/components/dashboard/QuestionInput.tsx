import { FC, useRef } from "react";

interface Props {
  onAdd: (ques: string) => void;
  onClear: () => void;
}

const QuestionInput: FC<Props> = ({ onAdd, onClear }) => {
  const quesRef = useRef<HTMLInputElement>(null);
  const handleAdd = () => {
    if (quesRef.current) {
      onAdd(quesRef.current.value);
      quesRef.current.value = "";
    }
  };
  return (
    <div>
      <input ref={quesRef} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={onClear}>Clear All</button>
    </div>
  );
};

export default QuestionInput;
