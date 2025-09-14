import flashcardbg from "../utils/images/flashcard-bg.jpg";
import data from "../Data/flashcard";
import { useState } from "react";

interface CardProps {
  isClicked: boolean;
  onClick: () => void;
  questionIndex: number;
}

type Flashcard = {
  question: string;
  answer: string;
};

function Card({ isClicked, onClick, questionIndex }: CardProps) {
  const currentQuestion: Flashcard = data[questionIndex];

  return (
    <div
      onClick={onClick}
      className="w-[60rem] h-[40rem] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform"
        style={{
          transformStyle: "preserve-3d",
          transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front and Back both exist at the same time!!! */}
        {/* Front */}
        <div
          className="absolute w-full h-full bg-amber-50 flex justify-center items-center p-10 text-xl shadow-lg rounded-lg"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {currentQuestion.question}
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-amber-50 flex justify-center items-center p-10 text-xl shadow-lg rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {currentQuestion.answer}
        </div>
      </div>
    </div>
  );
}

export default function FlashCardPage() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const prevQuestion = () => {
    setQuestionIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    setIsClicked(false);
  };

  const nextQuestion = () => {
    setQuestionIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    setIsClicked(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${flashcardbg})` }}
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
    >
      {/* Card */}
      <Card
        isClicked={isClicked}
        onClick={() => setIsClicked(!isClicked)}
        questionIndex={questionIndex}
      />

      {/* Navigation */}
      <div className="flex justify-between w-[60rem] mt-6 text-3xl text-white">
        <button onClick={prevQuestion} className="hover:text-amber-500">
          <i className="fa-solid fa-left-long"></i>
        </button>
        <p>{questionIndex + 1 + "/" + data.length}</p>
        <button onClick={nextQuestion} className="hover:text-amber-500">
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
