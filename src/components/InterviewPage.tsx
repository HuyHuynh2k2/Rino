import data from "../Data/interview";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // you can pick another style

export default function InterviewPage() {
  type InterviewData = {
    id: number;
    type: string;
    topic: string[];
    question: string;
    answer: string;
    code: string;
  };

  const javascriptData: InterviewData[] = data.filter(
    (question) => question.type === "JavaScript"
  );

  return (
    <div className="flex">
      <div className="w-[10%]" />
      <div className="w-[80%] p-4">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-3xl">Interview Question</h1>
        </div>

        {/* JavaScript Section */}
        <div className="mb-[4rem]">
          <h2 className="text-2xl font-bold mb-4">I. JavaScript</h2>

          {javascriptData.map((question) => (
            <div key={question.id} className="flex flex-col gap-5 mb-10">
              <h3 className="text-lg font-bold">QUESTION {question.id + 1}:</h3>

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

              <h3 className="text-lg font-bold">ANSWER:</h3>
              <p className="whitespace-pre-line">{question.answer}</p>

              {/* ✅ Syntax-highlighted code */}
              {question.code && (
                <SyntaxHighlighter
                  language="javascript"
                  style={oneDark}
                  showLineNumbers
                  wrapLongLines
                  customStyle={{
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    marginBottom: "10rem",
                  }}
                >
                  {question.code}
                </SyntaxHighlighter>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[10%]" />
    </div>
  );
}
