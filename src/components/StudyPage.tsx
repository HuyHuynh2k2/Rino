import { useEffect, useState } from "react";
import image1 from "../utils/images/saigon1.jpeg";
import image2 from "../utils/images/saigon2.jpeg";
import image3 from "../utils/images/saigon3.jpeg";
import image4 from "../utils/images/saigon4.jpeg";
import image5 from "../utils/images/saigon5.jpg";
import { useNavigate } from "react-router-dom";

export function SystemDesign() {
  return <div className="p-6 text-4xl">System Design Page</div>;
}
export function Algorithm() {
  return <div className="p-6 text-4xl">Algorithm Page</div>;
}

export function Interview() {
  return <div className="p-6 text-4xl">Interview Page</div>;
}
export function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="font-bold p-10">{time.toLocaleTimeString()}</div>;
}
type Topic = {
  index: string;
  name: string;
  image: string;
  action: () => void;
};
export default function StudyPage() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const topics: Topic[] = [
    {
      index: "001",
      name: "NEETCODE",
      image: image1,
      action: () => navigate("/learn/studyguide/neetcode"),
    },
    {
      index: "002",
      name: "SYSTEM DESIGN",
      image: image2,
      action: () => navigate("/learn/studyguide/SystemDesign"),
    },
    {
      index: "003",
      name: "ALGORITHM",
      image: image3,
      action: () => navigate("/learn/studyguide/Algorithm"),
    },
    {
      index: "004",
      name: "INTERVIEW",
      image: image4,
      action: () => navigate("/learn/studyguide/Interview"),
    },
    {
      index: "005",
      name: "DATA STRUCTURE",
      image: image5,
      action: () => navigate("/learn/studyguide/DataStructure"),
    },
  ];

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE - TOPICS */}
      <div className=" w-[35%] pl-10">
        <h1 className="text-[4rem] font-semibold mb-10">STUDY GUIDE</h1>
        <h2 className="flex items-center gap-2">
          <p className="font-bold">TOPIC</p>
          <i className="fa-solid fa-caret-down"></i>
        </h2>

        <div className="mt-15">
          {topics.map((topic, index) => (
            <button
              key={index}
              className="flex gap-20 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={topic.action}
            >
              <div
                className={
                  hoveredIndex === index
                    ? "font-bold flex gap-20  duration-700"
                    : "font-bold flex gap-20 text-gray-400 duration-700"
                }
              >
                <p>{topic.index}</p>
                <p>{topic.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MIDDLE - IMAGES */}
      <div className="w-[40%] flex flex-col gap-5 items-center pt-[10rem]">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="w-[600px] h-[100px] ml-9 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={topic.image}
              alt={topic.name}
              className={`w-full h-full object-cover transform transition duration-700 ease-in-out filter 
                ${
                  hoveredIndex === index
                    ? "grayscale-0 scale-110"
                    : "grayscale scale-100"
                }`}
            />
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className=" w-[20%] flex flex-col justify-between items-end">
        <button onClick={() => navigate("/")}>
          <p className="text-2xl font-bold pt-10 mr-10">HOME</p>
        </button>

        <Clock />
      </div>
    </div>
  );
}
