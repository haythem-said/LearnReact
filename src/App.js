import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hearder from "./components/header/Header";
import Home from "./pages/Home";
import LearnPage from "./pages/learnPages/LearnPage";
import GeneralConcept from "./pages/generalConcept/GeneralConcept";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/learn" element={<LearnPage />}></Route>
          <Route
            path="/learn/general-concept"
            element={<GeneralConcept />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
