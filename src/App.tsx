import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage.tsx";
import WorkPage from "./components/WorkPage.tsx";
import LearnPage from "./components/LearnPage.tsx";
import ContactPage from "./components/ContactPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/work" element={<WorkPage />}></Route>
      <Route path="/learn" element={<LearnPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
