import background from "../utils/images/home-bg.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  return (
    <main
      className="h-screen flex relative overflow-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[20%] flex flex-col items-center justify-between py-8 relative z-10 text-amber-50">
        <div className="flex flex-col items-center space-y-6">
          <p className="rotate-90 tracking-widest text-sm">LI</p>
          <p className="rotate-90 tracking-widest text-sm">TW</p>
          <p className="rotate-90 tracking-widest text-sm">DR</p>
        </div>
        <div className="w-[1px] h-24 bg-gray-500 my-6"></div>
        <p className="rotate-90 text-xs tracking-widest">05/2002</p>
      </div>

      <div className="w-[30%] flex items-center justify-center relative z-10 text-amber-50">
        <div className="flex flex-col gap-4 text-sm">
          <p>Huy L Huynh</p>
          <p>
            CS @ UW &#183; Software Developer &#183; AI &#183; Web Developer
          </p>
          <p>
            Creating functional and engaging digital experience in Seattle,
            Washington
          </p>
        </div>
      </div>

      <div className="self-route w-[60%] flex items-center justify-center relative z-10">
        <div className="flex flex-col gap-5 text-[4rem] font-bold items-start">
          <button onClick={() => navigate("/work")}>WORK</button>
          <button onClick={() => setDropdown(!dropdown)}>LEARN</button>

          {dropdown && (
            <div className="text-sm text-gray-500 flex flex-col items-start gap-2 dropdown">
              <button
                className="dropdown-item hover:text-amber-500 transition-all duration-300"
                onClick={() => navigate("/learn")}
                style={{ animationDelay: "0.1s" }}
              >
                Study Guide
              </button>
              <button
                className="dropdown-item hover:text-amber-500 transition-all duration-300"
                onClick={() => navigate("/flashcard")}
                style={{ animationDelay: "0.2s" }}
              >
                Flash Card
              </button>
              <button
                className="dropdown-item hover:text-amber-500 transition-all duration-300"
                onClick={() => navigate("/ai-agents")}
                style={{ animationDelay: "0.3s" }}
              >
                AI Agent
              </button>
            </div>
          )}

          <button onClick={() => navigate("/contact")}>CONTACT</button>
        </div>
      </div>
    </main>
  );
}
