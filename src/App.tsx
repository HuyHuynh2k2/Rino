import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage.tsx";
import WorkPage from "./components/WorkPage.tsx";
import StudyPage from "./components/StudyPage.tsx";
import ContactPage from "./components/ContactPage.tsx";
import NeetcodePage from "./components/NeetcodePage.tsx";
import FlashCardPage from "./components/FlashCardPage.tsx";
import DataStructurePage from "./components/DataStructurePage.tsx";
import InterviewPage from "./components/InterviewPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/work" element={<WorkPage />}></Route>
      <Route path="/learn" element={<StudyPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>

      <Route
        path="/learn/studyguide/neetcode"
        element={<NeetcodePage />}
      ></Route>

      <Route
        path="/learn/studyguide/DataStructure"
        element={<DataStructurePage />}
      ></Route>

      <Route
        path="/learn/studyguide/Interview"
        element={<InterviewPage />}
      ></Route>

      <Route path="/learn/flashcard" element={<FlashCardPage />}></Route>
    </Routes>
  );
}

export default App;
