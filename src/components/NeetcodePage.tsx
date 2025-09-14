import { useState } from "react";
import { useNavigate } from "react-router-dom";
import problemsData from "../Data/neetcode";

type DataType = {
  id: number;
  difficulty: "Easy" | "Medium" | "Hard";
  name: string;
  topic: string;
  question: string;
  solution: string;
  approach: string;
};

export default function NeetcodePage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);
  const [problems] = useState<DataType[]>(problemsData);
  const [selectedProblem, setSelectedProblem] = useState<DataType | null>(null);

  const difficultyColors: Record<DataType["difficulty"], string> = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  const topics = [
    "Arrays & Hashing",
    "Two Pointers",
    "Stack",
    "Sliding Window",
    "Linked List",
    "Binary Search",
    "Trees",
    "Tries",
    "Heap / Priority Queue",
    "Backtracking",
  ];

  const filteredProblems = filter
    ? problems.filter((p) => p.topic === filter)
    : problems;

  return (
    <main className="flex flex-col gap-[2rem] h-screen font-sans">
      <div className="h-[15rem] flex justify-between p-[1.5rem]">
        <div className="text-[2rem] font-bold">
          NEET<span className="text-amber-600">CODE</span>
        </div>
        <button className="flex" onClick={() => navigate("/")}>
          <p className="text-[1.5rem] font-bold">HOME</p>
        </button>
      </div>

      <hr />

      <div className="h-[10rem] p-[1.5rem]">
        <p className="text-[1.2rem] font-bold mb-[20px]">PROBLEMS</p>
        <div className="flex gap-[1rem]">
          {topics.map((topic) => (
            <button
              key={topic}
              className={`border-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200 ${
                filter === topic
                  ? "bg-amber-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setFilter(topic)}
            >
              {topic}
            </button>
          ))}
          {filter && (
            <button
              onClick={() => setFilter(null)}
              className="ml-2 font-bold text-sm text-red-700 hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-10 p-[2rem]">
          {filteredProblems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => setSelectedProblem(problem)}
              className="bg-white h-[300px] w-full flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <p className="text-gray-800 font-medium">
                {problem.name.toUpperCase()}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProblem && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-start overflow-y-auto z-50"
          onClick={() => setSelectedProblem(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full my-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedProblem.name}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  difficultyColors[selectedProblem.difficulty]
                }`}
              >
                {selectedProblem.difficulty}
              </span>
            </div>

            <hr />

            {/* Question */}
            <div className="mb-4 mt-4">
              <h3 className="text-lg font-semibold">Question</h3>
              <pre className="whitespace-pre-line bg-gray-50 p-3 rounded-md text-sm">
                {selectedProblem.question}
              </pre>
            </div>

            <hr />

            {selectedProblem.approach && (
              <div className="mb-4 mt-4">
                <h3 className="text-lg font-semibold">Approach</h3>
                <pre className="whitespace-pre-line bg-gray-50 p-3 rounded-md text-sm">
                  {selectedProblem.approach}
                </pre>
              </div>
            )}

            <hr />

            {selectedProblem.solution && (
              <div className="mb-4 mt-4">
                <h3 className="text-lg font-semibold mb-4">Solution</h3>
                <pre className="whitespace-pre-wrap bg-gray-900 text-green-400 p-3 rounded-md text-sm overflow-x-auto">
                  {selectedProblem.solution}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
