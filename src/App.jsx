import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CounterApp from "./components/CounterApp";
import NotFoundPage from "./components/NotFoundPage";
import ErrorBoundaryTest from "./components/ErrorBoundaryTest";
import ErrorBoundary from "./components/ErrorBoundary";
import BackgroundMusic from "./components/BackgroundMusic";
import EducationalFacts from "./components/EducationalFacts";

function App() {
  return (
    <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<CounterApp />} />
            <Route path="/music" element={<BackgroundMusic />} />
            <Route path="/facts" element={<EducationalFacts />} />
            <Route path="/error" element={<ErrorBoundaryTest />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
    </ErrorBoundary>
  );
}

export default App;
