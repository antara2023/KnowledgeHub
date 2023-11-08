import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { CoursePage } from "./components/CoursePage";
import { CourseDetailPage } from "./components/CourseDetailPage";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CoursePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detail/:courseId" element={<CourseDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
