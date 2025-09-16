import data from "../Data/interview";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

// ---------------- Answer Button ----------------
function AnswerButton({
  isOpen,
  answer,
  code,
}: {
  isOpen: boolean;
  answer: string;
  code: string;
}) {
  if (!isOpen) return null;

  return (
    <div>
      <p className="whitespace-pre-line">{answer}</p>

      {code && (
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          showLineNumbers
          wrapLongLines
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            fontSize: "0.9rem",
            marginBottom: "2rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

// ---------------- Page ----------------
export default function InterviewPage() {
  // Track which question IDs are currently open
  const [openIds, setOpenIds] = useState<number[]>([]);

  type InterviewData = {
    id: number;
    type: string;
    topic: string[];
    question: string;
    answer: string;
    code: string;
  };

  const javascriptData: InterviewData[] = data.filter(
    (q) => q.type === "JavaScript"
  );

  const behavioralData: InterviewData[] = data.filter(
    (q) => q.type === "Behavioral"
  );

  // If id already in array means we want to turn off -> filter out, otherwise add them in
  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex">
      <div className="w-[10%]" />
      <div className="w-[80%] p-4">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl">Interview Question</h1>
        </div>

        {/* JavaScript Section */}
        <div className="mb-[4rem]">
          <h2 className="text-2xl font-bold mb-4">I. JavaScript Question</h2>

          {javascriptData.map((question) => {
            const isOpen = openIds.includes(question.id);
            return (
              <div key={question.id} className="flex flex-col gap-5 mb-10">
                <h3 className="text-lg font-bold">
                  QUESTION {question.id + 1}:
                </h3>

                <div className="flex flex-wrap gap-3">
                  {question.topic.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-amber-500/90 px-3 py-1.5 text-sm font-bold shadow-md transition hover:bg-amber-600 hover:shadow-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="whitespace-pre-line">{question.question}</p>

                <h3
                  className="text-lg font-bold cursor-pointer select-none"
                  onClick={() => toggle(question.id)}
                >
                  ANSWER{" "}
                  <i
                    className={`fa-solid fa-caret-${isOpen ? "up" : "down"}`}
                  ></i>
                </h3>

                <AnswerButton
                  isOpen={isOpen}
                  answer={question.answer}
                  code={question.code}
                />
                <hr />
              </div>
            );
          })}
        </div>

        {/** Behavirol Section */}
        <div className="mb-[4rem]">
          <h2 className="text-2xl font-bold mb-4">II. Behavirol Question</h2>

          {behavioralData.map((question) => {
            const isOpen = openIds.includes(question.id);
            return (
              <div key={question.id} className="flex flex-col gap-5 mb-10">
                <h3 className="text-lg font-bold">
                  QUESTION {question.id + 1}:
                </h3>

                <div className="flex flex-wrap gap-3">
                  {question.topic.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-amber-500/90 px-3 py-1.5 text-sm font-bold shadow-md transition hover:bg-amber-600 hover:shadow-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="whitespace-pre-line">{question.question}</p>

                <h3
                  className="text-lg font-bold cursor-pointer select-none"
                  onClick={() => toggle(question.id)}
                >
                  ANSWER{" "}
                  <i
                    className={`fa-solid fa-caret-${isOpen ? "up" : "down"}`}
                  ></i>
                </h3>

                <AnswerButton
                  isOpen={isOpen}
                  answer={question.answer}
                  code={question.code}
                />
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[10%]" />
    </div>
  );
}
