import { FC, useEffect, useState } from "react";
import Header from "../components/dashboard/Header";
import QuestionInput from "../components/dashboard/QuestionInput";
import QuesDisplay from "../components/dashboard/QuesDisplay";
import { addQuestions, deleteQuestions, getQuestions } from "../api/question";

export interface Ques {
  createdAt?: string;
  id?: string;
  question?: string;
}

const Dashboard: FC<{}> = () => {
  const [questions, setQuestions] = useState<Ques[]>([]);
  const handleAddQuestion = async (question: string) => {
    // questions.push(question);
    await addQuestions(question);
    const questions = await getQuestions();
    if (questions !== "error") {
      setQuestions([...questions]);
    }
  };

  const handleClear = async () => {
    try {
      await deleteQuestions();
      setQuestions([]);
    } catch (error) {
      console.log(error);
    }
  };

  const getInitialQuestions = async () => {
    const initQuestions = await getQuestions();
    setQuestions(initQuestions);
  };

  useEffect(() => {
    getInitialQuestions();
  }, []);

  return (
    <div>
      <Header />
      <QuestionInput onAdd={handleAddQuestion} onClear={handleClear} />
      <QuesDisplay questions={questions} />
    </div>
  );
};

export default Dashboard;
